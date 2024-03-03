<script setup>
    const date = ref(new Date());
</script>
<template>
    <div class="flex flex-col gap-3">
        <div class="text-xl font-semibold">Choose a Date</div>
        <VueDatePicker v-model="date" inline auto-apply :max-date="new Date()" :transitions="true" />
    </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { VueDatePicker },
  data() {
    return {
      date: null,
    };
  }
}
</script>
<style lang="scss" scoped>

</style>