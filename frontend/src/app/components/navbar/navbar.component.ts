import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faPencilAlt, faPhone, faComments, IconDefinition, faCircleUser, faNewspaper, faCircleQuestion, faSpinner, faBullhorn, faChartSimple, faCalendarCheck, faUsers } from '@fortawesome/free-solid-svg-icons';

import { SessionService } from '../../services/session.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MenubarModule, AvatarModule, InputTextModule, RippleModule, CommonModule, FontAwesomeModule, MenuModule, ButtonModule]
})

export class NavbarComponent implements OnInit {

  private userRoleSubscription: Subscription | null = null;

  userRol = signal<number>(0);
  navUser = signal<MenuItem[]>([]);
  opcUser = signal<MenuItem[]>([]);

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

  ngOnInit() {
    this.userRoleSubscription = this.sessionService.userRole$.subscribe(roleId => {
      this.userRol.set(roleId)
      this.updateNavbar();
    });
    this.userRol.set(isNaN(parseInt(this.sessionService.getIdRolToken(), 10)) ? 0 : parseInt(this.sessionService.getIdRolToken(), 10));
    this.updateNavbar();
  }

  updateNavbar() {
    switch (this.userRol()) {
      /* --------------------- Opciones de un usuario no registrado --------------------- */
      case 0:
        this.navUser.set([
          { label: 'Inicio', command: () => this.goToPage('home'), icon: 'faHome' },
          // { label: 'Noticias', command: () => this.goToPage('news'), icon: 'faNewspaper' }, //OPCIONAL
          { label: 'Preguntas frecuentes', command: () => this.goToPage('faq'), icon: 'faCircleQuestion' },
        ]);

        this.opcUser.set([
          { label: 'Iniciar sesión', command: () => this.goToPage('login') },
          { label: 'Registrarse', command: () => this.goToPage('register') }
        ]);
        break;

      /* --------------------- Opciones del usuario Administrador --------------------- */
      case 1:
        this.navUser.set([
          { label: 'Eventos', command: () => this.goToPage('events'), icon: 'faCalendarCheck' },
          // { label: 'Noticias', command: () => this.goToPage('news'), icon: 'faNewspaper' }, //OPCIONAL
          { label: 'Mensajes', command: () => this.goToPage('messages'), icon: 'faPhone' },
          { label: 'Users', command: () => this.goToPage('users'), icon: 'faUsers' },
        ]);

        this.opcUser.set([
          { label: 'Editar perfil', command: () => this.goToPage('profile') },
          { separator: true },
          { label: 'Cerrar sesión', command: () => this.logout() }
        ]);
        break;

      /* --------------------- Opciones del usuario Regular --------------------- */
      case 2:
        this.navUser.set([
          { label: 'Inicio', command: () => this.goToPage('home'), icon: 'faHome' },
          // { label: 'Noticias', command: () => this.goToPage('news'), icon: 'faNewspaper' }, //OPCIONAL
          { label: 'Contacto', command: () => this.goToPage('contact'), icon: 'faPhone' },
          { label: 'Preguntas frecuentes', command: () => this.goToPage('faq'), icon: 'faCircleQuestion' }
        ]);

        this.opcUser.set([
          // { label: 'Cupones', command: () => this.goToPage('cupons') }, //OPCIONAL
          { label: 'Historial de compras', command: () => this.goToPage('history') },
          { separator: true },
          { label: 'Editar perfil', command: () => this.goToPage('profile') },
          { label: 'Cerrar sesión', command: () => this.logout() }
        ]);
        break;

      /* --------------------- Opciones del usuario Promotor --------------------- */
      case 3:
        this.navUser.set([
          { label: 'Inicio', command: () => this.goToPage('home'), icon: 'faHome' },
          { label: 'Publicar', command: () => this.goToPage('publish'), icon: 'faBullhorn' },
          { label: 'Contacto', command: () => this.goToPage('contact'), icon: 'faPhone' },
          // { label: 'Estadísticas', command: () => this.goToPage('stadistic'), icon: 'faChartSimple' } //OPCIONAL
        ]);

        this.opcUser.set([
          { label: 'Iniciar sesión', command: () => this.goToPage('login') },
          { label: 'Registrarse', command: () => this.goToPage('register') },
          { separator: true },
          { label: 'Editar perfil', command: () => this.goToPage('profile') },
          { label: 'Cerrar sesión', command: () => this.logout() }
        ]);
        break;
    }
  }

  logout() {
    Swal.fire({
      title: "¿Desea cerrar sesión?",
      showDenyButton: true,
      confirmButtonText: "Sí"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Sesión cerrada!",
          showConfirmButton: false,
          timer: 1700,
          allowOutsideClick: false,
        });

        this.sessionService.clearSession()

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1700);
      }
    });
  }

  goToPage = (page: string) => this.router.navigate([`/${page}`]);
  navHome = () => this.goToPage('home');
  
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