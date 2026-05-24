import MyCards from '../components/MyCards';
import RecentTransaction from '../components/RecentTransaction';
import WeeklyActivity from '../components/WeeklyActivity';
import ExpenseStatistics from '../components/ExpenseStatistics';
import QuickTransfer from '../components/QuickTransfer';
import BalanceHistory from '../components/BalanceHistory';

export default function Dashboard() {
  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px] mb-[30px]">
        <MyCards />
        <RecentTransaction />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px] mb-[30px]">
        <WeeklyActivity />
        <ExpenseStatistics />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[445fr_635fr] gap-[30px]">
        <QuickTransfer />
        <BalanceHistory />
      </section>
    </>
  );
}
