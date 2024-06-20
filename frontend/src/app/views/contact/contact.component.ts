import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { SessionService } from '../../services/session.service';

interface DatosUsuario {
  ID: number;
  Nombre: string;
  Apellido: string;
  Correo: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  private readonly apiService = inject(ApiService);
  private readonly sessionService = inject(SessionService);
  private readonly activatedRoute = inject(ActivatedRoute);

  userID = signal<number>(0);
  datosUsuario: DatosUsuario = {} as DatosUsuario[] | any;

  ngOnInit(): void {
    this.userID.set(isNaN(parseInt(this.sessionService.getIdUserToken(), 10)) ? 0 : parseInt(this.sessionService.getIdUserToken(), 10));
    
    this.apiService.postUsuarioPorId('usuario/' + this.userID())
    .subscribe((data) => {
      console.log(data.result[0]);
      this.datosUsuario = data.result[0];
    });
  }
}
