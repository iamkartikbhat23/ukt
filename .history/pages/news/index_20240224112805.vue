<template>
    <div>
        <p>Product ID {{ productId }}</p>
    </div>
</template>

<script setup>
    const { productId } = useRoute().params ;
</script>

<style lang="scss" scoped>

</style>