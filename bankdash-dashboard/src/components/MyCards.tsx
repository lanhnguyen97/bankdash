type CardProps = {
  variant: 'dark' | 'light';
  balance: string;
  holder: string;
  validThru: string;
  number: string;
};

function ChipIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 35 35" width="35" height="35" fill="none">
      <rect x="2" y="6" width="31" height="23" rx="4" fill={color} opacity="0.9" />
      <rect x="2" y="13" width="31" height="2" fill="#000" opacity="0.15" />
      <rect x="2" y="20" width="31" height="2" fill="#000" opacity="0.15" />
      <rect x="11" y="6" width="2" height="23" fill="#000" opacity="0.15" />
      <rect x="22" y="6" width="2" height="23" fill="#000" opacity="0.15" />
    </svg>
  );
}

function CircleLogo({ color }: { color: string }) {
  return (
    <div className="relative w-[44px] h-[30px]">
      <span
        className="absolute left-0 top-0 w-[30px] h-[30px] rounded-full"
        style={{ backgroundColor: color, opacity: 0.5 }}
      />
      <span
        className="absolute right-0 top-0 w-[30px] h-[30px] rounded-full"
        style={{ backgroundColor: color, opacity: 0.5 }}
      />
    </div>
  );
}

function CreditCard({ variant, balance, holder, validThru, number }: CardProps) {
  const isDark = variant === 'dark';
  return (
    <div
      className="w-full max-w-[350px] h-[235px] rounded-card overflow-hidden relative justify-self-center sm:justify-self-stretch"
      style={
        isDark
          ? { background: 'linear-gradient(135deg, #4c49ed 0%, #0a06f4 100%)' }
          : { background: '#ffffff', border: '1px solid #dfeaf2' }
      }
    >
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between">
          <div>
            <div
              className={`text-2xs font-normal ${isDark ? 'text-white/90' : 'text-ink-muted'}`}
            >
              Balance
            </div>
            <div
              className={`mt-1 text-2xl font-medium ${isDark ? 'text-white' : 'text-ink'}`}
            >
              {balance}
            </div>
          </div>
          <ChipIcon color={isDark ? '#ffffff' : '#9199af'} />
        </div>
        <div className="mt-7 flex items-start gap-12">
          <div>
            <div
              className={`text-2xs uppercase tracking-wide ${isDark ? 'text-white/70' : 'text-ink-muted'}`}
            >
              Card Holder
            </div>
            <div
              className={`mt-1 text-base font-medium ${isDark ? 'text-white' : 'text-ink'}`}
            >
              {holder}
            </div>
          </div>
          <div>
            <div
              className={`text-2xs uppercase tracking-wide ${isDark ? 'text-white/70' : 'text-ink-muted'}`}
            >
              Valid Thru
            </div>
            <div
              className={`mt-1 text-base font-medium ${isDark ? 'text-white' : 'text-ink'}`}
            >
              {validThru}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute left-0 right-0 bottom-0 h-[70px] flex items-center justify-between px-6 ${
          isDark ? 'bg-white/15' : 'border-t border-line'
        }`}
      >
        <div
          className={`text-xl font-semibold tracking-wider ${isDark ? 'text-white' : 'text-ink'}`}
        >
          {number}
        </div>
        <CircleLogo color={isDark ? '#ffffff' : '#9199af'} />
      </div>
    </div>
  );
}

type MyCardsProps = {
  action?: 'see-all' | 'add-card';
};

export default function MyCards({ action = 'see-all' }: MyCardsProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-3xl font-semibold text-ink">My Cards</h2>
        {action === 'see-all' ? (
          <a href="#" className="text-lg font-semibold text-ink hover:underline">
            See All
          </a>
        ) : (
          <a
            href="#"
            className="text-md font-semibold text-ink hover:underline"
          >
            + Add Card
          </a>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
        <CreditCard
          variant="dark"
          balance="$5,756"
          holder="Eddy Cusuma"
          validThru="12/22"
          number="3778 **** **** 1234"
        />
        <CreditCard
          variant="light"
          balance="$5,756"
          holder="Eddy Cusuma"
          validThru="12/22"
          number="3778 **** **** 1234"
        />
      </div>
    </div>
  );
}
