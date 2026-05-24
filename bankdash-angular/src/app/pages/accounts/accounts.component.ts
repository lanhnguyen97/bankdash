import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { ChartConfiguration } from 'chart.js';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'app-accounts',
  imports: [CommonModule, StatCardComponent, ChartComponent],
  templateUrl: './accounts.component.html',
})
export class AccountsComponent {
  transactions = [
    { name: 'Spotify Subscription', type: 'Shopping', card: '1234 ****', status: 'Pending', amount: '-$150', positive: false, iconBg: '#dcfaf8', iconColor: '#16dbcc' },
    { name: 'Mobile Service', type: 'Service', card: '1234 ****', status: 'Completed', amount: '-$340', positive: false, iconBg: '#e7edff', iconColor: '#396aff' },
    { name: 'Emilly Wilson', type: 'Transfer', card: '1234 ****', status: 'Completed', amount: '+$780', positive: true, iconBg: '#ffe0eb', iconColor: '#fe5c73' },
  ];

  invoices = [
    { name: 'Apple Store', date: '5h ago', amount: '$450', iconBg: '#dcfaf8', iconColor: '#16dbcc' },
    { name: 'Michael', date: '2 days ago', amount: '$160', iconBg: '#fff5d9', iconColor: '#fbb937' },
    { name: 'Playstation', date: '5 days ago', amount: '$1085', iconBg: '#e7edff', iconColor: '#396aff' },
    { name: 'William', date: '10 days ago', amount: '$90', iconBg: '#ffe0eb', iconColor: '#fe5c73' },
  ];

  chartConfig: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [
        { label: 'Debit', data: [380, 100, 280, 460, 380, 360, 410], backgroundColor: '#1814f3', borderRadius: 8, barThickness: 20 },
        { label: 'Credit', data: [250, 80, 130, 280, 230, 240, 270], backgroundColor: '#fbb937', borderRadius: 8, barThickness: 20 },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { grid: { display: false }, ticks: { color: '#718ebf', font: { size: 13 } } }, y: { display: false } },
    },
  };
}
