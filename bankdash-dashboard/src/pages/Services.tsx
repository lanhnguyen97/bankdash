function Icon({ d, color }: { d: string; color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const featured = [
  {
    title: 'Life Insurance',
    desc: 'Unlimited protection',
    iconBg: '#e7edff',
    iconColor: '#396aff',
    icon: <Icon d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z" color="#396aff" />,
  },
  {
    title: 'Shopping',
    desc: 'Buy. Think. Grow.',
    iconBg: '#fff5d9',
    iconColor: '#fbb937',
    icon: <Icon d="M6 7h12l-1 12H7zM9 7V5a3 3 0 0 1 6 0v2" color="#fbb937" />,
  },
  {
    title: 'Safety',
    desc: 'We are your allies',
    iconBg: '#dcfaf8',
    iconColor: '#16dbcc',
    icon: <Icon d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z M9 12l2 2 4-4" color="#16dbcc" />,
  },
];

const services = [
  { title: 'Business loans', iconBg: '#ffe0eb', iconColor: '#fe5c73', highlight: false },
  { title: 'Checking accounts', iconBg: '#fff5d9', iconColor: '#fbb937', highlight: false },
  { title: 'Savings accounts', iconBg: '#ffe0eb', iconColor: '#fe5c73', highlight: true },
  { title: 'Debit and credit cards', iconBg: '#e7edff', iconColor: '#396aff', highlight: false },
  { title: 'Life Insurance', iconBg: '#dcfaf8', iconColor: '#16dbcc', highlight: false },
  { title: 'Business loans', iconBg: '#ffe0eb', iconColor: '#fe5c73', highlight: false },
];

export default function Services() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-[20px] xl:gap-[30px] mb-[30px]">
        {featured.map((f) => (
          <div key={f.title} className="bg-white rounded-card p-6 flex items-center gap-5 flex-1">
            <div
              className="w-[70px] h-[70px] rounded-avatar flex items-center justify-center shrink-0"
              style={{ background: f.iconBg }}
            >
              {f.icon}
            </div>
            <div>
              <div className="text-xl font-semibold text-ink">{f.title}</div>
              <div className="text-base text-ink-muted mt-1">{f.desc}</div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-ink mb-5">Bank Services List</h2>
        <div className="space-y-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-card p-5 flex items-center gap-5"
            >
              <div
                className="w-[50px] h-[50px] rounded-avatar flex items-center justify-center shrink-0"
                style={{ background: s.iconBg }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke={s.iconColor} strokeWidth="1.8" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-md font-medium text-ink">{s.title}</div>
                <div className="text-2xs text-ink-muted">It is a long established</div>
              </div>
              <div className="text-base text-ink-muted hidden md:block">
                <div>Lorem Ipsum</div>
                <div className="text-2xs">Many publishing</div>
              </div>
              <div className="text-base text-ink-muted hidden lg:block">
                <div>Lorem Ipsum</div>
                <div className="text-2xs">Many publishing</div>
              </div>
              <div className="text-base text-ink-muted hidden lg:block">
                <div>Lorem Ipsum</div>
                <div className="text-2xs">Many publishing</div>
              </div>
              <button
                className={`px-5 h-[35px] rounded-pill text-base font-medium ${
                  s.highlight
                    ? 'bg-brand-accent text-white'
                    : 'border border-line text-ink-muted hover:bg-page'
                }`}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
