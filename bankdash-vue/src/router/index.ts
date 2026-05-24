import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import Transactions from '../pages/Transactions.vue';
import Accounts from '../pages/Accounts.vue';
import Investments from '../pages/Investments.vue';
import CreditCards from '../pages/CreditCards.vue';
import Loans from '../pages/Loans.vue';
import Services from '../pages/Services.vue';
import MyPrivileges from '../pages/MyPrivileges.vue';
import Settings from '../pages/Settings.vue';
import EditProfile from '../pages/settings/EditProfile.vue';
import Preferences from '../pages/settings/Preferences.vue';
import Security from '../pages/settings/Security.vue';

const router = createRouter({
  // import.meta.env.BASE_URL reflects the build --base (e.g. /bankdash/vue/),
  // so routing works under any deploy prefix (GitHub Pages, Vercel root, etc.)
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: Dashboard },
    { path: '/transactions', component: Transactions },
    { path: '/accounts', component: Accounts },
    { path: '/investments', component: Investments },
    { path: '/credit-cards', component: CreditCards },
    { path: '/loans', component: Loans },
    { path: '/services', component: Services },
    { path: '/privileges', component: MyPrivileges },
    {
      path: '/settings',
      component: Settings,
      children: [
        { path: '', redirect: '/settings/profile' },
        { path: 'profile', component: EditProfile },
        { path: 'preferences', component: Preferences },
        { path: 'security', component: Security },
      ],
    },
  ],
});

export default router;
