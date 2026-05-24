<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';

const mobileOpen = ref(false);
const route = useRoute();

watch(
  () => route.path,
  () => {
    mobileOpen.value = false;
  }
);
</script>

<template>
  <div class="min-h-screen bg-page">
    <div class="flex">
      <Sidebar :mobile-open="mobileOpen" @close="mobileOpen = false" />
      <div class="flex-1 min-w-0">
        <Header @menu-click="mobileOpen = true" />
        <main class="px-4 sm:px-6 lg:px-10 py-6 lg:py-8">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>
