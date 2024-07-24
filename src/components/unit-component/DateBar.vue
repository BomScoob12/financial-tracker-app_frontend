<script setup lang="ts">
const date = new Date();
const dateFormat = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'medium',
}).format(date);
</script>

<template>
  <div class="w-40 px-3 py-2 bg-blue-950 text-white text-center font-semibold rounded-xl">
      {{ dateFormat }}
  </div>
</template>

<style scoped></style>
