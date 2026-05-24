import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const allCards = [
  { variant: 'dark' as const, balance: '$5,756', holder: 'Eddy Cusuma', validThru: '12/22', number: '3778 **** **** 1234' },
  { variant: 'dark' as const, balance: '$5,756', holder: 'Eddy Cusuma', validThru: '12/22', number: '3778 **** **** 1234' },
  { variant: 'light' as const, balance: '$5,756', holder: 'Eddy Cusuma', validThru: '12/22', number: '3778 **** **** 1234' },
];

const expenseSegments = [
  { name: 'DBL Bank', value: 40, color: '#343c6a' },
  { name: 'BRC Bank', value: 25, color: '#fc7900' },
  { name: 'ABM Bank', value: 15, color: '#16dbcc' },
  { name: 'MCP Bank', value: 20, color: '#fa00ff' },
];

const cardList = [
  { type: 'Secondary', bank: 'DBL Bank', number: '**** **** 5600', name: 'William', iconBg: '#e7edff', iconColor: '#396aff' },
  { type: 'Secondary', bank: 'BRC Bank', number: '**** **** 4300', name: 'Michel', iconBg: '#ffe0eb', iconColor: '#fe5c73' },
  { type: 'Secondary', bank: 'ABM Bank', number: '**** **** 7560', name: 'Edward', iconBg: '#fff5d9', iconColor: '#fbb937' },
];

const cardSettings = [
  { title: 'Block Card', desc: 'Instantly block your card', iconBg: '#fff5d9', iconColor: '#fbb937' },
  { title: 'Change Pin Code', desc: 'Choose another pin code', iconBg: '#e7edff', iconColor: '#396aff' },
  { title: 'Add to Google Pay', desc: 'Withdraw without any card', iconBg: '#ffe0eb', iconColor: '#fe5c73' },
  { title: 'Add to Apple Pay', desc: 'Withdraw without any card', iconBg: '#dcfaf8', iconColor: '#16dbcc' },
  { title: 'Add to Apple Store', desc: 'Withdraw without any card', iconBg: '#dcfaf8', iconColor: '#16dbcc' },
];

function CardChip({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 35 35" width="32" height="32" fill="none">
      <rect x="2" y="6" width="28" height="20" rx="4" fill={color} opacity="0.9" />
      <rect x="2" y="12" width="28" height="2" fill="#000" opacity="0.15" />
      <rect x="2" y="18" width="28" height="2" fill="#000" opacity="0.15" />
      <rect x="10" y="6" width="2" height="20" fill="#000" opacity="0.15" />
      <rect x="20" y="6" width="2" height="20" fill="#000" opacity="0.15" />
    </svg>
  );
}

function CCard({ variant, balance, holder, validThru, number }: typeof allCards[number]) {
  const isDark = variant === 'dark';
  return (
    <div
      className="w-[265px] h-[170px] rounded-card overflow-hidden relative"
      style={
        isDark
          ? { background: 'linear-gradient(135deg, #4c49ed 0%, #0a06f4 100%)' }
          : { background: '#ffffff', border: '1px solid #dfeaf2' }
      }
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <div className={`text-2xs ${isDark ? 'text-white/80' : 'text-ink-muted'}`}>Balance</div>
            <div className={`text-xl font-medium ${isDark ? 'text-white' : 'text-ink'}`}>{balance}</div>
          </div>
          <CardChip color={isDark ? '#ffffff' : '#9199af'} />
        </div>
        <div className="mt-4 flex items-start gap-7">
          <div>
            <div className={`text-2xs uppercase ${isDark ? 'text-white/70' : 'text-ink-muted'}`}>Card Holder</div>
            <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-ink'}`}>{holder}</div>
          </div>
          <div>
            <div className={`text-2xs uppercase ${isDark ? 'text-white/70' : 'text-ink-muted'}`}>Valid Thru</div>
            <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-ink'}`}>{validThru}</div>
          </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-[44px] flex items-center justify-between px-5 ${isDark ? 'bg-white/15' : 'border-t border-line'}`}>
        <div className={`text-sm font-semibold tracking-wider ${isDark ? 'text-white' : 'text-ink'}`}>{number}</div>
        <div className="relative w-7 h-4">
          <span className="absolute left-0 top-0 w-4 h-4 rounded-full" style={{ background: isDark ? 'rgba(255,255,255,0.5)' : '#9199af', opacity: isDark ? undefined : 0.5 }} />
          <span className="absolute right-0 top-0 w-4 h-4 rounded-full" style={{ background: isDark ? 'rgba(255,255,255,0.5)' : '#9199af', opacity: isDark ? undefined : 0.5 }} />
        </div>
      </div>
    </div>
  );
}

export default function CreditCards() {
  const [cardType, setCardType] = useState('Classic');
  const [cardName, setCardName] = useState('My Cards');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('25 January 2025');

  return (
    <>
      <section className="mb-[30px]">
        <h2 className="text-3xl font-semibold text-ink mb-5">My Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[30px] justify-items-center">
          {allCards.map((c, i) => <CCard key={i} {...c} />)}
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-[30px] mb-[30px]">
        <div>
          <h2 className="text-3xl font-semibold text-ink mb-5">Card Expense Statistics</h2>
          <div className="bg-white rounded-card p-6 h-[280px] flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="70%">
              <PieChart>
                <Pie
                  data={expenseSegments}
                  cx="50%" cy="50%"
                  innerRadius={35} outerRadius={75}
                  paddingAngle={2} dataKey="value"
                  stroke="#fff" strokeWidth={4}
                  isAnimationActive={false}
                >
                  {expenseSegments.map((e) => <Cell key={e.name} fill={e.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm w-full px-6">
              {expenseSegments.map((e) => (
                <div key={e.name} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: e.color }} />
                  <span className="text-ink">{e.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-ink mb-5">Card List</h2>
          <div className="bg-white rounded-card p-6 overflow-x-auto">
            {cardList.map((c, i) => (
              <div
                key={i}
                className={`grid grid-cols-[40px_1fr_1fr_1fr_1fr_auto] gap-5 items-center py-3 min-w-[680px] ${
                  i < cardList.length - 1 ? 'border-b border-line/50' : ''
                }`}
              >
                <div className="w-[40px] h-[40px] rounded-avatar flex items-center justify-center" style={{ background: c.iconBg }}>
                  <svg width="22" height="14" viewBox="0 0 24 16" fill="none">
                    <rect x="1" y="1" width="22" height="14" rx="2" stroke={c.iconColor} strokeWidth="1.5" />
                    <rect x="1" y="4" width="22" height="3" fill={c.iconColor} />
                  </svg>
                </div>
                <div>
                  <div className="text-2xs text-ink-muted">Card Type</div>
                  <div className="text-base font-medium text-ink">{c.type}</div>
                </div>
                <div>
                  <div className="text-2xs text-ink-muted">Bank</div>
                  <div className="text-base font-medium text-ink">{c.bank}</div>
                </div>
                <div>
                  <div className="text-2xs text-ink-muted">Card Number</div>
                  <div className="text-base font-medium text-ink">{c.number}</div>
                </div>
                <div>
                  <div className="text-2xs text-ink-muted">Namain Card</div>
                  <div className="text-base font-medium text-ink">{c.name}</div>
                </div>
                <a href="#" className="text-base font-medium text-brand-accent hover:underline">View Details</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px]">
        <div>
          <h2 className="text-3xl font-semibold text-ink mb-5">Add New Card</h2>
          <div className="bg-white rounded-card p-6">
            <p className="text-sm text-ink-muted mb-5 max-w-xl">
              Credit Card generally means a plastic card issued by Scheduled Commercial Banks
              assigned to a Cardholder, with a stated limit, that can be used to purchase goods
              and services on credit or obtain cash advances.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">
              <Field label="Card Type" value={cardType} onChange={setCardType} placeholder="Classic" />
              <Field label="Name On Card" value={cardName} onChange={setCardName} placeholder="My Cards" />
              <Field label="Card Number" value={cardNumber} onChange={setCardNumber} placeholder="**** **** **** ****" />
              <Field label="Expiration Date" value={expiration} onChange={setExpiration} placeholder="25 January 2025" hasArrow />
            </div>
            <button className="mt-7 px-9 h-[50px] rounded-[9px] bg-brand text-white text-md font-medium">
              Add Card
            </button>
          </div>
        </div>

        <div style={{ width: 350 }}>
          <h2 className="text-3xl font-semibold text-ink mb-5">Card Setting</h2>
          <div className="bg-white rounded-card p-6">
            {cardSettings.map((s, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 py-3 ${
                  i < cardSettings.length - 1 ? 'border-b border-line/50' : ''
                }`}
              >
                <div className="w-[40px] h-[40px] rounded-avatar flex items-center justify-center shrink-0" style={{ background: s.iconBg }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={s.iconColor} strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-medium text-ink">{s.title}</div>
                  <div className="text-2xs text-ink-muted">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, value, onChange, placeholder, hasArrow,
}: { label: string; value: string; onChange: (v: string) => void; placeholder: string; hasArrow?: boolean }) {
  return (
    <label className="block">
      <div className="text-base text-ink mb-2">{label}</div>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted placeholder:text-ink-muted/70 focus:outline-none"
        />
        {hasArrow && (
          <svg className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path d="M1 1l5 5 5-5" stroke="#718ebf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </label>
  );
}
