<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { data } = await useFetch('/api/dashboard') ;
</script>
<template>
    <div>
        <h2>Home</h2>
        <p>This is home page</p>
        <p>{{ data }}</p>
        <div v-for="info in data.news">
            <img src="info.main_image" />
        </div>
    </div>
</template>


<style scoped>

</style>