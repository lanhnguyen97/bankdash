<script setup lang="ts">
const featured = [
  { title: 'Life Insurance', desc: 'Unlimited protection', iconBg: '#e7edff', iconColor: '#396aff', path: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z' },
  { title: 'Shopping', desc: 'Buy. Think. Grow.', iconBg: '#fff5d9', iconColor: '#fbb937', path: 'M6 7h12l-1 12H7zM9 7V5a3 3 0 0 1 6 0v2' },
  { title: 'Safety', desc: 'We are your allies', iconBg: '#dcfaf8', iconColor: '#16dbcc', path: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z M9 12l2 2 4-4' },
];

const services = [
  { title: 'Business loans', iconBg: '#ffe0eb', iconColor: '#fe5c73', highlight: false },
  { title: 'Checking accounts', iconBg: '#fff5d9', iconColor: '#fbb937', highlight: false },
  { title: 'Savings accounts', iconBg: '#ffe0eb', iconColor: '#fe5c73', highlight: true },
  { title: 'Debit and credit cards', iconBg: '#e7edff', iconColor: '#396aff', highlight: false },
  { title: 'Life Insurance', iconBg: '#dcfaf8', iconColor: '#16dbcc', highlight: false },
  { title: 'Business loans', iconBg: '#ffe0eb', iconColor: '#fe5c73', highlight: false },
];
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-3 gap-[20px] xl:gap-[30px] mb-[30px]">
    <div v-for="f in featured" :key="f.title" class="bg-white rounded-card p-6 flex items-center gap-5">
      <div class="w-[70px] h-[70px] rounded-avatar flex items-center justify-center shrink-0" :style="{ background: f.iconBg }">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path :d="f.path" :stroke="f.iconColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div>
        <div class="text-xl font-semibold text-ink">{{ f.title }}</div>
        <div class="text-base text-ink-muted mt-1">{{ f.desc }}</div>
      </div>
    </div>
  </section>

  <section>
    <h2 class="text-3xl font-semibold text-ink mb-5">Bank Services List</h2>
    <div class="space-y-5">
      <div v-for="(s, i) in services" :key="i" class="bg-white rounded-card p-5 flex items-center gap-5">
        <div class="w-[50px] h-[50px] rounded-avatar flex items-center justify-center shrink-0" :style="{ background: s.iconBg }">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" :stroke="s.iconColor" stroke-width="1.8" />
          </svg>
        </div>
        <div class="flex-1">
          <div class="text-md font-medium text-ink">{{ s.title }}</div>
          <div class="text-2xs text-ink-muted">It is a long established</div>
        </div>
        <div class="text-base text-ink-muted hidden md:block">
          <div>Lorem Ipsum</div>
          <div class="text-2xs">Many publishing</div>
        </div>
        <div class="text-base text-ink-muted hidden lg:block">
          <div>Lorem Ipsum</div>
          <div class="text-2xs">Many publishing</div>
        </div>
        <div class="text-base text-ink-muted hidden lg:block">
          <div>Lorem Ipsum</div>
          <div class="text-2xs">Many publishing</div>
        </div>
        <button
          class="px-5 h-[35px] rounded-pill text-base font-medium"
          :class="s.highlight ? 'bg-brand-accent text-white' : 'border border-line text-ink-muted hover:bg-page'"
        >
          View Details
        </button>
      </div>
    </div>
  </section>
</template>
