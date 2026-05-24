import type { ReactNode } from 'react';

type StatCardProps = {
  icon: ReactNode;
  iconBg: string;
  label: string;
  value: string;
};

export default function StatCard({ icon, iconBg, label, value }: StatCardProps) {
  return (
    <div className="bg-white rounded-card p-6 flex items-center gap-6 flex-1">
      <div
        className="w-[70px] h-[70px] rounded-avatar flex items-center justify-center shrink-0"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <div>
        <div className="text-base text-ink-muted">{label}</div>
        <div className="text-3xl font-semibold text-ink mt-1">{value}</div>
      </div>
    </div>
  );
}
