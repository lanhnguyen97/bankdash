<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  yourName: 'Charlene Reed',
  userName: 'Charlene Reed',
  email: 'charlenereed@gmail.com',
  password: '**********',
  dob: '25 January 1990',
  presentAddr: 'San Jose, California, USA',
  permAddr: 'San Jose, California, USA',
  city: 'San Jose',
  postal: '45962',
  country: 'USA',
});
</script>

<template>
  <div class="px-4 sm:px-8 py-6 sm:py-8">
    <div class="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start">
      <div class="relative w-[90px] h-[90px] shrink-0">
        <div
          class="w-[90px] h-[90px] rounded-avatar bg-cover bg-center"
          :style="{
            backgroundImage:
              `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces')`,
          }"
        />
        <button class="absolute right-0 bottom-0 w-[30px] h-[30px] rounded-avatar bg-brand flex items-center justify-center text-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="white" />
          </svg>
        </button>
      </div>
      <div class="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">
        <label class="block">
          <div class="text-base text-ink mb-2">Your Name</div>
          <input v-model="form.yourName" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
        </label>
        <label class="block">
          <div class="text-base text-ink mb-2">User Name</div>
          <input v-model="form.userName" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
        </label>
        <label class="block">
          <div class="text-base text-ink mb-2">Email</div>
          <input v-model="form.email" type="email" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
        </label>
        <label class="block">
          <div class="text-base text-ink mb-2">Password</div>
          <input v-model="form.password" type="password" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
        </label>
        <label class="block">
          <div class="text-base text-ink mb-2">Date of Birth</div>
          <input v-model="form.dob" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
        </label>
        <label class="block">
          <div class="text-base text-ink mb-2">Present Address</div>
          <input v-model="form.presentAddr" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
        </label>
        <label class="block">
          <div class="text-base text-ink mb-2">Permanent Address</div>
          <input v-model="form.permAddr" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
        </label>
        <label class="block">
          <div class="text-base text-ink mb-2">City</div>
          <input v-model="form.city" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
        </label>
        <label class="block">
          <div class="text-base text-ink mb-2">Postal Code</div>
          <input v-model="form.postal" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
        </label>
        <label class="block">
          <div class="text-base text-ink mb-2">Country</div>
          <input v-model="form.country" class="w-full h-[50px] px-5 rounded-[15px] border border-line text-base text-ink-muted focus:outline-none" />
        </label>
      </div>
    </div>
    <div class="flex justify-end mt-8">
      <button class="px-12 h-[50px] rounded-[15px] bg-brand text-white text-md font-medium">Save</button>
    </div>
  </div>
</template>
