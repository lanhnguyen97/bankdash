<script setup lang="ts">
import { Pie } from 'vue-chartjs';
import type { ChartData, ChartOptions } from 'chart.js';

const data: ChartData<'pie'> = {
  labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
  datasets: [
    {
      data: [30, 15, 35, 20],
      backgroundColor: ['#343c6a', '#fc7900', '#1814f3', '#fa00ff'],
      borderColor: '#fff',
      borderWidth: 6,
      offset: 4,
    },
  ],
};

const options: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
};
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold text-ink mb-5">Expense Statistics</h2>
    <div class="bg-white rounded-card p-4 h-[322px] flex items-center justify-center">
      <Pie :data="data" :options="options" />
    </div>
  </div>
</template>
