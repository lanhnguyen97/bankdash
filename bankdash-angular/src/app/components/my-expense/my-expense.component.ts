import { Component } from '@angular/core';
import type { Chart, ChartConfiguration, Plugin } from 'chart.js';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-my-expense',
  imports: [ChartComponent],
  template: `
    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">My Expense</h2>
      <div class="bg-white rounded-card p-6 h-[225px]">
        <app-chart [config]="config" [plugins]="plugins" />
      </div>
    </div>
  `,
})
export class MyExpenseComponent {
  config: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
      datasets: [
        {
          data: [220, 220, 220, 220, 320, 220],
          backgroundColor: ['#edf0f7', '#edf0f7', '#edf0f7', '#edf0f7', '#16dbcc', '#edf0f7'],
          borderRadius: 20,
          barThickness: 28,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#718ebf', font: { size: 13 } } },
        y: { display: false, max: 380 },
      },
      layout: { padding: { top: 30 } },
    },
  };

  plugins: Plugin[] = [
    {
      id: 'topLabel',
      afterDatasetsDraw: (chart: Chart) => {
        const ctx = chart.ctx;
        const meta = chart.getDatasetMeta(0);
        const bar = meta.data[4];
        if (!bar) return;
        ctx.save();
        ctx.fillStyle = '#343c6a';
        ctx.font = '600 16px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('$12,500', bar.x, bar.y - 8);
        ctx.restore();
      },
    },
  ];
}
