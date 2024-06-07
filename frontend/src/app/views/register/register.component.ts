import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { tap, catchError } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, PasswordModule, ButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private readonly apiService = inject(ApiService);
  private readonly authService = inject(AuthService);

  email: string = "";
  password: string = "";

  constructor() { }

  async onSubmit() {
    if (this.email != "" && this.password != "") {

      const hashedPassword = await this.authService.hashPassword(this.password);

      const formData = {
        email: this.email,
        contrasena: hashedPassword
      };

      this.apiService.postRegister('register', formData)
        .pipe(
          tap(response => {
            if (response.codigo == 200) {
              console.log('Registro exitoso:', response);      
            }
          }),
          catchError(error => {
            console.error('Error al enviar los datos:', error);
            throw error;
          })
        ).subscribe();

    } else {
      console.log("Email and password are required.");
    }
  }


}
