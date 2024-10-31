<template>
  <button
    class="px-4 py-2 bg-white neubrutalism"
    :class="{
      'theme-primary': variant === 'primary',
      'theme-secondary': variant === 'secondary',
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: "primary" | "secondary" | "default";
}>();
</script>

