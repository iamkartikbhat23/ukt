<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { data } = await useFetch('/api/dashboard') ;
</script>
<template>
    <div class="w-full">
        <!-- <h2>Home</h2>
        <p>This is home page</p>
        <p>{{ data.data.news }}</p> -->
        <div class="grid grid-cols-3 gap-5">
            <div v-for="info in data.data.news" >
                <img :src="info.main_image" class="rounded-md h-28 w-full"/>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>