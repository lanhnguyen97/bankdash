import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';
import Investments from './pages/Investments';
import CreditCards from './pages/CreditCards';
import Loans from './pages/Loans';
import Services from './pages/Services';
import MyPrivileges from './pages/MyPrivileges';
import Settings from './pages/Settings';

function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-page">
      <div className="flex">
        <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        <div className="flex-1 min-w-0">
          <Header onMenuClick={() => setMobileOpen(true)} />
          <main className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/credit-cards" element={<CreditCards />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/services" element={<Services />} />
              <Route path="/privileges" element={<MyPrivileges />} />
              <Route path="/settings/*" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
