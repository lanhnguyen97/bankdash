import MyCards from '../components/MyCards';
import MyExpense from '../components/MyExpense';
import TransactionsTable from '../components/TransactionsTable';
import Pagination from '../components/Pagination';

export default function Transactions() {
  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px] mb-[30px]">
        <MyCards action="add-card" />
        <MyExpense />
      </section>

      <section>
        <TransactionsTable />
        <Pagination />
      </section>
    </>
  );
}
