<template>
    <div>
        <p>News ID {{ id }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params ;
</script>

<style scoped>

</style>