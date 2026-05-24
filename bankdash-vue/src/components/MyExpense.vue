<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import type { ChartData, ChartOptions } from 'chart.js';

const labels = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
const values = [220, 220, 220, 220, 320, 220];
const highlight = labels.map((_, i) => (i === 4 ? '#16dbcc' : '#edf0f7'));

const data: ChartData<'bar'> = {
  labels,
  datasets: [
    {
      data: values,
      backgroundColor: highlight,
      borderRadius: 20,
      barThickness: 28,
    },
  ],
};

const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: { grid: { display: false }, ticks: { color: '#718ebf', font: { size: 13 } } },
    y: { display: false, max: 380 },
  },
  layout: { padding: { top: 30 } },
};

const labelPlugin = {
  id: 'topLabel',
  afterDatasetsDraw(chart: import('chart.js').Chart) {
    const { ctx, data: d } = chart;
    const meta = chart.getDatasetMeta(0);
    const idx = 4; // Dec
    const bar = meta.data[idx];
    if (!bar) return;
    const value = (d.datasets[0].data[idx] as number) ?? 0;
    if (!value) return;
    ctx.save();
    ctx.fillStyle = '#343c6a';
    ctx.font = '600 16px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('$12,500', bar.x, bar.y - 8);
    ctx.restore();
  },
};
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold text-ink mb-5">My Expense</h2>
    <div class="bg-white rounded-card p-6 h-[225px]">
      <Bar :data="data" :options="options" :plugins="[labelPlugin]" />
    </div>
  </div>
</template>
