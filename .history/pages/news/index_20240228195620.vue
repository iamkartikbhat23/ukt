<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { data  } = await useFetch(`/api/news`) ;
</script>
<template>
    <div class="grid grid-cols-2">
        
    </div>
</template>


<style  scoped>

</style>