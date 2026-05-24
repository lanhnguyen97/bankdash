import { useState } from 'react';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

function Tabs() {
  const tabs = [
    { to: '/settings/profile', label: 'Edit Profile' },
    { to: '/settings/preferences', label: 'Preferences' },
    { to: '/settings/security', label: 'Security' },
  ];
  return (
    <div className="border-b border-line flex items-center gap-6 sm:gap-9 px-4 sm:px-8 overflow-x-auto">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          className={({ isActive }) =>
            `relative pt-6 pb-4 text-md font-medium ${isActive ? 'text-brand' : 'text-ink-muted'}`
          }
        >
          {({ isActive }) => (
            <>
              {t.label}
              {isActive && (
                <span className="absolute left-0 right-0 -bottom-[2px] h-[3px] rounded bg-brand" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
}

function Field({
  label, value, onChange, placeholder, type = 'text', hasArrow,
}: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; hasArrow?: boolean }) {
  return (
    <label className="block">
      <div className="text-base text-ink mb-2">{label}</div>
      <div className="relative">
        <input
          type={type}
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

function Toggle({ on, onChange, label }: { on: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex items-center gap-4 cursor-pointer">
      <button
        type="button"
        onClick={() => onChange(!on)}
        className="shrink-0 relative transition-colors"
        style={{
          width: 60,
          height: 30,
          borderRadius: 9999,
          background: on ? '#16dbcc' : '#e0e0e0',
        }}
      >
        <span
          className="absolute rounded-full bg-white transition-all"
          style={{
            width: 22,
            height: 22,
            top: 4,
            left: on ? 34 : 4,
          }}
        />
      </button>
      <span className="text-base text-ink">{label}</span>
    </label>
  );
}

function EditProfile() {
  const [form, setForm] = useState({
    yourName: 'Charlene Reed',
    userName: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '**********',
    dob: '25 January 1990',
    presentAddr: 'San Jose, California, USA',
    permAddr: 'San Jose, California, USA',
    city: 'San Jose',
    postal: '45962',
    country: 'USA',
  });
  const set = (k: keyof typeof form) => (v: string) => setForm({ ...form, [k]: v });

  return (
    <div className="px-4 sm:px-8 py-6 sm:py-8">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start">
        <div className="relative w-[90px] h-[90px] shrink-0">
          <div
            className="w-[90px] h-[90px] rounded-avatar bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces')",
            }}
          />
          <button className="absolute right-0 bottom-0 w-[30px] h-[30px] rounded-avatar bg-brand flex items-center justify-center text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="white" />
            </svg>
          </button>
        </div>
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">
          <Field label="Your Name" value={form.yourName} onChange={set('yourName')} />
          <Field label="User Name" value={form.userName} onChange={set('userName')} />
          <Field label="Email" value={form.email} onChange={set('email')} type="email" />
          <Field label="Password" value={form.password} onChange={set('password')} type="password" />
          <Field label="Date of Birth" value={form.dob} onChange={set('dob')} hasArrow />
          <Field label="Present Address" value={form.presentAddr} onChange={set('presentAddr')} />
          <Field label="Permanent Address" value={form.permAddr} onChange={set('permAddr')} />
          <Field label="City" value={form.city} onChange={set('city')} />
          <Field label="Postal Code" value={form.postal} onChange={set('postal')} />
          <Field label="Country" value={form.country} onChange={set('country')} />
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button className="px-12 h-[50px] rounded-[15px] bg-brand text-white text-md font-medium">
          Save
        </button>
      </div>
    </div>
  );
}

function Preferences() {
  const [currency, setCurrency] = useState('USD');
  const [tz, setTz] = useState('(GMT-12:00) International Date Line West');
  const [notif1, setNotif1] = useState(true);
  const [notif2, setNotif2] = useState(false);
  const [notif3, setNotif3] = useState(true);

  return (
    <div className="px-4 sm:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">
        <Field label="Currency" value={currency} onChange={setCurrency} hasArrow />
        <Field label="Time Zone" value={tz} onChange={setTz} hasArrow />
      </div>
      <div className="mt-9">
        <h3 className="text-xl font-semibold text-ink mb-5">Notification</h3>
        <div className="space-y-5">
          <Toggle on={notif1} onChange={setNotif1} label="I send or receive digita currency" />
          <Toggle on={notif2} onChange={setNotif2} label="I receive merchant order" />
          <Toggle on={notif3} onChange={setNotif3} label="There are recommendation for my account" />
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button className="px-12 h-[50px] rounded-[15px] bg-brand text-white text-md font-medium">
          Save
        </button>
      </div>
    </div>
  );
}

function Security() {
  const [twoFa, setTwoFa] = useState(true);
  const [current, setCurrent] = useState('**********');
  const [next, setNext] = useState('**********');

  return (
    <div className="px-4 sm:px-8 py-6 sm:py-8">
      <h3 className="text-xl font-semibold text-ink mb-5">Two-factor Authentication</h3>
      <Toggle on={twoFa} onChange={setTwoFa} label="Enable or disable two factor authentication" />
      <h3 className="text-xl font-semibold text-ink mt-9 mb-5">Change Password</h3>
      <div className="space-y-5 max-w-2xl">
        <Field label="Current Password" value={current} onChange={setCurrent} type="password" />
        <Field label="New Password" value={next} onChange={setNext} type="password" />
      </div>
      <div className="flex justify-end mt-8">
        <button className="px-12 h-[50px] rounded-[15px] bg-brand text-white text-md font-medium">
          Save
        </button>
      </div>
    </div>
  );
}

export default function Settings() {
  return (
    <div className="bg-white rounded-card overflow-hidden">
      <Tabs />
      <Routes>
        <Route index element={<Navigate to="profile" replace />} />
        <Route path="profile" element={<EditProfile />} />
        <Route path="preferences" element={<Preferences />} />
        <Route path="security" element={<Security />} />
      </Routes>
    </div>
  );
}
