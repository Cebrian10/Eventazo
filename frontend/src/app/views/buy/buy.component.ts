import { Component, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';

import { CardComponent } from '../../components/card/card.component';
import { Step1Component } from '../steps/step1/step1.component';
import { Step2Component } from '../steps/step2/step2.component';
import { Step3Component } from '../steps/step3/step3.component';
import { Step4Component } from '../steps/step4/step4.component';

import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [StepsModule, CardComponent, Step1Component, Step2Component, Step3Component, Step4Component, SkeletonModule],
  providers: [],
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  items: MenuItem[] | undefined;

  card: {
    ID: number, Nombre: string, Foto: string, Lugar: string, Dia_Hora_Inicio: string
  } = { ID: 0, Nombre: '', Foto: '', Lugar: '', Dia_Hora_Inicio: '' };
  
  currentStep: string = 'step1';
  activeIndex: number = 0;

  ID: string | undefined | null;

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly apiService = inject(ApiService);

  ngOnInit() {
    this.ID = this.activatedRoute.snapshot.paramMap.get('id');

    this.items = [
      { label: 'Horario', command: () => this.goToPage('step1') },
      { label: 'Asiento', command: () => this.goToPage('step2') },
      { label: 'Pagar', command: () => this.goToPage('step3') },
      { label: 'Confirmación', command: () => this.goToPage('step4') }
    ];

    this.apiService.postEventoId('evento/' + this.ID).subscribe((response) => {
      const fecha = new Date(response.result[0].Dia_Hora_Inicio);
      const dia = fecha.getDate();
      const mes = fecha.toLocaleString('default', { month: 'short' }).toUpperCase();
      const fechaFormateada = `${dia} ${mes}`;
      this.card = response.result[0];
      this.card.Dia_Hora_Inicio = fechaFormateada.toString();
    });

  }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  goToPage(page: string) {
    this.currentStep = page;
    // this.router.navigate([`/${page}`]);
  }
}