import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent) },
  { path: 'transactions', loadComponent: () => import('./pages/transactions/transactions.component').then((m) => m.TransactionsComponent) },
  { path: 'accounts', loadComponent: () => import('./pages/accounts/accounts.component').then((m) => m.AccountsComponent) },
  { path: 'investments', loadComponent: () => import('./pages/investments/investments.component').then((m) => m.InvestmentsComponent) },
  { path: 'credit-cards', loadComponent: () => import('./pages/credit-cards/credit-cards.component').then((m) => m.CreditCardsComponent) },
  { path: 'loans', loadComponent: () => import('./pages/loans/loans.component').then((m) => m.LoansComponent) },
  { path: 'services', loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent) },
  { path: 'privileges', loadComponent: () => import('./pages/privileges/privileges.component').then((m) => m.PrivilegesComponent) },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.component').then((m) => m.SettingsComponent),
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', loadComponent: () => import('./pages/settings/profile/profile.component').then((m) => m.ProfileComponent) },
      { path: 'preferences', loadComponent: () => import('./pages/settings/preferences/preferences.component').then((m) => m.PreferencesComponent) },
      { path: 'security', loadComponent: () => import('./pages/settings/security/security.component').then((m) => m.SecurityComponent) },
    ],
  },
];
