import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { tap, catchError } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, PasswordModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly router = inject(Router);
  private readonly apiService = inject(ApiService);
  private readonly authService = inject(AuthService);
  private readonly sessionService = inject(SessionService);

  email: string = "";
  password: string = "";

  constructor() { }

  async onSubmit() {
    console.log('Iniciando sesion...');
    // Swal.fire({
    //   title: 'Cargando...',
    //   text: 'Por favor espera',
    //   allowOutsideClick: false,
    //   allowEscapeKey: false,
    //   showConfirmButton: false,
    //   willOpen: () => {
    //     Swal.showLoading();
    //   }
    // });

    if (this.email != "" && this.password != "") {

      const formData = {
        Correo: this.email
      };

      this.apiService.postLogin('usuario/login', formData)
        .pipe(
          tap(async response => {
            console.log(response);
            switch (response.status) {              
              case 201:
                const result = await this.authService.verifyPassword(this.password, response.result[0].Contrasena);

                if (result) {
                  this.sessionService.setSessionToken(response.result[0]);
                  this.router.navigate(['/home']);

                } else {
                  console.log('Credenciales incorrectas...');
                }

                break;

              case 404:
                console.log('Registro fallido:', response);
                break;

            }

          }),
          catchError(error => {
            console.error('Error al enviar los datos:', error);
            throw error;
          })
        ).subscribe();

    } else {
      // Swal.fire({
      //   position: "center",
      //   icon: "info",
      //   title: "No se aceptan campos vacios...",
      //   showConfirmButton: false,
      //   timer: 1500
      // });

      Swal.fire({
        position: 'center',
        icon: "info",
        title: "No se aceptan campos vacios...",
        showConfirmButton: false,
        timer: 1700,
        allowOutsideClick: false,
    });

      console.log("No se aceptan campos vacios...");
    }
  }

}
