import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome, faPencilAlt, faPhone, faComments, IconDefinition, faCircleUser, faNewspaper,
  faCircleQuestion, faSpinner, faBullhorn, faChartSimple, faCalendarCheck, faUsers
} from '@fortawesome/free-solid-svg-icons';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    MenubarModule, AvatarModule, InputTextModule, RippleModule,
    CommonModule, FontAwesomeModule, MenuModule, ButtonModule
  ]
})

export class NavbarComponent implements OnInit {
  userNotRegister: MenuItem[] | undefined;
  userRegular: MenuItem[] | undefined;
  userPromoter: MenuItem[] | undefined;
  userAdmin: MenuItem[] | undefined;
  opcUsers: MenuItem[] | undefined;

  faHome = faHome;
  faNewspaper = faNewspaper;
  faPhone = faPhone;
  faCircleQuestion = faCircleQuestion;
  faPencilAlt = faPencilAlt;
  faComments = faComments;
  faCircleUser = faCircleUser;
  faSpinner = faSpinner;
  faBullhorn = faBullhorn;
  faChartSimple = faChartSimple;
  faCalendarCheck = faCalendarCheck;
  faUsers = faUsers;

  private readonly sessionService = inject(SessionService);
  private readonly router = inject(Router);

  isLogged: boolean = false;
  userRol: number = 0;

  ngOnInit() {
    this.isLogged = this.sessionService.getLoggedToken() === 'true';
    this.userRol = parseInt(this.sessionService.getIdRolToken());

    this.userNotRegister = [
      { label: 'Inicio', command: () => this.goToPage('home'), icon: 'faHome', page: 'home' },
      { label: 'Noticias', command: () => this.goToPage('news'), icon: 'faNewspaper', page: 'news' },
      { label: 'Preguntas frecuentes', command: () => this.goToPage('faq'), icon: 'faCircleQuestion', page: 'faq' },
    ];

    this.userRegular = [
      { label: 'Inicio', command: () => this.goToPage('home'), icon: 'faHome', page: 'home' },
      { label: 'Noticias', command: () => this.goToPage('news'), icon: 'faNewspaper', page: 'news' },
      { label: 'Contacto', command: () => this.goToPage('contact'), icon: 'faPhone', page: 'contact' },
      { label: 'Preguntas frecuentes', command: () => this.goToPage('faq'), icon: 'faCircleQuestion', page: 'faq' },
    ];

    this.userPromoter = [
      { label: 'Inicio', command: () => this.goToPage('home'), icon: 'faHome', page: 'home' },
      { label: 'Publicar', command: () => this.goToPage('publish'), icon: 'faBullhorn', page: 'publish' },
      { label: 'Contacto', command: () => this.goToPage('contact'), icon: 'faPhone', page: 'contact' },
      { label: 'Estadísticas', command: () => this.goToPage('stadistic'), icon: 'faChartSimple', page: 'stadistic' },
    ];

    this.userAdmin = [
      { label: 'Eventos', command: () => this.goToPage('events'), icon: 'faCalendarCheck', page: 'events' },
      { label: 'Noticias', command: () => this.goToPage('news'), icon: 'faNewspaper', page: 'news' },
      { label: 'Mensajes', command: () => this.goToPage('messages'), icon: 'faPhone', page: 'messages' },
      { label: 'Users', command: () => this.goToPage('users'), icon: 'faUsers', page: 'users' },
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
    if (iconName === 'faBullhorn') return this.faBullhorn;
    if (iconName === 'faChartSimple') return this.faChartSimple;
    if (iconName === 'faCalendarCheck') return this.faCalendarCheck;
    if (iconName === 'faUsers') return this.faUsers;
    return this.faSpinner;
  }

}