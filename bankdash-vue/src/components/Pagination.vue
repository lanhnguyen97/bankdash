<script setup lang="ts">
import { ref } from 'vue';

const PAGES = [1, 2, 3, 4];
const page = ref(1);
</script>

<template>
  <div class="flex items-center justify-end gap-3 mt-6 text-md font-medium">
    <button
      @click="page = Math.max(1, page - 1)"
      class="flex items-center gap-2 px-2 text-ink-muted"
    >
      <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
        <path d="M6 1L1 5.5L6 10" stroke="#718ebf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span>Previous</span>
    </button>
    <button
      v-for="p in PAGES"
      :key="p"
      @click="page = p"
      class="w-[35px] h-[35px] rounded-lg flex items-center justify-center"
      :style="page === p ? { background: '#1814f3', color: '#fff' } : { color: '#718ebf' }"
    >
      {{ p }}
    </button>
    <button
      @click="page = Math.min(PAGES.length, page + 1)"
      class="flex items-center gap-2 px-2 text-ink-muted"
    >
      <span>Next</span>
      <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
        <path d="M1 1L6 5.5L1 10" stroke="#718ebf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</template>
