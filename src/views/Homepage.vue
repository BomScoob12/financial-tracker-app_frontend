<script setup lang="ts">
import MainBtn from '../components/MainBtn.vue';
import DailyEntry from '../components/DailyEntry.vue';
import DateBar from '../components/unit-component/DateBar.vue';
</script>

<template>
  <div>
    <!-- Section adding new entry -->
    <section>
      <h1 class="text-[32px]">Add new entry</h1>
      <MainBtn btnColor="bg-green-600">
        <template #btn-title>Income</template>
      </MainBtn>
      <MainBtn btnColor="bg-red-700">
        <template #btn-title>Expense</template>
      </MainBtn>
    </section>

    <!-- Section display daily -->
    <section class="">
      <h1 class="text-[32px]">Daily</h1>
      <div class="bg-[#FFEAAD] h-full p-2">
        <DateBar />
        <DailyEntry :title="'Fish'" :price="999.99" :catagory="'Food'" />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
