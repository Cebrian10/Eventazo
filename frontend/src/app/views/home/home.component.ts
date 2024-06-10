// src/app/components/home/home.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userRol = signal<number>(0);
  userName = (() => {
    switch (this.userRol()) {
      case 1: return 'Marta';
      case 2: return 'Pedro';
      default: return 'Juana';
    }
  });

  constructor() { }

  dale() {
    console.log(this.userRol());
    this.userRol.set(this.userRol() + 1);
    if (this.userRol() > 2) {
      this.userRol.set(0); // Reinicia a 0 si supera el valor de 2
    }
  }
}


