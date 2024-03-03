<template>
    <div>
        <p>News {{ data }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params ;

    definePageMeta({
        layout:'news'
    }) ;

    const { data } = await useFetch(`/api/news/${id}`) ;
    
</script>

<style scoped>

</style>