<template>
    <div>
        <h2>Category Id {{ categoryId }}</h2>
    </div>
</template>

<script setup>
    const { categoryId } = useRoute().params ;
</script>

<style scoped>

</style>