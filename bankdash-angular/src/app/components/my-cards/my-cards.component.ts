import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from '../credit-card/credit-card.component';

@Component({
  selector: 'app-my-cards',
  imports: [CommonModule, CreditCardComponent],
  template: `
    <div>
      <div class="flex items-center justify-between mb-5">
        <h2 class="text-3xl font-semibold text-ink">My Cards</h2>
        <a *ngIf="action === 'see-all'" href="#" class="text-lg font-semibold text-ink hover:underline">See All</a>
        <a *ngIf="action === 'add-card'" href="#" class="text-md font-semibold text-ink hover:underline">+ Add Card</a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
        <app-credit-card variant="dark" />
        <app-credit-card variant="light" />
      </div>
    </div>
  `,
})
export class MyCardsComponent {
  @Input() action: 'see-all' | 'add-card' = 'see-all';
}
