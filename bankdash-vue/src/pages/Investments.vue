<script setup lang="ts">
import { Line } from 'vue-chartjs';
import type { ChartData, ChartOptions } from 'chart.js';
import StatCard from '../components/StatCard.vue';

const labels = ['2016', '2017', '2018', '2019', '2020', '2021'];
const yearly = [12000, 25000, 22000, 35000, 25000, 28000];
const monthly = [12000, 16000, 14000, 28000, 25000, 38000];

const makeData = (data: number[], color: string): ChartData<'line'> => ({
  labels,
  datasets: [
    {
      data,
      borderColor: color,
      borderWidth: 3,
      pointRadius: 4,
      pointBackgroundColor: color,
      tension: 0.45,
      fill: false,
    },
  ],
});

const lineOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { color: '#f3f3f5' }, ticks: { color: '#718ebf', font: { size: 12 } } },
    y: {
      grid: { color: '#f3f3f5' },
      ticks: {
        color: '#718ebf',
        font: { size: 12 },
        stepSize: 10000,
        callback: (v) => `$${(Number(v) / 1000).toFixed(0)}k`,
      },
      max: 40000,
      beginAtZero: true,
    },
  },
};

const investments = [
  { name: 'Apple Store', desc: 'E-commerce, Marketplace', value: '$54,000', returnVal: '+16%', iconBg: '#ffe0eb', iconColor: '#fe5c73', positive: true },
  { name: 'Samsung Mobile', desc: 'E-commerce, Marketplace', value: '$25,300', returnVal: '-4%', iconBg: '#e7edff', iconColor: '#396aff', positive: false },
  { name: 'Tesla Motors', desc: 'Electric Vehicles', value: '$8,200', returnVal: '+25%', iconBg: '#fff5d9', iconColor: '#fbb937', positive: true },
];

const stocks = [
  { sl: '01.', name: 'Trivago', price: '$520', returnVal: '+5%', positive: true },
  { sl: '02.', name: 'Canon', price: '$480', returnVal: '+10%', positive: true },
  { sl: '03.', name: 'Uber Food', price: '$350', returnVal: '-3%', positive: false },
  { sl: '04.', name: 'Nokia', price: '$940', returnVal: '+2%', positive: true },
  { sl: '05.', name: 'Tiktok', price: '$670', returnVal: '-12%', positive: false },
];
</script>

<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[20px] xl:gap-[30px] mb-[30px]">
    <StatCard iconBg="#dcfaf8" iconColor="#16dbcc" label="Total Invested Amount" value="$150,000" iconPath="M12 3v18M5 8l7-5 7 5v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8z" />
    <StatCard iconBg="#ffe0eb" iconColor="#fe5c73" label="Number of Investments" value="1,250" iconPath="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    <StatCard iconBg="#e7edff" iconColor="#396aff" label="Rate of Return" value="+5.80%" iconPath="M3 17l6-6 4 4 8-8M14 7h7v7" />
  </section>

  <section class="grid grid-cols-1 xl:grid-cols-2 gap-[30px] mb-[30px]">
    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Yearly Total Investment</h2>
      <div class="bg-white rounded-card p-6 h-[225px]">
        <Line :data="makeData(yearly, '#fbb937')" :options="lineOptions" />
      </div>
    </div>
    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Monthly Revenue</h2>
      <div class="bg-white rounded-card p-6 h-[225px]">
        <Line :data="makeData(monthly, '#16dbcc')" :options="lineOptions" />
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">My Investment</h2>
      <div class="bg-white rounded-card p-6 overflow-x-auto">
        <div
          v-for="(inv, i) in investments"
          :key="i"
          class="grid grid-cols-[2fr_1fr_1fr] gap-4 items-center py-3"
          :class="i < investments.length - 1 ? 'border-b border-line/50' : ''"
        >
          <div class="flex items-center gap-3">
            <div class="w-[42px] h-[42px] rounded-avatar flex items-center justify-center" :style="{ background: inv.iconBg }">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" :stroke="inv.iconColor" stroke-width="2" />
              </svg>
            </div>
            <div>
              <div class="text-base font-medium text-ink">{{ inv.name }}</div>
              <div class="text-2xs text-ink-muted">{{ inv.desc }}</div>
            </div>
          </div>
          <div>
            <div class="text-base font-medium text-ink">{{ inv.value }}</div>
            <div class="text-2xs text-ink-muted">Investment Value</div>
          </div>
          <div>
            <div class="text-base font-medium" :style="{ color: inv.positive ? '#41d4a8' : '#ff4b4a' }">{{ inv.returnVal }}</div>
            <div class="text-2xs text-ink-muted">Return Value</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Trending Stock</h2>
      <div class="bg-white rounded-card p-6 overflow-x-auto">
        <div class="grid grid-cols-[1fr_2fr_1fr_1fr] gap-4 pb-3 text-base text-ink-muted border-b border-line">
          <div>SL No</div>
          <div>Name</div>
          <div>Price</div>
          <div>Return</div>
        </div>
        <div
          v-for="(s, i) in stocks"
          :key="i"
          class="grid grid-cols-[1fr_2fr_1fr_1fr] gap-4 py-3 text-base text-ink"
          :class="i < stocks.length - 1 ? 'border-b border-line/50' : ''"
        >
          <div class="text-ink-muted">{{ s.sl }}</div>
          <div class="font-medium">{{ s.name }}</div>
          <div>{{ s.price }}</div>
          <div :style="{ color: s.positive ? '#41d4a8' : '#ff4b4a' }">{{ s.returnVal }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
