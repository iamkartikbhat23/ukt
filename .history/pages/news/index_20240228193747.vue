<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { data  } = await useFetch(`/api/news`) ;
</script>
<template>
    <div>
        <p>News List</p>
    </div>
</template>


<style  scoped>

</style>