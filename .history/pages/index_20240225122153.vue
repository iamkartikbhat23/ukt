        <script setup>
            definePageMeta({
                layout:'default'
            }) ;
        
            const { data } = await useFetch('api/dashboard') ;
        </script>
<template>
    <div>
        <h2>Home</h2>
        <p>This is home page</p>
        <p>{{ data }}</p>
    </div>
</template>


<style scoped>

</style>