<script setup lang="ts">
const props = defineProps<{ modelValue: boolean; label: string }>();
const emit = defineEmits<{ 'update:modelValue': [v: boolean] }>();
const toggle = () => emit('update:modelValue', !props.modelValue);
</script>

<template>
  <label class="flex items-center gap-4 cursor-pointer">
    <button
      type="button"
      @click="toggle"
      class="shrink-0 relative transition-colors"
      :style="{
        width: '60px',
        height: '30px',
        borderRadius: '9999px',
        background: modelValue ? '#16dbcc' : '#e0e0e0',
      }"
    >
      <span
        class="absolute rounded-full bg-white transition-all"
        :style="{
          width: '22px',
          height: '22px',
          top: '4px',
          left: modelValue ? '34px' : '4px',
        }"
      />
    </button>
    <span class="text-base text-ink">{{ label }}</span>
  </label>
</template>
