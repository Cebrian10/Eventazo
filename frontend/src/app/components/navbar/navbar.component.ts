import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  ngOnInit() {
      this.items = [
        {
          label: 'Inicio',
          icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/home']);
        }
      },
      {
          label: 'Blog',
          icon: 'pi pi-pencil',
          command: () => {
            this.router.navigate(['/blog']);
        }
      },
      {
          label: 'Contacto',
          icon: 'pi pi-phone',
          url: '/contact'
      },
      {
          label: 'Preguntas frecuentes',
          icon: 'pi pi-comments',
          url: '/question'
      }
      ];
  }
}
