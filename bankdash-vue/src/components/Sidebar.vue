<script setup lang="ts">
import logo from '../assets/icons/logo.svg';
import home from '../assets/icons/home.svg';
import transfer from '../assets/icons/transfer.svg';
import userIcon from '../assets/icons/user.svg';
import investment from '../assets/icons/investment.svg';
import creditCard from '../assets/icons/credit-card.svg';
import loan from '../assets/icons/loan.svg';
import service from '../assets/icons/service.svg';
import privileges from '../assets/icons/privileges.svg';
import settings from '../assets/icons/settings.svg';

defineProps<{ mobileOpen: boolean }>();
defineEmits<{ close: [] }>();

const items = [
  { label: 'Dashboard', icon: home, to: '/dashboard' },
  { label: 'Transactions', icon: transfer, to: '/transactions' },
  { label: 'Accounts', icon: userIcon, to: '/accounts' },
  { label: 'Investments', icon: investment, to: '/investments' },
  { label: 'Credit Cards', icon: creditCard, to: '/credit-cards' },
  { label: 'Loans', icon: loan, to: '/loans' },
  { label: 'Services', icon: service, to: '/services' },
  { label: 'My Privileges', icon: privileges, to: '/privileges' },
  { label: 'Setting', icon: settings, to: '/settings/profile' },
];

const blueFilter =
  'brightness(0) saturate(100%) invert(15%) sepia(99%) saturate(7488%) hue-rotate(244deg) brightness(98%) contrast(102%)';
</script>

<template>
  <button
    v-if="mobileOpen"
    aria-label="Close menu"
    class="lg:hidden fixed inset-0 bg-black/40 z-40"
    @click="$emit('close')"
  />
  <aside
    class="bg-white border-r border-line min-h-screen fixed lg:sticky top-0 left-0 z-50 w-[250px] shrink-0 transition-transform duration-200 lg:translate-x-0"
    :class="mobileOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="h-[80px] lg:h-[100px] flex items-center px-6 lg:px-10">
      <img :src="logo" alt="BankDash" class="h-9" />
    </div>
    <nav class="pt-2">
      <router-link
        v-for="it in items"
        :key="it.label"
        :to="it.to"
        custom
        v-slot="{ isActive, href, navigate }"
      >
        <a
          :href="href"
          @click="navigate"
          class="relative flex items-center gap-7 h-[56px] lg:h-[60px] pl-10 text-md font-medium"
          :class="isActive ? 'text-ink' : 'text-ink-muted'"
        >
          <span
            v-if="isActive"
            class="absolute left-0 top-0 bottom-0 w-[6px] bg-brand-accent rounded-r-[10px]"
          />
          <img
            :src="it.icon"
            alt=""
            class="w-[25px] h-[25px]"
            :style="isActive ? { filter: blueFilter } : undefined"
          />
          <span>{{ it.label }}</span>
        </a>
      </router-link>
    </nav>
  </aside>
</template>
