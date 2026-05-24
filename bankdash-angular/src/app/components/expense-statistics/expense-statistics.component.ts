import { Component } from '@angular/core';
import type { ChartConfiguration } from 'chart.js';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-expense-statistics',
  imports: [ChartComponent],
  template: `
    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Expense Statistics</h2>
      <div class="bg-white rounded-card p-4 h-[322px] flex items-center justify-center">
        <app-chart [config]="config" />
      </div>
    </div>
  `,
})
export class ExpenseStatisticsComponent {
  config: ChartConfiguration = {
    type: 'pie',
    data: {
      labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
      datasets: [
        {
          data: [30, 15, 35, 20],
          backgroundColor: ['#343c6a', '#fc7900', '#1814f3', '#fa00ff'],
          borderColor: '#fff',
          borderWidth: 6,
          offset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
    },
  };
}
