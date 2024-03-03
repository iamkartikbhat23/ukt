<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { data  } = await useFetch(`/api/news`) ;
</script>
<template>
    <div class="grid grid-cols-2 gap-2">
        <div v-for="info in data" :key="info.slug">
            <div class="flex flex-col border border-blue-100 rounded-lg ">
                <NuxtLink :to="`/news/${info.slug}`">
                    <img :src="info.main_image" onload="'~/assets/images/defaultImage.png'" alt="News card's main image" class="rounded-md h-fit w-full hover:rotate-[0.5deg] hover:shadow-md"/>
                    <div class="p-1">
                        <div class="text-lg font-semibold line-clamp-2 h-14">{{ info.title }}</div>
                        <div class="flex justify-between items-center">
                            <div class="flex gap-2 items-center text-neutral-600 text-sm">
                                <Icon name="uil:eye" color="#525252" />
                                <div>{{ info.total_views }}</div>
                            </div>
                            <div class="text-sm text-blue-700 border border-blue-600 rounded-lg px-1">{{ info.category_en }}</div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>


<style  scoped>

</style>