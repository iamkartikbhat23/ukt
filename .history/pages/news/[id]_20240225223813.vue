<script setup>
    const { id } = useRoute().params ;

    definePageMeta({
        layout:'news'
    }) ;

    const { data } = await useFetch(`/api/news/${id}`) ;
    
</script>
<template>
    <div>
        <p>News {{ data }}</p>
    </div>
</template>


<style scoped>

</style>