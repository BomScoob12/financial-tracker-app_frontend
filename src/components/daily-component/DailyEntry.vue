<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import PriceBar from '@/components/unit-component/PriceBar.vue';
import VerticalBar from '@/components/decoration/VerticalBar.vue';

type Props = {
  title: string;
  price: number;
  catagory: string;
};

const props = withDefaults(defineProps<Props>(), {
  title: 'Title',
  price: 99.9,
  catagory: 'CatagoryDefault',
});
</script>

<template>
  <div id="entry" class="border border-red-500 p-1 bg-white rounded-xl">
    <!-- title -->
    <h3 id="entry-title" class="w-48 font-normal text-lg m-1">
      {{ props.title }}
    </h3>
    <!-- catagory title-->
     <!-- Should be drop down after refactor. -->
    <div id="entry-catagory" class="bg-catagories-food p-2 rounded-xl mx-2">
      <p class="w-auto text-base font-semibold">
        {{ props.catagory }}
      </p>
    </div>
    
    <VerticalBar sizePx="42px" />
    <!-- price -->
    <div id="entry-price">
      <PriceBar :price="props.price" currency="THB" typeOfMoney="expense" />
    </div>
  </div>
</template>

<style scoped>
#entry {
  display: flex;
  align-items: center;
}

#entry-title {
  flex-grow: 2;
  flex-shrink: 0;
  text-decoration: underline;
  align-items: end;
}

#entry-catagory {
  flex-grow: 1;
}

#entry-price {
  display: flex;
  flex-grow: 2;
  flex-shrink: 0;
}
</style>
