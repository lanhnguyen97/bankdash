<script setup lang="ts">
import { ref, computed } from 'vue';

type Tx = {
  description: string;
  txId: string;
  type: string;
  card: string;
  date: string;
  amount: string;
  direction: 'in' | 'out';
};

const txs: Tx[] = [
  { description: 'Spotify Subscription', txId: '#12548796', type: 'Shopping', card: '1234 ****', date: '28 Jan, 12.30 AM', amount: '-$2,500', direction: 'out' },
  { description: 'Freepik Sales', txId: '#12548796', type: 'Transfer', card: '1234 ****', date: '25 Jan, 10.40 PM', amount: '+$750', direction: 'in' },
  { description: 'Mobile Service', txId: '#12548796', type: 'Service', card: '1234 ****', date: '20 Jan, 10.40 PM', amount: '-$150', direction: 'out' },
  { description: 'Wilson', txId: '#12548796', type: 'Transfer', card: '1234 ****', date: '15 Jan, 03.29 PM', amount: '-$1050', direction: 'out' },
  { description: 'Emilly', txId: '#12548796', type: 'Transfer', card: '1234 ****', date: '14 Jan, 10.40 PM', amount: '+$840', direction: 'in' },
];

const tabs = ['All Transactions', 'Income', 'Expense'] as const;
type Tab = (typeof tabs)[number];
const activeTab = ref<Tab>('All Transactions');

const filtered = computed(() =>
  txs.filter((tx) => {
    if (activeTab.value === 'Income') return tx.direction === 'in';
    if (activeTab.value === 'Expense') return tx.direction === 'out';
    return true;
  })
);
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold text-ink mb-5">Recent Transactions</h2>
    <div class="border-b border-line">
      <div class="flex items-center gap-6 sm:gap-9 overflow-x-auto">
        <button
          v-for="t in tabs"
          :key="t"
          @click="activeTab = t"
          class="relative pb-4 text-md font-medium whitespace-nowrap"
          :style="{ color: t === activeTab ? '#1814f3' : '#718ebf' }"
        >
          {{ t }}
          <span
            v-if="t === activeTab"
            class="absolute left-0 right-0 -bottom-[2px] h-[3px] rounded"
            style="background: #1814f3"
          />
        </button>
      </div>
    </div>

    <div class="bg-white rounded-card mt-5 overflow-x-auto">
      <div class="min-w-[820px]">
        <div class="grid grid-cols-[2fr_1.3fr_1fr_1fr_1.4fr_1fr_1fr] px-6 sm:px-8 pt-6 pb-3 text-md font-normal text-ink-muted">
          <div>Description</div>
          <div>Transaction ID</div>
          <div>Type</div>
          <div>Card</div>
          <div>Date</div>
          <div>Amount</div>
          <div>Receipt</div>
        </div>

        <div
          v-for="(tx, i) in filtered"
          :key="i"
          class="grid grid-cols-[2fr_1.3fr_1fr_1fr_1.4fr_1fr_1fr] items-center px-6 sm:px-8 py-4 text-md text-ink"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-[28px] h-[28px] rounded-avatar flex items-center justify-center shrink-0"
              :style="{ background: tx.direction === 'in' ? '#dcfaf8' : '#ffe0eb' }"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  :d="tx.direction === 'in' ? 'M12 4v16m0 0l-6-6m6 6l6-6' : 'M12 20V4m0 0l-6 6m6-6l6 6'"
                  :stroke="tx.direction === 'in' ? '#16dbcc' : '#fe5c73'"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span>{{ tx.description }}</span>
          </div>
          <div class="text-ink-muted">{{ tx.txId }}</div>
          <div class="text-ink-muted">{{ tx.type }}</div>
          <div class="text-ink-muted">{{ tx.card }}</div>
          <div class="text-ink-muted">{{ tx.date }}</div>
          <div class="font-medium" :style="{ color: tx.direction === 'in' ? '#41d4a8' : '#ff4b4a' }">{{ tx.amount }}</div>
          <div>
            <button class="px-5 h-[34px] rounded-pill border border-line text-base font-medium text-ink-muted hover:bg-page">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
