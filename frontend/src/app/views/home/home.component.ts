import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
  constructor() { }

  // Función para cambiar el tema
  // changeTheme(theme: string) {
  //   console.log('Cambiando tema...');
  //   let themeLink = document.getElementById('theme-link') as HTMLLinkElement;

  //   if(themeLink){
  //     themeLink.href = theme + '.css';
  //   }
  // }
}
