import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credit-card',
  imports: [CommonModule],
  templateUrl: './credit-card.component.html',
})
export class CreditCardComponent {
  @Input() variant: 'dark' | 'light' = 'dark';
  @Input() balance = '$5,756';
  @Input() holder = 'Eddy Cusuma';
  @Input() validThru = '12/22';
  @Input() number = '3778 **** **** 1234';
}
