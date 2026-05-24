<script setup lang="ts">
import CreditCard from './CreditCard.vue';

withDefaults(defineProps<{ action?: 'see-all' | 'add-card' }>(), { action: 'see-all' });
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-3xl font-semibold text-ink">My Cards</h2>
      <a v-if="action === 'see-all'" href="#" class="text-lg font-semibold text-ink hover:underline">See All</a>
      <a v-else href="#" class="text-md font-semibold text-ink hover:underline">+ Add Card</a>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
      <CreditCard variant="dark" balance="$5,756" holder="Eddy Cusuma" validThru="12/22" number="3778 **** **** 1234" />
      <CreditCard variant="light" balance="$5,756" holder="Eddy Cusuma" validThru="12/22" number="3778 **** **** 1234" />
    </div>
  </div>
</template>
