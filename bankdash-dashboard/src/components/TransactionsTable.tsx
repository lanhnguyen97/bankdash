import { useState } from 'react';

type Tx = {
  description: string;
  txId: string;
  type: string;
  card: string;
  date: string;
  amount: string;
  direction: 'in' | 'out';
};

const txs: Tx[] = [
  { description: 'Spotify Subscription', txId: '#12548796', type: 'Shopping', card: '1234 ****', date: '28 Jan, 12.30 AM', amount: '-$2,500', direction: 'out' },
  { description: 'Freepik Sales', txId: '#12548796', type: 'Transfer', card: '1234 ****', date: '25 Jan, 10.40 PM', amount: '+$750', direction: 'in' },
  { description: 'Mobile Service', txId: '#12548796', type: 'Service', card: '1234 ****', date: '20 Jan, 10.40 PM', amount: '-$150', direction: 'out' },
  { description: 'Wilson', txId: '#12548796', type: 'Transfer', card: '1234 ****', date: '15 Jan, 03.29 PM', amount: '-$1050', direction: 'out' },
  { description: 'Emilly', txId: '#12548796', type: 'Transfer', card: '1234 ****', date: '14 Jan, 10.40 PM', amount: '+$840', direction: 'in' },
];

const tabs = ['All Transactions', 'Income', 'Expense'] as const;
type Tab = (typeof tabs)[number];

function ArrowIcon({ direction }: { direction: 'in' | 'out' }) {
  const isIn = direction === 'in';
  return (
    <div
      className="w-[28px] h-[28px] rounded-avatar flex items-center justify-center shrink-0"
      style={{ background: isIn ? '#dcfaf8' : '#ffe0eb' }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d={isIn ? 'M12 4v16m0 0l-6-6m6 6l6-6' : 'M12 20V4m0 0l-6 6m6-6l6 6'}
          stroke={isIn ? '#16dbcc' : '#fe5c73'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function TransactionsTable() {
  const [activeTab, setActiveTab] = useState<Tab>('All Transactions');

  const filtered = txs.filter((tx) => {
    if (activeTab === 'Income') return tx.direction === 'in';
    if (activeTab === 'Expense') return tx.direction === 'out';
    return true;
  });

  return (
    <div>
      <h2 className="text-3xl font-semibold text-ink mb-5">Recent Transactions</h2>
      <div className="border-b border-line">
        <div className="flex items-center gap-6 sm:gap-9 overflow-x-auto">
          {tabs.map((t) => {
            const active = t === activeTab;
            return (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className="relative pb-4 text-md font-medium whitespace-nowrap"
                style={{ color: active ? '#1814f3' : '#718ebf' }}
              >
                {t}
                {active && (
                  <span
                    className="absolute left-0 right-0 -bottom-[2px] h-[3px] rounded"
                    style={{ background: '#1814f3' }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-card mt-5 overflow-x-auto">
        <div className="min-w-[820px]">
          <div className="grid grid-cols-[2fr_1.3fr_1fr_1fr_1.4fr_1fr_1fr] px-6 sm:px-8 pt-6 pb-3 text-md font-normal text-ink-muted">
            <div>Description</div>
            <div>Transaction ID</div>
            <div>Type</div>
            <div>Card</div>
            <div>Date</div>
            <div>Amount</div>
            <div>Receipt</div>
          </div>

          {filtered.map((tx, i) => (
            <div
              key={i}
              className="grid grid-cols-[2fr_1.3fr_1fr_1fr_1.4fr_1fr_1fr] items-center px-6 sm:px-8 py-4 text-md text-ink"
            >
              <div className="flex items-center gap-3">
                <ArrowIcon direction={tx.direction} />
                <span>{tx.description}</span>
              </div>
              <div className="text-ink-muted">{tx.txId}</div>
              <div className="text-ink-muted">{tx.type}</div>
              <div className="text-ink-muted">{tx.card}</div>
              <div className="text-ink-muted">{tx.date}</div>
              <div
                className="font-medium"
                style={{ color: tx.direction === 'in' ? '#41d4a8' : '#ff4b4a' }}
              >
                {tx.amount}
              </div>
              <div>
                <button className="px-5 h-[34px] rounded-pill border border-line text-base font-medium text-ink-muted hover:bg-page">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
