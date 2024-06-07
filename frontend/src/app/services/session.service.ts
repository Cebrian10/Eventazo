import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private cookieService: CookieService) { }

  setSessionToken(token: string): void {
    this.cookieService.set('sessionToken', token, { 
      expires: 1, 
      sameSite: 'Strict' 
    });
  }

  getSessionToken(): string {
    return this.cookieService.get('sessionToken');
  }

  clearSession(): void {
    this.cookieService.delete('sessionToken');
  }
  
}
