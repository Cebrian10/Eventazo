import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SkeletonModule } from 'primeng/skeleton';

import { ApiService } from '../../services/api.service';

interface Event {
  ID: number;
  Nombre: string;
  Lugar: string;
  Dia_Hora_Inicio: string;
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
        this.loading = false;
      });
  }

  rechazarEvento(id: number) {    
    console.log('rechazarEvento ', id);
  }

  aprobarEvento(id: number) {    
    console.log('aprobarEvento ', id);
  }
}