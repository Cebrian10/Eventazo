import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faPencilAlt, faPhone, faComments, IconDefinition, faCircleUser, 
         faNewspaper, faCircleQuestion ,faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userRegular: any = {};
  userPromoter: any = {};
  userAdmin: any = {};

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
      { label: 'Inicio', icon: 'faHome', command: () => this.router.navigate(['/home']) },
      { label: 'Noticias', icon: 'faNewspaper', command: () => this.router.navigate(['/news']) },
      { label: 'Contacto', icon: 'faPhone', command: () => this.router.navigate(['/contact']) },
      { label: 'Preguntas frecuentes', icon: 'faCircleQuestion', command: () => this.router.navigate(['/faq']) }
    ];
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