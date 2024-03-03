<script setup>
    const date = ref(new Date());

    const dateClicked = (date) => {
        console.log(`Selected ${date}`);
    } ;

    const format = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return ` ${day}/${month}/${year}`;
    }
</script>
<template>
    <div class="flex flex-col gap-3">
        <div class="text-xl font-semibold">Choose a Date</div>
        <VueDatePicker @date-update="dateClicked" v-model="date" inline auto-apply :max-date="new Date()" :transitions="true" />
    </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// export default {
//   components: { VueDatePicker },
//   data() {
//     return {
//       date: null,
//     };
//   }
// }
</script>
<style lang="scss" scoped>

</style>