<script setup lang="ts">
import { ref } from 'vue';
import Toggle from '../../components/Toggle.vue';

const currency = ref('USD');
const tz = ref('(GMT-12:00) International Date Line West');
const notif1 = ref(true);
const notif2 = ref(false);
const notif3 = ref(true);
</script>

<template>
  <div class="px-4 sm:px-8 py-6 sm:py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">
      <label class="block">
        <div class="text-base text-ink mb-2">Currency</div>
        <input v-model="currency" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
      </label>
      <label class="block">
        <div class="text-base text-ink mb-2">Time Zone</div>
        <input v-model="tz" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
      </label>
    </div>

    <div class="mt-9">
      <h3 class="text-xl font-semibold text-ink mb-5">Notification</h3>
      <div class="space-y-5">
        <Toggle v-model="notif1" label="I send or receive digita currency" />
        <Toggle v-model="notif2" label="I receive merchant order" />
        <Toggle v-model="notif3" label="There are recommendation for my account" />
      </div>
    </div>

    <div class="flex justify-end mt-8">
      <button class="px-12 h-[50px] rounded-[15px] bg-brand text-white text-md font-medium">Save</button>
    </div>
  </div>
</template>
