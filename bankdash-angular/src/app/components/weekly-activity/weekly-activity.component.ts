import { Component } from '@angular/core';
import type { ChartConfiguration } from 'chart.js';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-weekly-activity',
  imports: [ChartComponent],
  template: `
    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Weekly Activity</h2>
      <div class="bg-white rounded-card p-6 h-[322px] relative">
        <div class="absolute right-6 top-6 flex items-center gap-7 text-base text-ink">
          <div class="flex items-center gap-2"><span class="w-[15px] h-[15px] rounded-full bg-brand"></span>Deposit</div>
          <div class="flex items-center gap-2"><span class="w-[15px] h-[15px] rounded-full bg-brand-teal"></span>Withdraw</div>
        </div>
        <div class="w-full h-full pt-8">
          <app-chart [config]="config" />
        </div>
      </div>
    </div>
  `,
})
export class WeeklyActivityComponent {
  config: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [
        { label: 'Deposit', data: [230, 110, 250, 360, 240, 230, 320], backgroundColor: '#1814f3', borderRadius: 30, barThickness: 15 },
        { label: 'Withdraw', data: [470, 340, 320, 470, 150, 390, 400], backgroundColor: '#16dbcc', borderRadius: 30, barThickness: 15 },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#718ebf', font: { size: 13 } } },
        y: { grid: { color: '#f3f3f5' }, ticks: { color: '#718ebf', font: { size: 13 }, stepSize: 100 }, max: 500, beginAtZero: true },
      },
    },
  };
}
