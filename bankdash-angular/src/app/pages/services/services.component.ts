import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  featured = [
    { title: 'Life Insurance', desc: 'Unlimited protection', iconBg: '#e7edff', iconColor: '#396aff', path: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z' },
    { title: 'Shopping', desc: 'Buy. Think. Grow.', iconBg: '#fff5d9', iconColor: '#fbb937', path: 'M6 7h12l-1 12H7zM9 7V5a3 3 0 0 1 6 0v2' },
    { title: 'Safety', desc: 'We are your allies', iconBg: '#dcfaf8', iconColor: '#16dbcc', path: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z M9 12l2 2 4-4' },
  ];

  services = [
    { title: 'Business loans', iconBg: '#ffe0eb', iconColor: '#fe5c73', highlight: false },
    { title: 'Checking accounts', iconBg: '#fff5d9', iconColor: '#fbb937', highlight: false },
    { title: 'Savings accounts', iconBg: '#ffe0eb', iconColor: '#fe5c73', highlight: true },
    { title: 'Debit and credit cards', iconBg: '#e7edff', iconColor: '#396aff', highlight: false },
    { title: 'Life Insurance', iconBg: '#dcfaf8', iconColor: '#16dbcc', highlight: false },
    { title: 'Business loans', iconBg: '#ffe0eb', iconColor: '#fe5c73', highlight: false },
  ];
}
