<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { data : news  } = await useFetch(`/api/news`) ;
</script>
<template>
    <div class="grid grid-cols-2 gap-2">
        <div v-for=""></div>
    </div>
</template>


<style  scoped>

</style>