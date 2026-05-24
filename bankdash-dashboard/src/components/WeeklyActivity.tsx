import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const data = [
  { day: 'Sat', deposit: 230, withdraw: 470 },
  { day: 'Sun', deposit: 110, withdraw: 340 },
  { day: 'Mon', deposit: 250, withdraw: 320 },
  { day: 'Tue', deposit: 360, withdraw: 470 },
  { day: 'Wed', deposit: 240, withdraw: 150 },
  { day: 'Thu', deposit: 230, withdraw: 390 },
  { day: 'Fri', deposit: 320, withdraw: 400 },
];

function Legend() {
  return (
    <div className="flex items-center gap-7 text-base text-ink">
      <div className="flex items-center gap-2">
        <span className="w-[15px] h-[15px] rounded-full bg-brand" />
        <span>Deposit</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-[15px] h-[15px] rounded-full bg-brand-teal" />
        <span>Withdraw</span>
      </div>
    </div>
  );
}

export default function WeeklyActivity() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-ink mb-5">Weekly Activity</h2>
      <div className="bg-white rounded-card p-6 h-[322px] relative">
        <div className="absolute right-6 top-6">
          <Legend />
        </div>
        <div className="w-full h-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barGap={6}
              barCategoryGap={20}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid stroke="#f3f3f5" vertical={false} />
              <XAxis
                dataKey="day"
                tick={{ fill: '#718ebf', fontSize: 13 }}
                tickLine={false}
                axisLine={false}
                dy={6}
              />
              <YAxis
                tick={{ fill: '#718ebf', fontSize: 13 }}
                tickLine={false}
                axisLine={false}
                ticks={[0, 100, 200, 300, 400, 500]}
                domain={[0, 500]}
              />
              <Tooltip
                cursor={{ fill: 'transparent' }}
                contentStyle={{
                  borderRadius: 8,
                  border: 'none',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  fontSize: 13,
                }}
              />
              <Bar
                dataKey="deposit"
                fill="#1814f3"
                radius={[20, 20, 20, 20]}
                barSize={15}
              />
              <Bar
                dataKey="withdraw"
                fill="#16dbcc"
                radius={[20, 20, 20, 20]}
                barSize={15}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
