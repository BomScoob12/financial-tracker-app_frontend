<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

type Props = {
    sizePx: string;
};

const props = withDefaults(defineProps<Props>(), {
    sizePx: '42px',
});
</script>

<template>
    <div class="w-1 h-[100%] bg-gray-300" :style="{height: props.sizePx}"></div>
</template>

<style scoped></style>