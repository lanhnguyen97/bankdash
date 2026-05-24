import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Aug', value: 220 },
  { month: 'Sep', value: 220 },
  { month: 'Oct', value: 220 },
  { month: 'Nov', value: 220 },
  { month: 'Dec', value: 320, highlight: true, label: '$12,500' },
  { month: 'Jan', value: 220 },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HighlightLabel(props: any) {
  const x = Number(props.x ?? 0);
  const y = Number(props.y ?? 0);
  const width = Number(props.width ?? 0);
  const index = Number(props.index ?? 0);
  const d = data[index];
  if (!d?.label) return null;
  return (
    <text
      x={x + width / 2}
      y={y - 14}
      textAnchor="middle"
      fill="#343c6a"
      fontSize="16"
      fontWeight="600"
    >
      {d.label}
    </text>
  );
}

export default function MyExpense() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-ink mb-5">My Expense</h2>
      <div className="bg-white rounded-card p-6 h-[225px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 25, right: 5, left: 5, bottom: 0 }}
          >
            <XAxis
              dataKey="month"
              tick={{ fill: '#718ebf', fontSize: 13 }}
              tickLine={false}
              axisLine={false}
              dy={6}
            />
            <YAxis hide domain={[0, 360]} />
            <Bar dataKey="value" radius={[20, 20, 20, 20]} barSize={28} label={HighlightLabel}>
              {data.map((entry, idx) => (
                <Cell
                  key={idx}
                  fill={entry.highlight ? '#16dbcc' : '#edf0f7'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
