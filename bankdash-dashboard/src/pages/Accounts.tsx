import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import StatCard from '../components/StatCard';

function Icon({ d, color }: { d: string; color: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const transactions = [
  { name: 'Spotify Subscription', type: 'Shopping', card: '1234 ****', status: 'Pending', amount: '-$150', positive: false, iconBg: '#dcfaf8', iconColor: '#16dbcc' },
  { name: 'Mobile Service', type: 'Service', card: '1234 ****', status: 'Completed', amount: '-$340', positive: false, iconBg: '#e7edff', iconColor: '#396aff' },
  { name: 'Emilly Wilson', type: 'Transfer', card: '1234 ****', status: 'Completed', amount: '+$780', positive: true, iconBg: '#ffe0eb', iconColor: '#fe5c73' },
];

const chartData = [
  { day: 'Sat', debit: 380, credit: 250 },
  { day: 'Sun', debit: 100, credit: 80 },
  { day: 'Mon', debit: 280, credit: 130 },
  { day: 'Tue', debit: 460, credit: 280 },
  { day: 'Wed', debit: 380, credit: 230 },
  { day: 'Thu', debit: 360, credit: 240 },
  { day: 'Fri', debit: 410, credit: 270 },
];

const invoices = [
  { name: 'Apple Store', date: '5h ago', amount: '$450', iconBg: '#dcfaf8', iconColor: '#16dbcc' },
  { name: 'Michael', date: '2 days ago', amount: '$160', iconBg: '#fff5d9', iconColor: '#fbb937' },
  { name: 'Playstation', date: '5 days ago', amount: '$1085', iconBg: '#e7edff', iconColor: '#396aff' },
  { name: 'William', date: '10 days ago', amount: '$90', iconBg: '#ffe0eb', iconColor: '#fe5c73' },
];

function MiniCard() {
  return (
    <div
      className="w-full h-[170px] rounded-card relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #4c49ed 0%, #0a06f4 100%)' }}
    >
      <div className="p-5">
        <div className="text-2xs text-white/80">Balance</div>
        <div className="text-xl font-semibold text-white">$5,756</div>
        <div className="mt-4 flex items-start gap-8">
          <div>
            <div className="text-2xs text-white/70 uppercase">Card Holder</div>
            <div className="text-sm text-white font-medium">Eddy Cusuma</div>
          </div>
          <div>
            <div className="text-2xs text-white/70 uppercase">Valid Thru</div>
            <div className="text-sm text-white font-medium">12/22</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[44px] bg-white/15 flex items-center justify-between px-5">
        <div className="text-sm font-semibold tracking-wider text-white">3778 **** **** 1234</div>
        <div className="relative w-7 h-4">
          <span className="absolute left-0 top-0 w-4 h-4 rounded-full bg-white/50" />
          <span className="absolute right-0 top-0 w-4 h-4 rounded-full bg-white/50" />
        </div>
      </div>
    </div>
  );
}

export default function Accounts() {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px] xl:gap-[30px] mb-[30px]">
        <StatCard
          iconBg="#fff5d9"
          label="My Balance"
          value="$12,750"
          icon={<Icon d="M6 8h12v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z M9 8V6a3 3 0 0 1 6 0v2" color="#fbb937" />}
        />
        <StatCard
          iconBg="#e7edff"
          label="Income"
          value="$5,600"
          icon={<Icon d="M12 8a4 4 0 0 1 4 4M12 16a4 4 0 0 1-4-4M12 4v16" color="#396aff" />}
        />
        <StatCard
          iconBg="#ffe0eb"
          label="Expense"
          value="$3,460"
          icon={<Icon d="M5 8h14v2H5zM5 12h14v2H5zM5 16h14v2H5z" color="#fe5c73" />}
        />
        <StatCard
          iconBg="#dcfaf8"
          label="Total Saving"
          value="$7,920"
          icon={<Icon d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" color="#16dbcc" />}
        />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px] mb-[30px]">
        <div>
          <h2 className="text-3xl font-semibold text-ink mb-5">Last Transaction</h2>
          <div className="bg-white rounded-card p-6 overflow-x-auto">
            {transactions.map((tx, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 items-center py-3 min-w-[650px] ${
                  i < transactions.length - 1 ? 'border-b border-line' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-[40px] h-[40px] rounded-avatar flex items-center justify-center"
                    style={{ background: tx.iconBg }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke={tx.iconColor} strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base font-medium text-ink">{tx.name}</div>
                    <div className="text-2xs text-ink-muted">25 Jan 2021</div>
                  </div>
                </div>
                <div className="text-base text-ink-muted">{tx.type}</div>
                <div className="text-base text-ink-muted">{tx.card}</div>
                <div className="text-base text-ink-muted">{tx.status}</div>
                <div
                  className="text-base font-medium text-right"
                  style={{ color: tx.positive ? '#41d4a8' : '#ff4b4a' }}
                >
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-3xl font-semibold text-ink">My Card</h2>
            <a href="#" className="text-base font-semibold text-ink hover:underline">See All</a>
          </div>
          <MiniCard />
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px]">
        <div>
          <h2 className="text-3xl font-semibold text-ink mb-5">Debit & Credit Overview</h2>
          <div className="bg-white rounded-card p-6 h-[280px]">
            <div className="flex items-center justify-between mb-4">
              <p className="text-base text-ink-muted">
                <span className="text-ink font-semibold">$7,560 Debited</span> &amp;{' '}
                <span className="text-ink font-semibold">$5,420 Credited</span> in this Week
              </p>
              <div className="flex items-center gap-5 text-base text-ink">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-brand" />Debit
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: '#fbb937' }} />Credit
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={chartData} barGap={4} barCategoryGap={20}>
                <CartesianGrid stroke="#f3f3f5" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: '#718ebf', fontSize: 13 }} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Bar dataKey="debit" fill="#1814f3" radius={[8, 8, 8, 8]} barSize={20} />
                <Bar dataKey="credit" fill="#fbb937" radius={[8, 8, 8, 8]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-ink mb-5">Invoices Sent</h2>
          <div className="bg-white rounded-card p-6">
            {invoices.map((inv, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 py-3 ${
                  i < invoices.length - 1 ? 'border-b border-line/50' : ''
                }`}
              >
                <div
                  className="w-[40px] h-[40px] rounded-avatar flex items-center justify-center"
                  style={{ background: inv.iconBg }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke={inv.iconColor} strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-base font-medium text-ink">{inv.name}</div>
                  <div className="text-2xs text-ink-muted">{inv.date}</div>
                </div>
                <div className="text-base font-semibold text-ink">{inv.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
