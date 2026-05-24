<script setup lang="ts">
import { ref } from 'vue';
import Toggle from '../../components/Toggle.vue';

const twoFa = ref(true);
const current = ref('**********');
const next = ref('**********');
</script>

<template>
  <div class="px-4 sm:px-8 py-6 sm:py-8">
    <h3 class="text-xl font-semibold text-ink mb-5">Two-factor Authentication</h3>
    <Toggle v-model="twoFa" label="Enable or disable two factor authentication" />
    <h3 class="text-xl font-semibold text-ink mt-9 mb-5">Change Password</h3>
    <div class="space-y-5 max-w-2xl">
      <label class="block">
        <div class="text-base text-ink mb-2">Current Password</div>
        <input v-model="current" type="password" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
      </label>
      <label class="block">
        <div class="text-base text-ink mb-2">New Password</div>
        <input v-model="next" type="password" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
      </label>
    </div>
    <div class="flex justify-end mt-8">
      <button class="px-12 h-[50px] rounded-[15px] bg-brand text-white text-md font-medium">Save</button>
    </div>
  </div>
</template>
