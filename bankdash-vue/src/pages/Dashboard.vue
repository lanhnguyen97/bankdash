<script setup lang="ts">
import MyCards from '../components/MyCards.vue';
import RecentTransaction from '../components/RecentTransaction.vue';
import WeeklyActivity from '../components/WeeklyActivity.vue';
import ExpenseStatistics from '../components/ExpenseStatistics.vue';
import QuickTransfer from '../components/QuickTransfer.vue';
import BalanceHistory from '../components/BalanceHistory.vue';
</script>

<template>
  <section class="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px] mb-[30px]">
    <MyCards />
    <RecentTransaction />
  </section>

  <section class="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px] mb-[30px]">
    <WeeklyActivity />
    <ExpenseStatistics />
  </section>

  <section class="grid grid-cols-1 xl:grid-cols-[445fr_635fr] gap-[30px]">
    <QuickTransfer />
    <BalanceHistory />
  </section>
</template>
