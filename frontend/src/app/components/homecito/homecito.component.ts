import { Component } from '@angular/core';

import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-homecito',
  standalone: true,
  imports: [ImageModule, ButtonModule],
  templateUrl: './homecito.component.html',
  styleUrl: './homecito.component.scss'
})
export class HomecitoComponent {

}
