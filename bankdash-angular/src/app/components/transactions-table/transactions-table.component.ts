import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Tx = {
  description: string;
  txId: string;
  type: string;
  card: string;
  date: string;
  amount: string;
  direction: 'in' | 'out';
};

@Component({
  selector: 'app-transactions-table',
  imports: [CommonModule],
  templateUrl: './transactions-table.component.html',
})
export class TransactionsTableComponent {
  tabs = ['All Transactions', 'Income', 'Expense'] as const;
  activeTab: (typeof this.tabs)[number] = 'All Transactions';

  txs: Tx[] = [
    { description: 'Spotify Subscription', txId: '#12548796', type: 'Shopping', card: '1234 ****', date: '28 Jan, 12.30 AM', amount: '-$2,500', direction: 'out' },
    { description: 'Freepik Sales', txId: '#12548796', type: 'Transfer', card: '1234 ****', date: '25 Jan, 10.40 PM', amount: '+$750', direction: 'in' },
    { description: 'Mobile Service', txId: '#12548796', type: 'Service', card: '1234 ****', date: '20 Jan, 10.40 PM', amount: '-$150', direction: 'out' },
    { description: 'Wilson', txId: '#12548796', type: 'Transfer', card: '1234 ****', date: '15 Jan, 03.29 PM', amount: '-$1050', direction: 'out' },
    { description: 'Emilly', txId: '#12548796', type: 'Transfer', card: '1234 ****', date: '14 Jan, 10.40 PM', amount: '+$840', direction: 'in' },
  ];

  get filtered(): Tx[] {
    if (this.activeTab === 'Income') return this.txs.filter((t) => t.direction === 'in');
    if (this.activeTab === 'Expense') return this.txs.filter((t) => t.direction === 'out');
    return this.txs;
  }
}
