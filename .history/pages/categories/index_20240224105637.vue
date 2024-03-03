<template>
    <div>
        <h2p>Category Id {{ categoryId }}</h2p>
    </div>
</template>

<script setup>
    const { categoryId } = useRoute().params ;
</script>

<style scoped>

</style>