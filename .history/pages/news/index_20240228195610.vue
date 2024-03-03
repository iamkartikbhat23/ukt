<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { data  } = await useFetch(`/api/news`) ;
</script>
<template>
    <div >
        
    </div>
</template>


<style  scoped>

</style>