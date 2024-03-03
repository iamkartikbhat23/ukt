<template>
    <div>
        <p>News ID {{ id }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params ;

    definePageMeta({
        layout:'default'
    }) ;

    const { data } = await useFetch('/api/dashboard') ;
    
</script>

<style scoped>

</style>