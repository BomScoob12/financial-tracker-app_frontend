<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

// Define the props type
type Props = {
  btnColor: string;
  disabled?: boolean;
};

// Use withDefaults to specify default values
const props = withDefaults(defineProps<Props>(), {
  btnColor: 'bg-green-600',
  disabled: false,
});
</script>

<template>
  <button
    class="btn text-white px-20 text-[24px] rounded-xl"
    :class="props.btnColor"
    :disabled="props.disabled"
  >
    <slot name="btn-title">BTN_TITLE_TEMPLATE</slot>
  </button>
</template>

<style scoped></style>
