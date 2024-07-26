<script setup lang="ts">
import MainBtn from '@/components/MainBtn.vue';
</script>

<template>
  <div>
    <h1 class="text-3xl">Add new entry</h1>
    <MainBtn btnColor="bg-green-600">
      <template #btn-title>Income</template>
    </MainBtn>
    <MainBtn btnColor="bg-red-700">
      <template #btn-title>Expense</template>
    </MainBtn>
  </div>
</template>

<style scoped></style>
