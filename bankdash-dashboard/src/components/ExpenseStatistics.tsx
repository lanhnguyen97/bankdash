import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Entertainment', value: 30, color: '#343c6a' },
  { name: 'Bill Expense', value: 15, color: '#fc7900' },
  { name: 'Others', value: 35, color: '#1814f3' },
  { name: 'Investment', value: 20, color: '#fa00ff' },
];

function renderLabel(props: {
  cx?: number; cy?: number;
  midAngle?: number; innerRadius?: number; outerRadius?: number;
  index?: number;
}) {
  const { cx = 0, cy = 0, midAngle = 0, outerRadius = 0, index = 0 } = props;
  const RAD = Math.PI / 180;
  const r = outerRadius * 0.65;
  const x = cx + r * Math.cos(-midAngle * RAD);
  const y = cy + r * Math.sin(-midAngle * RAD);
  const d = data[index];
  return (
    <g>
      <text
        x={x}
        y={y - 4}
        textAnchor="middle"
        fill="#fff"
        fontSize="14"
        fontWeight="700"
      >
        {d.value}%
      </text>
      <text
        x={x}
        y={y + 12}
        textAnchor="middle"
        fill="#fff"
        fontSize="11"
        fontWeight="500"
      >
        {d.name}
      </text>
    </g>
  );
}

export default function ExpenseStatistics() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-ink mb-5">Expense Statistics</h2>
      <div className="bg-white rounded-card p-4 h-[322px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={115}
              paddingAngle={3}
              dataKey="value"
              label={renderLabel}
              labelLine={false}
              isAnimationActive={false}
              startAngle={90}
              endAngle={-270}
              stroke="#fff"
              strokeWidth={6}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
