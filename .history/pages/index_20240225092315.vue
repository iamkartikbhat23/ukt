<template>
    <div>
        <h2>Home</h2>
        <p>This is home page</p>
    </div>
</template>

<script>
    definePageMeta({
        layout:'default'
    }) ;

    const { data:products } = await useFetch()
</script>

<style scoped>

</style>