import { Component } from '@angular/core';
import { MyCardsComponent } from '../../components/my-cards/my-cards.component';
import { MyExpenseComponent } from '../../components/my-expense/my-expense.component';
import { TransactionsTableComponent } from '../../components/transactions-table/transactions-table.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-transactions',
  imports: [MyCardsComponent, MyExpenseComponent, TransactionsTableComponent, PaginationComponent],
  template: `
    <section class="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px] mb-[30px]">
      <app-my-cards action="add-card" />
      <app-my-expense />
    </section>
    <section>
      <app-transactions-table />
      <app-pagination />
    </section>
  `,
})
export class TransactionsComponent {}
