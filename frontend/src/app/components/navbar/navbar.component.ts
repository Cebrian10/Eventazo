import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome, faPencilAlt, faPhone,
  faComments, IconDefinition, faCircleUser,
  faNewspaper, faCircleQuestion, faSpinner
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MenubarModule, AvatarModule, InputTextModule, RippleModule, CommonModule, FontAwesomeModule, MenuModule, ButtonModule]
})

export class NavbarComponent implements OnInit {
  userRegular: MenuItem[] | undefined;
  userPromoter: MenuItem[] | undefined;
  opcUsers: MenuItem[] | undefined;

  faHome = faHome;
  faNewspaper = faNewspaper;
  faPhone = faPhone;
  faCircleQuestion = faCircleQuestion;
  faPencilAlt = faPencilAlt;
  faComments = faComments;
  faCircleUser = faCircleUser;
  faSpinner = faSpinner;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userRegular = [
      { label: 'Inicio', command: () => this.goToPage('home'), icon: 'faHome', page: 'home' },
      { label: 'Noticias', command: () => this.goToPage('news'), icon: 'faNewspaper', page: 'news' },
      { label: 'Contacto', command: () => this.goToPage('contact'), icon: 'faPhone', page: 'contact' },
      { label: 'Preguntas frecuentes', command: () => this.goToPage('faq'), icon: 'faCircleQuestion', page: 'faq' },
    ];

    this.opcUsers = [
      { label: 'Iniciar sesión', command: () => this.goToPage('login') },
      { label: 'Registrarse', command: () => this.goToPage('register') }
    ]

  }

  goToPage(page: string) {
    this.router.navigate([`/${page}`])
  }

  getIcon(iconName: string): IconDefinition {
    if (iconName === 'faHome') return this.faHome;
    if (iconName === 'faPencilAlt') return this.faPencilAlt;
    if (iconName === 'faPhone') return this.faPhone;
    if (iconName === 'faComments') return this.faComments;
    if (iconName === 'faCircleUser') return this.faCircleUser;
    if (iconName === 'faNewspaper') return this.faNewspaper;
    if (iconName === 'faCircleQuestion') return this.faCircleQuestion;

    return this.faSpinner;
  }

}