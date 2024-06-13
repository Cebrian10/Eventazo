import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() id!: number;
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() date: string = '';

  @Output() buy: EventEmitter<number> = new EventEmitter<number>();

  onBuy() {
    this.buy.emit(this.id);
  }
}
