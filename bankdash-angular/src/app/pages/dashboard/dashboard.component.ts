import { Component } from '@angular/core';
import { MyCardsComponent } from '../../components/my-cards/my-cards.component';
import { RecentTransactionComponent } from '../../components/recent-transaction/recent-transaction.component';
import { WeeklyActivityComponent } from '../../components/weekly-activity/weekly-activity.component';
import { ExpenseStatisticsComponent } from '../../components/expense-statistics/expense-statistics.component';
import { QuickTransferComponent } from '../../components/quick-transfer/quick-transfer.component';
import { BalanceHistoryComponent } from '../../components/balance-history/balance-history.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MyCardsComponent,
    RecentTransactionComponent,
    WeeklyActivityComponent,
    ExpenseStatisticsComponent,
    QuickTransferComponent,
    BalanceHistoryComponent,
  ],
  template: `
    <section class="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px] mb-[30px]">
      <app-my-cards />
      <app-recent-transaction />
    </section>
    <section class="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px] mb-[30px]">
      <app-weekly-activity />
      <app-expense-statistics />
    </section>
    <section class="grid grid-cols-1 xl:grid-cols-[445fr_635fr] gap-[30px]">
      <app-quick-transfer />
      <app-balance-history />
    </section>
  `,
})
export class DashboardComponent {}
