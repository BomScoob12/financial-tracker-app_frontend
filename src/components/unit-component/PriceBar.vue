<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

type Props = {
    typeOfMoney: string;
    price: number;
    currency: string;
};

const props : Props = withDefaults(defineProps<Props>(), {
    typeOfMoney: 'income',
    price: 0,
    currency: 'THB'
});

const bgSelector = () => {
    if (props.typeOfMoney === 'income') {
        return 'bg-green-700';
    } else {
        return 'bg-red-700';
    }
};
</script>

<template>
    <div :class="bgSelector()" class="flex w-full border p-2 mx-2 rounded-xl text-white">
        <p class="w-full px-2 text-end font-semibold">{{ props.price }}</p>
        <span class="justify-end font-semibold">{{ props.currency }}</span>
    </div>
</template>

<style scoped></style>