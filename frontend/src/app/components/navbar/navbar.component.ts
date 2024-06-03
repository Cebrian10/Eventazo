import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faPencilAlt, faPhone, faComments, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  faHome = faHome;
  faPencilAlt = faPencilAlt;
  faPhone = faPhone;
  faComments = faComments;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'faHome',
        command: () => this.router.navigate(['/home'])

      },
      {
        label: 'Blog',
        icon: 'faPencilAlt',
        command: () => this.router.navigate(['/blog'])

      },
      {
        label: 'Contacto',
        icon: 'faPhone',
        command: () => this.router.navigate(['/contact'])
      },
      {
        label: 'Preguntas frecuentes',
        icon: 'faComments',
        command: () => this.router.navigate(['/questions'])
      }
    ];
  }

  getIcon(iconName: string): IconDefinition {
    switch (iconName) {
      case 'faHome':
        return this.faHome;
      case 'faPencilAlt':
        return this.faPencilAlt;
      case 'faPhone':
        return this.faPhone;
      case 'faComments':
        return this.faComments;
      default:
        return this.faHome;
    }
  }
}
