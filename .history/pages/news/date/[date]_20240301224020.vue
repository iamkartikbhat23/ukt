<script setup>
    const date = ref(new Date());
</script>
<template>
    <div>
        <VueDatePicker v-model="date" inline auto-apply :max-date="new Date()" :transitions="true" />
    </div>
</template>

<Script></Script>
<style lang="scss" scoped>

</style>