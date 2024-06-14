import { Component, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { Router } from '@angular/router';

import { Step1Component } from '../steps/step1/step1.component';
import { Step2Component } from '../steps/step2/step2.component';
import { Step3Component } from '../steps/step3/step3.component';
import { Step4Component } from '../steps/step4/step4.component';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [StepsModule, Step1Component, Step2Component, Step3Component, Step4Component],
  providers: [],
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  items: MenuItem[] | undefined;
  currentStep: string = 'step1';

  constructor(private readonly router: Router) { }

  ngOnInit() {
    this.items = [
      { label: 'Horario', command: () => this.goToPage('step1') },
      { label: 'Asiento', command: () => this.goToPage('step2') },
      { label: 'Pagar', command: () => this.goToPage('step3') },
      { label: 'Confirmación', command: () => this.goToPage('step4') }
    ];
  }

  goToPage(page: string) {
    this.currentStep = page;
    // this.router.navigate([`/${page}`]);
  }

  nextStep() {
    // const currentIndex = this.items?.findIndex(item => item.command?.name.includes(this.currentStep));
    // if (this.items !== undefined && currentIndex !== undefined && currentIndex < this.items.length - 1) {
    //   this.goToPage(`step${currentIndex + 2}`);
    // }
    this.goToPage('step2');
  }

  previousStep() {
    const currentIndex = this.items?.findIndex(item => item.command?.name.includes(this.currentStep));
    if (currentIndex !== undefined && currentIndex > 0) {
      this.goToPage(`step${currentIndex}`);
    }
  }
}
