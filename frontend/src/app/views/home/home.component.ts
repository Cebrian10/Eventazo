import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { HomecitoComponent } from '../../components/homecito/homecito.component';
import { CardComponent } from '../../components/card/card.component';

import { ButtonModule } from 'primeng/button';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomecitoComponent, CardComponent, ButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly sessionService = inject(SessionService);
  private userRoleSubscription: Subscription | null = null;

  userRol = signal<number>(0);

  ngOnInit() {
    this.userRoleSubscription = this.sessionService.userRole$.subscribe(roleId => this.userRol.set(roleId));
    this.userRol.set(isNaN(parseInt(this.sessionService.getIdRolToken(), 10)) ? 0 : parseInt(this.sessionService.getIdRolToken(), 10));
  }

  cards = [
    {
      id: 1,
      header: 'Advanced Card 1',
      subheader: 'Card Subheader 1',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Atlapa',
      date: '1 JUN'
    },
    {
      id: 2,
      header: 'Advanced Card 2',
      subheader: 'Card Subheader 2',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Centro Figali',
      date: '2 JUN'
    },
    {
      id: 3,
      header: 'Advanced Card 3',
      subheader: 'Card Subheader 3',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Instituto America',
      date: '3 JUN'
    },
    {
      id: 4,
      header: 'Advanced Card 4',
      subheader: 'Card Subheader 4',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Comunidad Apostolica Hosanna',
      date: '4 JUN'
    },
    {
      id: 5,
      header: 'Advanced Card 5',
      subheader: 'Card Subheader 5',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Rio de Janeiro',
      date: '5 JUN'
    },
    {
      id: 6,
      header: 'Advanced Card 6',
      subheader: 'Card Subheader 6',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Narnia',
      date: '6 JUN'
    },
    {
      id: 7,
      header: 'Advanced Card 7',
      subheader: 'Card Subheader 7',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Universidad Tecnologica de Panama',
      date: '7 JUN'
    },
    {
      id: 8,
      header: 'Advanced Card 8',
      subheader: 'Card Subheader 8',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Se me acaban las ideas',
      date: '8 JUN'
    },
    {
      id: 9,
      header: 'Advanced Card 9',
      subheader: 'Card Subheader 9',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Albrook Mall',
      date: '9 JUN'
    },
  ];

  onBuy(id: number) {
    if (this.userRol() != 0) {
      console.log(this.userRol())
      console.log('Card ID:', id);

      this.router.navigate(['/buy']);
    } else {
      console.log('No tienes permisos para comprar');
    }
  }
}