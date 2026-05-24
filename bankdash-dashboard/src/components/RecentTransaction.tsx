type Tx = {
  label: string;
  date: string;
  amount: string;
  positive: boolean;
  iconBg: string;
  icon: React.ReactNode;
};

const txs: Tx[] = [
  {
    label: 'Deposit from my Card',
    date: '28 January 2021',
    amount: '-$850',
    positive: false,
    iconBg: '#fff5d9',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="20" height="14" rx="2" stroke="#fbb937" strokeWidth="2" />
        <path d="M2 10h20" stroke="#fbb937" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '+$2,500',
    positive: true,
    iconBg: '#e7edff',
    icon: (
      <svg width="20" height="22" viewBox="0 0 24 24" fill="#396aff">
        <path d="M7 21h4l1-5h3c3.5 0 6-2 6.5-5.5C22 7 19.5 5 16 5H9L7 21z" />
        <path d="M5 19h4l1-5h3c3.5 0 6-2 6.5-5.5C20 5 17.5 3 14 3H7L5 19z" opacity="0.5" />
      </svg>
    ),
  },
  {
    label: 'Jemi Wilson',
    date: '21 January 2021',
    amount: '+$5,400',
    positive: true,
    iconBg: '#dcfaf8',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16dbcc" strokeWidth="2">
        <path d="M2 12l10 6 10-6" />
        <path d="M2 8l10 6 10-6-10-6L2 8z" />
      </svg>
    ),
  },
];

export default function RecentTransaction() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-ink mb-5">Recent Transaction</h2>
      <div className="bg-white rounded-card p-6">
        {txs.map((tx, i) => (
          <div
            key={tx.label}
            className={`flex items-center gap-4 ${
              i < txs.length - 1 ? 'pb-5 mb-5 ' : ''
            }`}
          >
            <div
              className="w-[55px] h-[55px] rounded-avatar flex items-center justify-center shrink-0"
              style={{ background: tx.iconBg }}
            >
              {tx.icon}
            </div>
            <div className="flex-1">
              <div className="text-md font-medium text-ink">{tx.label}</div>
              <div className="text-base font-normal text-ink-muted mt-1">
                {tx.date}
              </div>
            </div>
            <div
              className={`text-base font-medium ${
                tx.positive ? 'text-[#41d4a8]' : 'text-[#ff4b4a]'
              }`}
            >
              {tx.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
