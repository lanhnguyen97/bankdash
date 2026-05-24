<script setup lang="ts">
const tabs = [
  { to: '/settings/profile', label: 'Edit Profile' },
  { to: '/settings/preferences', label: 'Preferences' },
  { to: '/settings/security', label: 'Security' },
];
</script>

<template>
  <div class="bg-white rounded-card overflow-hidden">
    <div class="border-b border-line flex items-center gap-6 sm:gap-9 px-4 sm:px-8 overflow-x-auto">
      <router-link
        v-for="t in tabs"
        :key="t.to"
        :to="t.to"
        custom
        v-slot="{ isActive, href, navigate }"
      >
        <a
          :href="href"
          @click="navigate"
          class="relative pt-6 pb-4 text-md font-medium whitespace-nowrap"
          :class="isActive ? 'text-brand' : 'text-ink-muted'"
        >
          {{ t.label }}
          <span
            v-if="isActive"
            class="absolute left-0 right-0 -bottom-[2px] h-[3px] rounded bg-brand"
          />
        </a>
      </router-link>
    </div>
    <router-view />
  </div>
</template>
