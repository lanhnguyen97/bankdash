import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const data = [
  { month: 'Jul', value: 200 },
  { month: 'Aug', value: 380 },
  { month: 'Sep', value: 740 },
  { month: 'Oct', value: 280 },
  { month: 'Nov', value: 580 },
  { month: 'Dec', value: 230 },
  { month: 'Jan', value: 650 },
];

export default function BalanceHistory() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-ink mb-5">Balance History</h2>
      <div className="bg-white rounded-card p-6 h-[276px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="balanceGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2d60ff" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#2d60ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#f3f3f5" />
            <XAxis
              dataKey="month"
              tick={{ fill: '#718ebf', fontSize: 13 }}
              tickLine={false}
              axisLine={false}
              dy={6}
            />
            <YAxis
              tick={{ fill: '#718ebf', fontSize: 13 }}
              tickLine={false}
              axisLine={false}
              ticks={[0, 200, 400, 600, 800]}
              domain={[0, 800]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: 'none',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                fontSize: 13,
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#1814f3"
              strokeWidth={3}
              fill="url(#balanceGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
