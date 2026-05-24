import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import type { ChartConfiguration } from 'chart.js';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'app-credit-cards',
  imports: [CommonModule, FormsModule, ChartComponent],
  templateUrl: './credit-cards.component.html',
})
export class CreditCardsComponent {
  allCards = [
    { variant: 'dark', balance: '$5,756', holder: 'Eddy Cusuma', validThru: '12/22', number: '3778 **** **** 1234' },
    { variant: 'dark', balance: '$5,756', holder: 'Eddy Cusuma', validThru: '12/22', number: '3778 **** **** 1234' },
    { variant: 'light', balance: '$5,756', holder: 'Eddy Cusuma', validThru: '12/22', number: '3778 **** **** 1234' },
  ];

  segments = [
    { name: 'DBL Bank', color: '#343c6a' },
    { name: 'BRC Bank', color: '#fc7900' },
    { name: 'ABM Bank', color: '#16dbcc' },
    { name: 'MCP Bank', color: '#fa00ff' },
  ];

  pieConfig: ChartConfiguration = {
    type: 'pie',
    data: {
      labels: this.segments.map((s) => s.name),
      datasets: [{ data: [40, 25, 15, 20], backgroundColor: this.segments.map((s) => s.color), borderColor: '#fff', borderWidth: 4 }],
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } },
  };

  cardList = [
    { type: 'Secondary', bank: 'DBL Bank', number: '**** **** 5600', name: 'William', iconBg: '#e7edff', iconColor: '#396aff' },
    { type: 'Secondary', bank: 'BRC Bank', number: '**** **** 4300', name: 'Michel', iconBg: '#ffe0eb', iconColor: '#fe5c73' },
    { type: 'Secondary', bank: 'ABM Bank', number: '**** **** 7560', name: 'Edward', iconBg: '#fff5d9', iconColor: '#fbb937' },
  ];

  cardSettings = [
    { title: 'Block Card', desc: 'Instantly block your card', iconBg: '#fff5d9', iconColor: '#fbb937' },
    { title: 'Change Pin Code', desc: 'Choose another pin code', iconBg: '#e7edff', iconColor: '#396aff' },
    { title: 'Add to Google Pay', desc: 'Withdraw without any card', iconBg: '#ffe0eb', iconColor: '#fe5c73' },
    { title: 'Add to Apple Pay', desc: 'Withdraw without any card', iconBg: '#dcfaf8', iconColor: '#16dbcc' },
    { title: 'Add to Apple Store', desc: 'Withdraw without any card', iconBg: '#dcfaf8', iconColor: '#16dbcc' },
  ];

  cardType = 'Classic';
  cardName = 'My Cards';
  cardNumber = '';
  expiration = '25 January 2025';
}
