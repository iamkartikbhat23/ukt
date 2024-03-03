<template>
    <div>
        <p>Product ID {{ id }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params ;
</script>

<style scoped>

</style>