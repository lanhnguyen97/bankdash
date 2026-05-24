import { Component } from '@angular/core';
import type { ChartConfiguration, ScriptableContext } from 'chart.js';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-balance-history',
  imports: [ChartComponent],
  template: `
    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Balance History</h2>
      <div class="bg-white rounded-card p-6 h-[276px]">
        <app-chart [config]="config" />
      </div>
    </div>
  `,
})
export class BalanceHistoryComponent {
  config: ChartConfiguration = {
    type: 'line',
    data: {
      labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
      datasets: [
        {
          data: [200, 380, 740, 280, 580, 230, 650],
          borderColor: '#1814f3',
          borderWidth: 3,
          pointRadius: 0,
          fill: true,
          tension: 0.45,
          backgroundColor: (ctx: ScriptableContext<'line'>) => {
            const chart = ctx.chart;
            const { ctx: c, chartArea } = chart;
            if (!chartArea) return 'rgba(45, 96, 255, 0.2)';
            const g = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            g.addColorStop(0, 'rgba(45, 96, 255, 0.35)');
            g.addColorStop(1, 'rgba(45, 96, 255, 0)');
            return g;
          },
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: '#f3f3f5' }, ticks: { color: '#718ebf', font: { size: 13 } } },
        y: { grid: { color: '#f3f3f5' }, ticks: { color: '#718ebf', font: { size: 13 }, stepSize: 200 }, max: 800, beginAtZero: true },
      },
    },
  };
}
