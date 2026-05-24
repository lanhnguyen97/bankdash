import StatCard from '../components/StatCard';

function Icon({ d, color }: { d: string; color: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const loans = [
  { sl: '01.', money: '$100,000', left: '$40,500', duration: '8 Months', rate: '12%', emi: '$2,000 / month' },
  { sl: '02.', money: '$500,000', left: '$250,000', duration: '36 Months', rate: '10%', emi: '$8,000 / month' },
  { sl: '03.', money: '$900,000', left: '$40,500', duration: '12 Months', rate: '12%', emi: '$5,000 / month' },
  { sl: '04.', money: '$50,000', left: '$40,500', duration: '25 Months', rate: '5%', emi: '$2,000 / month' },
  { sl: '05.', money: '$50,000', left: '$40,500', duration: '5 Months', rate: '16%', emi: '$10,000 / month' },
  { sl: '06.', money: '$80,000', left: '$25,500', duration: '14 Months', rate: '8%', emi: '$2,000 / month' },
  { sl: '07.', money: '$12,000', left: '$5,500', duration: '9 Months', rate: '13%', emi: '$500 / month' },
  { sl: '08.', money: '$160,000', left: '$100,800', duration: '3 Months', rate: '12%', emi: '$900 / month' },
];

const totals = ['Total', '$125,000', '$750,000', '', '', '$50,000 / month', ''];

export default function Loans() {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px] xl:gap-[30px] mb-[30px]">
        <StatCard
          iconBg="#e7edff"
          label="Personal Loans"
          value="$50,000"
          icon={<Icon d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z" color="#396aff" />}
        />
        <StatCard
          iconBg="#fff5d9"
          label="Corporate Loans"
          value="$100,000"
          icon={<Icon d="M3 7h18v13H3zM8 7V4h8v3" color="#fbb937" />}
        />
        <StatCard
          iconBg="#ffe0eb"
          label="Business Loans"
          value="$500,000"
          icon={<Icon d="M3 17l6-6 4 4 8-8" color="#fe5c73" />}
        />
        <StatCard
          iconBg="#dcfaf8"
          label="Custom Loans"
          value="Choose Money"
          icon={<Icon d="M14 4l6 6-10 10H4v-6z" color="#16dbcc" />}
        />
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-ink mb-5">Active Loans Overview</h2>
        <div className="bg-white rounded-card p-6 overflow-x-auto">
          <div className="grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1.2fr_0.8fr] min-w-[840px] gap-4 pb-3 text-md text-ink-muted border-b border-line">
            <div>SL No</div>
            <div>Loan Money</div>
            <div>Left to repay</div>
            <div>Duration</div>
            <div>Interest rate</div>
            <div>Installment</div>
            <div>Repay</div>
          </div>
          {loans.map((l) => (
            <div
              key={l.sl}
              className="grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1.2fr_0.8fr] min-w-[840px] gap-4 py-4 text-md text-ink border-b border-line/40 items-center"
            >
              <div className="text-ink-muted">{l.sl}</div>
              <div>{l.money}</div>
              <div>{l.left}</div>
              <div>{l.duration}</div>
              <div>{l.rate}</div>
              <div>{l.emi}</div>
              <div>
                <button className="px-5 h-[30px] rounded-pill border border-brand-accent text-base font-medium text-brand-accent hover:bg-brand-accent/5">
                  Repay
                </button>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1.2fr_0.8fr] min-w-[840px] gap-4 pt-4 text-md font-semibold" style={{ color: '#fe5c73' }}>
            {totals.map((t, i) => <div key={i}>{t}</div>)}
          </div>
        </div>
      </section>
    </>
  );
}
