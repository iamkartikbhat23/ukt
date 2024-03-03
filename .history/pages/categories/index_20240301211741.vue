<template>
    <div>
        <div class="my-2 md:py-10 flex justify-center gap-5 md:px-1 px-4 flex-wrap">
            <div data-aos="flip-up" class=" cursor-pointer max-w-max px-3 py-1 border border-sky-700 text-sky-600 rounded-full hover:bg-sky-600 hover:text-white text-xl" 
                        v-for="categoryInfo in data?.popularCategories">
                <NuxtLink :to="`/news/category/${categoryInfo.slug}`">
                    {{ categoryInfo.eng_name }} 
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { categoryId } = "hi" ;
</script>

<style scoped>

</style>