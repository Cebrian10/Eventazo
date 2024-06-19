import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SkeletonModule } from 'primeng/skeleton';

import { ApiService } from '../../services/api.service';

import Swal from 'sweetalert2';

interface Event {
  ID: number;
  Nombre: string;
  Lugar: string;
  Dia_Hora_Inicio: string;
  Dia_Hora_Final: string;
  DiaFinal: string;
  Detalles: string;
  Foto: string;
}

@Component({
  selector: 'app-eventdetail',
  standalone: true,
  imports: [SkeletonModule],
  templateUrl: './eventdetail.component.html',
  styleUrl: './eventdetail.component.scss'
})
export class EventdetailComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly apiService = inject(ApiService);

  ID: string | null | undefined;
  event: Event = {} as Event | any;
  boletos: any[] = [];
  loading = true;

  ngOnInit(): void {
    this.ID = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.postBoletoPorIdEvento('boleto/' + this.ID)
      .subscribe(response => {
        this.boletos = response.result;
      });

    this.apiService.postEventoId('evento/' + this.ID)
      .subscribe(response => {
        this.event = response.result[0];
        this.event.Dia_Hora_Inicio = this.formatDate(this.event.Dia_Hora_Inicio);
        this.event.Dia_Hora_Final = this.formatDate(this.event.Dia_Hora_Final);
        this.loading = false;
      });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  statusEvent(status: string, id: number) {

    Swal.fire({
      title: (status === 'approved') ? "Aprobando evento..." : "Rechazando evento...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });

    const formData = {
      "ID_Evento": id,
      "Status": (status === 'approved') ? 1 : 2
    }

    this.apiService.putStatusEvento('evento/status', formData)
      .subscribe(response => {

        if (response.status === 201) {
          Swal.fire({
            icon: 'success',
            title: (status === 'approved') ? "Evento aprobado" : "Evento rechazado",
            showConfirmButton: false,
            timer: 1500
          });

          setTimeout(() => {
            this.router.navigate(['/events']);
          }, 1500);
        }
        else {
          Swal.fire({
            icon: 'error',
            title: (status === 'approved') ? "Error al aprobar evento" : "Error al rechazar evento",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  }
}