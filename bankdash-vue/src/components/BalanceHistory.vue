<script setup lang="ts">
import { Line } from 'vue-chartjs';
import type { ChartData, ChartOptions } from 'chart.js';

const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
const values = [200, 380, 740, 280, 580, 230, 650];

const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      data: values,
      borderColor: '#1814f3',
      borderWidth: 3,
      pointRadius: 0,
      fill: true,
      tension: 0.45,
      backgroundColor: (ctx) => {
        const chart = ctx.chart;
        const { ctx: c, chartArea } = chart;
        if (!chartArea) return 'rgba(45, 96, 255, 0.2)';
        const g = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        g.addColorStop(0, 'rgba(45, 96, 255, 0.35)');
        g.addColorStop(1, 'rgba(45, 96, 255, 0)');
        return g;
      },
    },
  ],
};

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { color: '#f3f3f5' }, ticks: { color: '#718ebf', font: { size: 13 } } },
    y: {
      grid: { color: '#f3f3f5' },
      ticks: { color: '#718ebf', font: { size: 13 }, stepSize: 200 },
      max: 800,
      beginAtZero: true,
    },
  },
};
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold text-ink mb-5">Balance History</h2>
    <div class="bg-white rounded-card p-6 h-[276px]">
      <Line :data="data" :options="options" />
    </div>
  </div>
</template>
