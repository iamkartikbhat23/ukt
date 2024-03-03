<template>
    <div>
        <VueDatePicker v-model="date" inline auto-apply />
    </div>
</template>

<script>
    const date = ref(new Date());
</script>

<style lang="scss" scoped>

</style>