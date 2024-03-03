<script setup>
    const date = ref(new Date());

    const dateClicked = (date) => {
        
        const year = date.getFullYear(); // Get the 4-digit year
        const month = date.getMonth() + 1; // Get the month (0-11, add 1 for human-readable month)
        const day = date.getDate(); 
        console.log(`${year}-${month}-${day}`);
        retutn `${year}-${month}-${day}`
    } ;

</script>
<template>
    <div class="flex flex-col gap-3">
        <div class="text-xl font-semibold">Choose a Date</div>
        <VueDatePicker  @date-update="dateClicked" v-model="date" inline auto-apply :max-date="new Date()" :transitions="true" />
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