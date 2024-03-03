<template>
    <div>
        <p>News ID {{ id }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params ;

    definePageMeta({
        layout:'news'
    }) ;

    const { data } = await useFetch('/api/news/${id}`) ;
    
</script>

<style scoped>

</style>