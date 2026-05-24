<script setup lang="ts">
import { ref } from 'vue';
import { Pie } from 'vue-chartjs';
import type { ChartData, ChartOptions } from 'chart.js';

const allCards = [
  { variant: 'dark' as const, balance: '$5,756', holder: 'Eddy Cusuma', validThru: '12/22', number: '3778 **** **** 1234' },
  { variant: 'dark' as const, balance: '$5,756', holder: 'Eddy Cusuma', validThru: '12/22', number: '3778 **** **** 1234' },
  { variant: 'light' as const, balance: '$5,756', holder: 'Eddy Cusuma', validThru: '12/22', number: '3778 **** **** 1234' },
];

const segments = [
  { name: 'DBL Bank', color: '#343c6a' },
  { name: 'BRC Bank', color: '#fc7900' },
  { name: 'ABM Bank', color: '#16dbcc' },
  { name: 'MCP Bank', color: '#fa00ff' },
];

const pieData: ChartData<'pie'> = {
  labels: segments.map((s) => s.name),
  datasets: [
    {
      data: [40, 25, 15, 20],
      backgroundColor: segments.map((s) => s.color),
      borderColor: '#fff',
      borderWidth: 4,
    },
  ],
};

const pieOptions: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
};

const cardList = [
  { type: 'Secondary', bank: 'DBL Bank', number: '**** **** 5600', name: 'William', iconBg: '#e7edff', iconColor: '#396aff' },
  { type: 'Secondary', bank: 'BRC Bank', number: '**** **** 4300', name: 'Michel', iconBg: '#ffe0eb', iconColor: '#fe5c73' },
  { type: 'Secondary', bank: 'ABM Bank', number: '**** **** 7560', name: 'Edward', iconBg: '#fff5d9', iconColor: '#fbb937' },
];

const cardSettings = [
  { title: 'Block Card', desc: 'Instantly block your card', iconBg: '#fff5d9', iconColor: '#fbb937' },
  { title: 'Change Pin Code', desc: 'Choose another pin code', iconBg: '#e7edff', iconColor: '#396aff' },
  { title: 'Add to Google Pay', desc: 'Withdraw without any card', iconBg: '#ffe0eb', iconColor: '#fe5c73' },
  { title: 'Add to Apple Pay', desc: 'Withdraw without any card', iconBg: '#dcfaf8', iconColor: '#16dbcc' },
  { title: 'Add to Apple Store', desc: 'Withdraw without any card', iconBg: '#dcfaf8', iconColor: '#16dbcc' },
];

const cardType = ref('Classic');
const cardName = ref('My Cards');
const cardNumber = ref('');
const expiration = ref('25 January 2025');
</script>

<template>
  <section class="mb-[30px]">
    <h2 class="text-3xl font-semibold text-ink mb-5">My Cards</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[30px] justify-items-center">
      <div
        v-for="(c, i) in allCards"
        :key="i"
        class="w-[265px] h-[170px] rounded-card overflow-hidden relative"
        :style="
          c.variant === 'dark'
            ? { background: 'linear-gradient(135deg, #4c49ed 0%, #0a06f4 100%)' }
            : { background: '#ffffff', border: '1px solid #dfeaf2' }
        "
      >
        <div class="p-5">
          <div class="flex items-start justify-between">
            <div>
              <div class="text-2xs" :class="c.variant === 'dark' ? 'text-white/80' : 'text-ink-muted'">Balance</div>
              <div class="text-xl font-medium" :class="c.variant === 'dark' ? 'text-white' : 'text-ink'">{{ c.balance }}</div>
            </div>
            <svg viewBox="0 0 35 35" width="32" height="32" fill="none">
              <rect x="2" y="6" width="28" height="20" rx="4" :fill="c.variant === 'dark' ? '#ffffff' : '#9199af'" opacity="0.9" />
            </svg>
          </div>
          <div class="mt-4 flex items-start gap-7">
            <div>
              <div class="text-2xs uppercase" :class="c.variant === 'dark' ? 'text-white/70' : 'text-ink-muted'">Card Holder</div>
              <div class="text-sm font-medium" :class="c.variant === 'dark' ? 'text-white' : 'text-ink'">{{ c.holder }}</div>
            </div>
            <div>
              <div class="text-2xs uppercase" :class="c.variant === 'dark' ? 'text-white/70' : 'text-ink-muted'">Valid Thru</div>
              <div class="text-sm font-medium" :class="c.variant === 'dark' ? 'text-white' : 'text-ink'">{{ c.validThru }}</div>
            </div>
          </div>
        </div>
        <div
          class="absolute bottom-0 left-0 right-0 h-[44px] flex items-center justify-between px-5"
          :class="c.variant === 'dark' ? 'bg-white/15' : 'border-t border-line'"
        >
          <div class="text-sm font-semibold tracking-wider" :class="c.variant === 'dark' ? 'text-white' : 'text-ink'">{{ c.number }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-[30px] mb-[30px]">
    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Card Expense Statistics</h2>
      <div class="bg-white rounded-card p-6 h-[280px] flex flex-col items-center">
        <div class="h-[180px] w-full">
          <Pie :data="pieData" :options="pieOptions" />
        </div>
        <div class="grid grid-cols-2 gap-x-6 gap-y-2 text-sm w-full px-6 mt-3">
          <div v-for="e in segments" :key="e.name" class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full" :style="{ background: e.color }" />
            <span class="text-ink">{{ e.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Card List</h2>
      <div class="bg-white rounded-card p-6 overflow-x-auto">
        <div
          v-for="(c, i) in cardList"
          :key="i"
          class="grid grid-cols-[40px_1fr_1fr_1fr_1fr_auto] gap-5 items-center py-3 min-w-[680px]"
          :class="i < cardList.length - 1 ? 'border-b border-line/50' : ''"
        >
          <div class="w-[40px] h-[40px] rounded-avatar flex items-center justify-center" :style="{ background: c.iconBg }">
            <svg width="22" height="14" viewBox="0 0 24 16" fill="none">
              <rect x="1" y="1" width="22" height="14" rx="2" :stroke="c.iconColor" stroke-width="1.5" />
              <rect x="1" y="4" width="22" height="3" :fill="c.iconColor" />
            </svg>
          </div>
          <div><div class="text-2xs text-ink-muted">Card Type</div><div class="text-base font-medium text-ink">{{ c.type }}</div></div>
          <div><div class="text-2xs text-ink-muted">Bank</div><div class="text-base font-medium text-ink">{{ c.bank }}</div></div>
          <div><div class="text-2xs text-ink-muted">Card Number</div><div class="text-base font-medium text-ink">{{ c.number }}</div></div>
          <div><div class="text-2xs text-ink-muted">Namain Card</div><div class="text-base font-medium text-ink">{{ c.name }}</div></div>
          <a href="#" class="text-base font-medium text-brand-accent hover:underline">View Details</a>
        </div>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px]">
    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Add New Card</h2>
      <div class="bg-white rounded-card p-6">
        <p class="text-sm text-ink-muted mb-5 max-w-xl">
          Credit Card generally means a plastic card issued by Scheduled Commercial Banks
          assigned to a Cardholder, with a stated limit, that can be used to purchase goods
          and services on credit or obtain cash advances.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">
          <label class="block">
            <div class="text-base text-ink mb-2">Card Type</div>
            <input v-model="cardType" type="text" placeholder="Classic" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
          </label>
          <label class="block">
            <div class="text-base text-ink mb-2">Name On Card</div>
            <input v-model="cardName" type="text" placeholder="My Cards" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
          </label>
          <label class="block">
            <div class="text-base text-ink mb-2">Card Number</div>
            <input v-model="cardNumber" type="text" placeholder="**** **** **** ****" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
          </label>
          <label class="block">
            <div class="text-base text-ink mb-2">Expiration Date</div>
            <input v-model="expiration" type="text" placeholder="25 January 2025" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
          </label>
        </div>
        <button class="mt-7 px-9 h-[50px] rounded-[9px] bg-brand text-white text-md font-medium">Add Card</button>
      </div>
    </div>

    <div>
      <h2 class="text-3xl font-semibold text-ink mb-5">Card Setting</h2>
      <div class="bg-white rounded-card p-6">
        <div
          v-for="(s, i) in cardSettings"
          :key="i"
          class="flex items-center gap-4 py-3"
          :class="i < cardSettings.length - 1 ? 'border-b border-line/50' : ''"
        >
          <div class="w-[40px] h-[40px] rounded-avatar flex items-center justify-center shrink-0" :style="{ background: s.iconBg }">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" :stroke="s.iconColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>
          <div>
            <div class="text-base font-medium text-ink">{{ s.title }}</div>
            <div class="text-2xs text-ink-muted">{{ s.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
