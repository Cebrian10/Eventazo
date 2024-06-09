import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { tap, catchError } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

interface RolUsuario {
  name: string;
  value: number;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, InputTextModule, DropdownModule, FloatLabelModule, PasswordModule, ButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  private readonly apiService = inject(ApiService);
  private readonly authService = inject(AuthService);

  name: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";

  roles: RolUsuario[] | undefined;
  selectedRol: RolUsuario | undefined;

  constructor() { }

  ngOnInit() {
    this.roles = [
      { name: 'Regular', value: 2 },
      { name: 'Promotor', value: 3 }
    ];
  }

  async onSubmit() {
    if (this.name != "" && this.lastname != "" && this.email != "" && this.password != "" && this.selectedRol?.value != undefined) {

      const formData = {
        Nombre: this.name,
        Apellido: this.lastname,
        Correo: this.email,
        Contrasena: await this.authService.hashPassword(this.password),
        ID_RolUsuario: this.selectedRol.value
      };

      this.apiService.postUsuario('usuario', formData)
        .pipe(
          tap(response => {

            switch (response.status) {
              case 201:
                console.log('Registro exitoso:', response);
                break;

              case 404:
                console.log('Registro fallido:', response);
                break;

              case 409:
                console.log('El correo ya está registrado:', response);
                break;

              case 500:
                console.log('Error al enviar los datos:', response);
                break;

            }

          }),
          catchError(error => {
            console.log('Error al enviar los datos:', error);
            throw error;
          })
        ).subscribe();

    } else {
      console.log("No se aceptan campos vacios...");
    }
  }


}
