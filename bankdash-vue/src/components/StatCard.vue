<script setup lang="ts">
defineProps<{
  iconPath: string;
  iconColor: string;
  iconBg: string;
  label: string;
  value: string;
}>();
</script>

<template>
  <div class="bg-white rounded-card p-6 flex items-center gap-6 flex-1">
    <div
      class="w-[70px] h-[70px] rounded-avatar flex items-center justify-center shrink-0"
      :style="{ background: iconBg }"
    >
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path :d="iconPath" :stroke="iconColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div>
      <div class="text-base text-ink-muted">{{ label }}</div>
      <div class="text-3xl font-semibold text-ink mt-1">{{ value }}</div>
    </div>
  </div>
</template>
