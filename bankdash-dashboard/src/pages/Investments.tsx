import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip,
} from 'recharts';
import StatCard from '../components/StatCard';

const yearlyData = [
  { year: '2016', value: 12000 },
  { year: '2017', value: 25000 },
  { year: '2018', value: 22000 },
  { year: '2019', value: 35000 },
  { year: '2020', value: 25000 },
  { year: '2021', value: 28000 },
];

const monthlyData = [
  { year: '2016', value: 12000 },
  { year: '2017', value: 16000 },
  { year: '2018', value: 14000 },
  { year: '2019', value: 28000 },
  { year: '2020', value: 25000 },
  { year: '2021', value: 38000 },
];

const investments = [
  { name: 'Apple Store', desc: 'E-commerce, Marketplace', value: '$54,000', returnVal: '+16%', iconBg: '#ffe0eb', iconColor: '#fe5c73', positive: true },
  { name: 'Samsung Mobile', desc: 'E-commerce, Marketplace', value: '$25,300', returnVal: '-4%', iconBg: '#e7edff', iconColor: '#396aff', positive: false },
  { name: 'Tesla Motors', desc: 'Electric Vehicles', value: '$8,200', returnVal: '+25%', iconBg: '#fff5d9', iconColor: '#fbb937', positive: true },
];

const stocks = [
  { sl: '01.', name: 'Trivago', price: '$520', returnVal: '+5%', positive: true },
  { sl: '02.', name: 'Canon', price: '$480', returnVal: '+10%', positive: true },
  { sl: '03.', name: 'Uber Food', price: '$350', returnVal: '-3%', positive: false },
  { sl: '04.', name: 'Nokia', price: '$940', returnVal: '+2%', positive: true },
  { sl: '05.', name: 'Tiktok', price: '$670', returnVal: '-12%', positive: false },
];

function Icon({ d, color }: { d: string; color: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MoneyFormat({ v }: { v: number }) {
  return <span>${(v / 1000).toFixed(0)}k</span>;
}

function ChartCard({ title, data, color }: { title: string; data: typeof yearlyData; color: string }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-ink mb-5">{title}</h2>
      <div className="bg-white rounded-card p-6 h-[225px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <CartesianGrid stroke="#f3f3f5" />
            <XAxis dataKey="year" tick={{ fill: '#718ebf', fontSize: 12 }} tickLine={false} axisLine={false} dy={6} />
            <YAxis
              tick={{ fill: '#718ebf', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              ticks={[0, 10000, 20000, 30000, 40000]}
              domain={[0, 40000]}
            />
            <Tooltip
              contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', fontSize: 13 }}
              formatter={(v: number) => [<MoneyFormat v={v} />, 'Value']}
            />
            <Line type="monotone" dataKey="value" stroke={color} strokeWidth={3} dot={{ fill: color, r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function Investments() {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[20px] xl:gap-[30px] mb-[30px]">
        <StatCard
          iconBg="#dcfaf8"
          label="Total Invested Amount"
          value="$150,000"
          icon={<Icon d="M12 3v18M5 8l7-5 7 5v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8z" color="#16dbcc" />}
        />
        <StatCard
          iconBg="#ffe0eb"
          label="Number of Investments"
          value="1,250"
          icon={<Icon d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" color="#fe5c73" />}
        />
        <StatCard
          iconBg="#e7edff"
          label="Rate of Return"
          value="+5.80%"
          icon={<Icon d="M3 17l6-6 4 4 8-8M14 7h7v7" color="#396aff" />}
        />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] mb-[30px]">
        <ChartCard title="Yearly Total Investment" data={yearlyData} color="#fbb937" />
        <ChartCard title="Monthly Revenue" data={monthlyData} color="#16dbcc" />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
        <div>
          <h2 className="text-3xl font-semibold text-ink mb-5">My Investment</h2>
          <div className="bg-white rounded-card p-6 overflow-x-auto">
            {investments.map((inv, i) => (
              <div
                key={i}
                className={`grid grid-cols-[2fr_1fr_1fr] gap-4 items-center py-3 ${
                  i < investments.length - 1 ? 'border-b border-line/50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-[42px] h-[42px] rounded-avatar flex items-center justify-center"
                    style={{ background: inv.iconBg }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke={inv.iconColor} strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base font-medium text-ink">{inv.name}</div>
                    <div className="text-2xs text-ink-muted">{inv.desc}</div>
                  </div>
                </div>
                <div>
                  <div className="text-base font-medium text-ink">{inv.value}</div>
                  <div className="text-2xs text-ink-muted">Investment Value</div>
                </div>
                <div>
                  <div className="text-base font-medium" style={{ color: inv.positive ? '#41d4a8' : '#ff4b4a' }}>
                    {inv.returnVal}
                  </div>
                  <div className="text-2xs text-ink-muted">Return Value</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-ink mb-5">Trending Stock</h2>
          <div className="bg-white rounded-card p-6 overflow-x-auto">
            <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-4 pb-3 text-base text-ink-muted border-b border-line">
              <div>SL No</div>
              <div>Name</div>
              <div>Price</div>
              <div>Return</div>
            </div>
            {stocks.map((s, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_2fr_1fr_1fr] gap-4 py-3 text-base text-ink ${
                  i < stocks.length - 1 ? 'border-b border-line/50' : ''
                }`}
              >
                <div className="text-ink-muted">{s.sl}</div>
                <div className="font-medium">{s.name}</div>
                <div>{s.price}</div>
                <div style={{ color: s.positive ? '#41d4a8' : '#ff4b4a' }}>{s.returnVal}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
