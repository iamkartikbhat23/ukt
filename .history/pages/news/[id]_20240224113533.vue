<template>
    <div>
        <p>Product ID {{ productId }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params ;
</script>

<style scoped>

</style>