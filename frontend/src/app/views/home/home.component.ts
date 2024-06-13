import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomecitoComponent } from '../../components/homecito/homecito.component';
import { CardComponent } from '../../components/card/card.component';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomecitoComponent, CardComponent, ButtonModule],
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

  cards = [
    {
      header: 'Advanced Card 1',
      subheader: 'Card Subheader 1',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      date: '1 JUN'
    },
    {
      header: 'Advanced Card 2',
      subheader: 'Card Subheader 2',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      date: '2 JUN'
    },
    {
      header: 'Advanced Card 3',
      subheader: 'Card Subheader 3',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      date: '3 JUN'
    },
    {
      header: 'Advanced Card 4',
      subheader: 'Card Subheader 4',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      date: '4 JUN'
    },
    {
      header: 'Advanced Card 5',
      subheader: 'Card Subheader 5',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      date: '5 JUN'
    },
    {
      header: 'Advanced Card 6',
      subheader: 'Card Subheader 6',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      date: '6 JUN'
    },
    {
      header: 'Advanced Card 7',
      subheader: 'Card Subheader 7',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      date: '7 JUN'
    },
    {
      header: 'Advanced Card 8',
      subheader: 'Card Subheader 8',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      date: '8 JUN'
    },
    {
      header: 'Advanced Card 9',
      subheader: 'Card Subheader 9',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      date: '9 JUN'
    },
  ];

  constructor() {

  }


}


