import sendArrow from '../assets/icons/send-arrow.svg';
import { useState } from 'react';

type Contact = {
  name: string;
  role: string;
  avatar: string;
  active?: boolean;
};

const contacts: Contact[] = [
  {
    name: 'Livia Bator',
    role: 'CEO',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&h=160&fit=crop&crop=faces',
    active: true,
  },
  {
    name: 'Randy Press',
    role: 'Director',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces',
  },
  {
    name: 'Workman',
    role: 'Designer',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces',
  },
];

export default function QuickTransfer() {
  const [amount, setAmount] = useState('525.50');

  return (
    <div>
      <h2 className="text-3xl font-semibold text-ink mb-5">Quick Transfer</h2>
      <div className="bg-white rounded-card p-5 sm:p-7 min-h-[276px]">
        <div className="flex items-center justify-between gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
          {contacts.map((c) => (
            <div key={c.name} className="text-center">
              <div
                className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] rounded-avatar bg-cover bg-center mx-auto"
                style={{ backgroundImage: `url('${c.avatar}')` }}
              />
              <div
                className={`mt-2 text-sm sm:text-base font-medium ${
                  c.active ? 'text-ink' : 'text-ink-muted'
                }`}
              >
                {c.name}
              </div>
              <div
                className={`text-2xs font-normal ${
                  c.active ? 'text-ink' : 'text-ink-muted'
                }`}
              >
                {c.role}
              </div>
            </div>
          ))}
          <button
            aria-label="More contacts"
            className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-avatar bg-white flex items-center justify-center shrink-0"
            style={{ boxShadow: '4px 4px 18px rgba(231, 231, 231, 0.6)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="#718ebf" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="text-md text-ink-muted">Write Amount</span>
          <div className="relative w-full sm:w-[265px] h-[50px] rounded-pill bg-[#edf1f7] flex items-center pl-6">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-transparent flex-1 text-md font-medium text-ink-muted focus:outline-none w-full pr-32"
            />
            <button
              type="button"
              className="absolute right-0 top-0 h-[50px] px-7 rounded-pill bg-[#1819f4] flex items-center gap-2 text-white text-md font-medium"
            >
              <span>Send</span>
              <img src={sendArrow} alt="" className="w-6 h-6 invert brightness-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
