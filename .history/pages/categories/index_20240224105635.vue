<template>
    <div>
        <p>Category Id {{ categoryId }}</p>
    </div>
</template>

<script setup>
    const { categoryId } = useRoute().params ;
</script>

<style scoped>

</style>