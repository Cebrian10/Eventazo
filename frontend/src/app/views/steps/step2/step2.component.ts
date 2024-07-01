import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ApiService } from '../../../services/api.service';

import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [CommonModule, SkeletonModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2Component implements OnInit {

  ID: string | null | undefined;
  listaBoletos: any[] = [];
  listaPuestos: number[] = [];
  boletosFiltrados: any[] = [];
  loading = true;

  private readonly apiService = inject(ApiService);
  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.ID = this.activatedRoute.snapshot.paramMap.get('id');

    const storedPuestos = localStorage.getItem('listaPuestos');

    if (storedPuestos) {
      const parsedPuestos = JSON.parse(storedPuestos) as string[];
      this.listaPuestos = parsedPuestos.map(puesto => parseInt(puesto, 10));
    }
    
    this.apiService.getBoletoPorIdEvento('boleto/' + this.ID).subscribe((response) => {
      this.listaBoletos = response.result;

      this.listaPuestos.forEach((puesto: number) => {
        const boletosFiltradosPorPuesto = this.listaBoletos.filter(boleto => boleto.ID_TipoBoleto === puesto);
        this.boletosFiltrados = this.boletosFiltrados.concat(boletosFiltradosPorPuesto);
      });
    });    
    this.loading = false;
  }
}