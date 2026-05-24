<script setup lang="ts">
const txs = [
  {
    label: 'Deposit from my Card',
    date: '28 January 2021',
    amount: '-$850',
    positive: false,
    iconBg: '#fff5d9',
    iconType: 'card',
  },
  {
    label: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '+$2,500',
    positive: true,
    iconBg: '#e7edff',
    iconType: 'paypal',
  },
  {
    label: 'Jemi Wilson',
    date: '21 January 2021',
    amount: '+$5,400',
    positive: true,
    iconBg: '#dcfaf8',
    iconType: 'diamond',
  },
];
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold text-ink mb-5">Recent Transaction</h2>
    <div class="bg-white rounded-card p-6">
      <div
        v-for="(tx, i) in txs"
        :key="tx.label"
        :class="['flex items-center gap-4', i < txs.length - 1 ? 'pb-5 mb-5' : '']"
      >
        <div
          class="w-[55px] h-[55px] rounded-avatar flex items-center justify-center shrink-0"
          :style="{ background: tx.iconBg }"
        >
          <svg v-if="tx.iconType === 'card'" width="22" height="22" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="6" width="20" height="14" rx="2" stroke="#fbb937" stroke-width="2" />
            <path d="M2 10h20" stroke="#fbb937" stroke-width="2" />
          </svg>
          <svg v-else-if="tx.iconType === 'paypal'" width="20" height="22" viewBox="0 0 24 24" fill="#396aff">
            <path d="M7 21h4l1-5h3c3.5 0 6-2 6.5-5.5C22 7 19.5 5 16 5H9L7 21z" />
            <path d="M5 19h4l1-5h3c3.5 0 6-2 6.5-5.5C20 5 17.5 3 14 3H7L5 19z" opacity="0.5" />
          </svg>
          <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16dbcc" stroke-width="2">
            <path d="M2 12l10 6 10-6" />
            <path d="M2 8l10 6 10-6-10-6L2 8z" />
          </svg>
        </div>
        <div class="flex-1">
          <div class="text-md font-medium text-ink">{{ tx.label }}</div>
          <div class="text-base font-normal text-ink-muted mt-1">{{ tx.date }}</div>
        </div>
        <div class="text-base font-medium" :style="{ color: tx.positive ? '#41d4a8' : '#ff4b4a' }">
          {{ tx.amount }}
        </div>
      </div>
    </div>
  </div>
</template>
