import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { ChartConfiguration } from 'chart.js';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'app-investments',
  imports: [CommonModule, StatCardComponent, ChartComponent],
  templateUrl: './investments.component.html',
})
export class InvestmentsComponent {
  labels = ['2016', '2017', '2018', '2019', '2020', '2021'];
  yearly = [12000, 25000, 22000, 35000, 25000, 28000];
  monthly = [12000, 16000, 14000, 28000, 25000, 38000];

  makeChartConfig(data: number[], color: string): ChartConfiguration {
    return {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{ data, borderColor: color, borderWidth: 3, pointRadius: 4, pointBackgroundColor: color, tension: 0.45, fill: false }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: '#f3f3f5' }, ticks: { color: '#718ebf', font: { size: 12 } } },
          y: {
            grid: { color: '#f3f3f5' },
            ticks: { color: '#718ebf', font: { size: 12 }, stepSize: 10000, callback: (v) => `$${(Number(v) / 1000).toFixed(0)}k` },
            max: 40000,
            beginAtZero: true,
          },
        },
      },
    };
  }

  yearlyConfig = this.makeChartConfig(this.yearly, '#fbb937');
  monthlyConfig = this.makeChartConfig(this.monthly, '#16dbcc');

  investments = [
    { name: 'Apple Store', desc: 'E-commerce, Marketplace', value: '$54,000', returnVal: '+16%', iconBg: '#ffe0eb', iconColor: '#fe5c73', positive: true },
    { name: 'Samsung Mobile', desc: 'E-commerce, Marketplace', value: '$25,300', returnVal: '-4%', iconBg: '#e7edff', iconColor: '#396aff', positive: false },
    { name: 'Tesla Motors', desc: 'Electric Vehicles', value: '$8,200', returnVal: '+25%', iconBg: '#fff5d9', iconColor: '#fbb937', positive: true },
  ];

  stocks = [
    { sl: '01.', name: 'Trivago', price: '$520', returnVal: '+5%', positive: true },
    { sl: '02.', name: 'Canon', price: '$480', returnVal: '+10%', positive: true },
    { sl: '03.', name: 'Uber Food', price: '$350', returnVal: '-3%', positive: false },
    { sl: '04.', name: 'Nokia', price: '$940', returnVal: '+2%', positive: true },
    { sl: '05.', name: 'Tiktok', price: '$670', returnVal: '-12%', positive: false },
  ];
}
