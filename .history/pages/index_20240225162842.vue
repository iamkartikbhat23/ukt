<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { data } = await useFetch('/api/dashboard') ;
</script>
<template>
    <div class="">
        <h2>Home</h2>
        <p>This is home page</p>
        <p>{{ data.data.news }}</p>
        <div v-for="info in data.data.news" class="grid grid-cols-3 gap-2">
            <img :src="info.main_image" class="rounded-md"/>
        </div>
    </div>
</template>


<style scoped>

</style>