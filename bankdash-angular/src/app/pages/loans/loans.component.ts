import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';

@Component({
  selector: 'app-loans',
  imports: [CommonModule, StatCardComponent],
  templateUrl: './loans.component.html',
})
export class LoansComponent {
  loans = [
    { sl: '01.', money: '$100,000', left: '$40,500', duration: '8 Months', rate: '12%', emi: '$2,000 / month' },
    { sl: '02.', money: '$500,000', left: '$250,000', duration: '36 Months', rate: '10%', emi: '$8,000 / month' },
    { sl: '03.', money: '$900,000', left: '$40,500', duration: '12 Months', rate: '12%', emi: '$5,000 / month' },
    { sl: '04.', money: '$50,000', left: '$40,500', duration: '25 Months', rate: '5%', emi: '$2,000 / month' },
    { sl: '05.', money: '$50,000', left: '$40,500', duration: '5 Months', rate: '16%', emi: '$10,000 / month' },
    { sl: '06.', money: '$80,000', left: '$25,500', duration: '14 Months', rate: '8%', emi: '$2,000 / month' },
    { sl: '07.', money: '$12,000', left: '$5,500', duration: '9 Months', rate: '13%', emi: '$500 / month' },
    { sl: '08.', money: '$160,000', left: '$100,800', duration: '3 Months', rate: '12%', emi: '$900 / month' },
  ];
  totals = ['Total', '$125,000', '$750,000', '', '', '$50,000 / month', ''];
}
