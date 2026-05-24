<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import search from '../assets/icons/search.svg';
import gear from '../assets/icons/gear.svg';
import bell from '../assets/icons/bell.svg';

defineEmits<{ menuClick: [] }>();

const route = useRoute();

const titles: Record<string, string> = {
  '/dashboard': 'Overview',
  '/transactions': 'Transactions',
  '/accounts': 'Accounts',
  '/investments': 'Investments',
  '/credit-cards': 'Credit Cards',
  '/loans': 'Loans',
  '/services': 'Services',
  '/privileges': 'My Privileges',
};

const title = computed(() => {
  if (route.path.startsWith('/settings')) return 'Setting';
  return titles[route.path] ?? 'Overview';
});
</script>

<template>
  <header class="h-[80px] lg:h-[100px] bg-white border-b border-line flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
    <div class="flex items-center gap-3 min-w-0">
      <button aria-label="Open menu" @click="$emit('menuClick')" class="lg:hidden -ml-1 p-2 text-ink">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
      <h1 class="font-sans text-2xl sm:text-3xl lg:text-5xl font-semibold text-ink truncate">
        {{ title }}
      </h1>
    </div>
    <div class="flex items-center gap-3 sm:gap-5 lg:gap-7 shrink-0">
      <div class="relative hidden md:block">
        <img :src="search" alt="" class="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for something"
          class="w-[200px] xl:w-[255px] h-[50px] rounded-pill bg-page pl-12 pr-5 text-base text-ink-muted placeholder:text-ink-muted/70 focus:outline-none"
        />
      </div>
      <button aria-label="Search" class="md:hidden p-2 rounded-avatar bg-page">
        <img :src="search" alt="" class="w-5 h-5" />
      </button>
      <button aria-label="Settings" class="hidden sm:block">
        <img :src="gear" alt="" class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
      </button>
      <button aria-label="Notifications" class="block">
        <img :src="bell" alt="" class="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]" />
      </button>
      <div
        class="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-avatar bg-cover bg-center"
        :style="{
          backgroundImage:
            `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces')`,
        }"
        aria-label="Profile"
      />
    </div>
  </header>
</template>
