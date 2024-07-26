<script setup lang="ts">
import DailyEntry from '@/components/daily-component/DailyEntry.vue';
import DateBar from '@/components/unit-component/DateBar.vue';
import NewEntryComponent from '@/components/action/NewEntryComponent.vue';
</script>

<template>
  <div>
    <!-- Section adding new entry -->
    <section>
      <NewEntryComponent />
    </section>

    <!-- Section display daily -->
    <section class="">
      <h1 class="text-3xl">Daily</h1>
      <div class="bg-[#FFEAAD] h-full p-2">
        <DateBar />
        <DailyEntry :title="'Fish'" :price="999.99" :catagory="'Food'" />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
