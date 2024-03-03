<script setup>
    definePageMeta({
        layout:'news'
    }) ;

    const { data  } = await useFetch(`/api/news/${id}`) ;
</script>
<template>
    <div>
        <p>News List</p>
    </div>
</template>


<style  scoped>

</style>