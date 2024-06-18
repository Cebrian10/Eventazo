import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-newevent',
  standalone: true,
  imports: [],
  templateUrl: 'newevent.component.html',
  styleUrl: './newevent.component.scss'
})

export class NeweventComponent {

  private readonly router = inject(Router);
  private readonly apiService = inject(ApiService);
  private readonly authService = inject(AuthService);

  name: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  id_rol: number = 2;

 
}
