<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import type { ChartData, ChartOptions } from 'chart.js';
import StatCard from '../components/StatCard.vue';

const transactions = [
  { name: 'Spotify Subscription', type: 'Shopping', card: '1234 ****', status: 'Pending', amount: '-$150', positive: false, iconBg: '#dcfaf8', iconColor: '#16dbcc' },
  { name: 'Mobile Service', type: 'Service', card: '1234 ****', status: 'Completed', amount: '-$340', positive: false, iconBg: '#e7edff', iconColor: '#396aff' },
  { name: 'Emilly Wilson', type: 'Transfer', card: '1234 ****', status: 'Completed', amount: '+$780', positive: true, iconBg: '#ffe0eb', iconColor: '#fe5c73' },
];

const chartData: ChartData<'bar'> = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    { label: 'Debit', data: [380, 100, 280, 460, 380, 360, 410], backgroundColor: '#1814f3', borderRadius: 8, barThickness: 20 },
    { label: 'Credit', data: [250, 80, 130, 280, 230, 240, 270], backgroundColor: '#fbb937', borderRadius: 8, barThickness: 20 },
  ],
};

const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false }, ticks: { color: '#718ebf', font: { size: 13 } } },
    y: { display: false },
  },
};

const invoices = [
  { name: 'Apple Store', date: '5h ago', amount: '$450', iconBg: '#dcfaf8', iconColor: '#16dbcc' },
  { name: 'Michael', date: '2 days ago', amount: '$160', iconBg: '#fff5d9', iconColor: '#fbb937' },
  { name: 'Playstation', date: '5 days ago', amount: '$1085', iconBg: '#e7edff', iconColor: '#396aff' },
  { name: 'William', date: '10 days ago', amount: '$90', iconBg: '#ffe0eb', iconColor: '#fe5c73' },
];
</script>

<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px] xl:gap-[30px] mb-[30px]">
    <StatCard iconBg="#fff5d9" iconColor="#fbb937" label="My Balance" value="$12,750" iconPath="M6 8h12v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z M9 8V6a3 3 0 0 1 6 0v2" />
    <StatCard iconBg="#e7edff" iconColor="#396aff" label="Income" value="$5,600" iconPath="M12 8a4 4 0 0 1 4 4M12 16a4 4 0 0 1-4-4M12 4v16" />
    <StatCard iconBg="#ffe0eb" iconColor="#fe5c73" label="Expense" value="$3,460" iconPath="M5 8h14v2H5zM5 12h14v2H5zM5 16h14v2H5z" />
    <StatCard iconBg="#dcfaf8" iconColor="#16dbcc" label="Total Saving" value="$7,920" iconPath="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
  </section>

  <section class="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px] mb-[30px]">
    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Last Transaction</h2>
      <div class="bg-white rounded-card p-6 overflow-x-auto">
        <div
          v-for="(tx, i) in transactions"
          :key="i"
          class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 items-center py-3 min-w-[650px]"
          :class="i < transactions.length - 1 ? 'border-b border-line' : ''"
        >
          <div class="flex items-center gap-3">
            <div class="w-[40px] h-[40px] rounded-avatar flex items-center justify-center" :style="{ background: tx.iconBg }">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" :stroke="tx.iconColor" stroke-width="2" />
              </svg>
            </div>
            <div>
              <div class="text-base font-medium text-ink">{{ tx.name }}</div>
              <div class="text-2xs text-ink-muted">25 Jan 2021</div>
            </div>
          </div>
          <div class="text-base text-ink-muted">{{ tx.type }}</div>
          <div class="text-base text-ink-muted">{{ tx.card }}</div>
          <div class="text-base text-ink-muted">{{ tx.status }}</div>
          <div class="text-base font-medium text-right" :style="{ color: tx.positive ? '#41d4a8' : '#ff4b4a' }">{{ tx.amount }}</div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between mb-5">
        <h2 class="text-3xl font-semibold text-ink">My Card</h2>
        <a href="#" class="text-base font-semibold text-ink hover:underline">See All</a>
      </div>
      <div class="w-full h-[170px] rounded-card relative overflow-hidden" :style="{ background: 'linear-gradient(135deg, #4c49ed 0%, #0a06f4 100%)' }">
        <div class="p-5">
          <div class="text-2xs text-white/80">Balance</div>
          <div class="text-xl font-semibold text-white">$5,756</div>
          <div class="mt-4 flex items-start gap-8">
            <div>
              <div class="text-2xs text-white/70 uppercase">Card Holder</div>
              <div class="text-sm text-white font-medium">Eddy Cusuma</div>
            </div>
            <div>
              <div class="text-2xs text-white/70 uppercase">Valid Thru</div>
              <div class="text-sm text-white font-medium">12/22</div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 h-[44px] bg-white/15 flex items-center justify-between px-5">
          <div class="text-sm font-semibold tracking-wider text-white">3778 **** **** 1234</div>
          <div class="relative w-7 h-4">
            <span class="absolute left-0 top-0 w-4 h-4 rounded-full bg-white/50" />
            <span class="absolute right-0 top-0 w-4 h-4 rounded-full bg-white/50" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px]">
    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Debit & Credit Overview</h2>
      <div class="bg-white rounded-card p-6 h-[280px]">
        <div class="flex items-center justify-between mb-4">
          <p class="text-base text-ink-muted">
            <span class="text-ink font-semibold">$7,560 Debited</span> &amp;
            <span class="text-ink font-semibold">$5,420 Credited</span> in this Week
          </p>
          <div class="flex items-center gap-5 text-base text-ink">
            <div class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-brand" />Debit</div>
            <div class="flex items-center gap-2"><span class="w-3 h-3 rounded-full" style="background: #fbb937" />Credit</div>
          </div>
        </div>
        <div class="h-[80%]">
          <Bar :data="chartData" :options="chartOptions" />
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Invoices Sent</h2>
      <div class="bg-white rounded-card p-6">
        <div
          v-for="(inv, i) in invoices"
          :key="i"
          class="flex items-center gap-3 py-3"
          :class="i < invoices.length - 1 ? 'border-b border-line/50' : ''"
        >
          <div class="w-[40px] h-[40px] rounded-avatar flex items-center justify-center" :style="{ background: inv.iconBg }">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" :stroke="inv.iconColor" stroke-width="2" />
            </svg>
          </div>
          <div class="flex-1">
            <div class="text-base font-medium text-ink">{{ inv.name }}</div>
            <div class="text-2xs text-ink-muted">{{ inv.date }}</div>
          </div>
          <div class="text-base font-semibold text-ink">{{ inv.amount }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
