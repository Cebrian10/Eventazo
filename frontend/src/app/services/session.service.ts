import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private cookieService: CookieService) { }

  setSessionToken(formData: any): | void {
    this.cookieService.set('loggedToken', 'true');
    this.cookieService.set('idUserToken', formData.ID);
    this.cookieService.set('nameUserToken', formData.Nombre + ' ' + formData.Apellido);
    this.cookieService.set('idRolToken', formData.ID_RolUsuario);
  }

  getLoggedToken = (): string => this.cookieService.get('loggedToken');
  getIdUserToken = (): string => this.cookieService.get('idUserToken');
  getNameUserToken = (): string => this.cookieService.get('nameUserToken');
  getIdRolToken = (): string => this.cookieService.get('idRolToken');

  clearSession(): void {
    this.cookieService.delete('loggedToken');
    this.cookieService.delete('idUserToken');
    this.cookieService.delete('nameUserToken');
    this.cookieService.delete('idRolToken');
  }

}
