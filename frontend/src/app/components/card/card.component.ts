import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() date: string = '';
}
