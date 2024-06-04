// src/app/views/home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../../components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeComponent  // Importar el componente independiente
  ]
})
export class HomeModule { }
