<script setup>
    
    const { date } = useRoute().params ;

    const { data, refresh  } = await useFetch(`/api/news/date/${date}`) ;

</script>
<template class="flex gap-1 w-full">
    <div class="w-full flex flex-col p-1 md:p-0">
        <h1 class="text-2xl text-gray-700 font-semibold p-3">{{ date }} Stories</h1>
        <div v-if="data.length>0" class="w-full grid grid-cols-2 md:grid-cols-6 gap-2"  data-aos="fade-up">
            <div v-for="info in data" :key="info.slug" >
                <div class="flex flex-col border border-blue-100 rounded-lg ">
                    <NuxtLink :to="`/news/${info.slug}`">
                        <nuxt-img :src="info.main_image" format="webp" quality="70" placeholder="/default.png" loading="lazy" alt="News card's main image" class="rounded-md h-fit w-full hover:rotate-[0.5deg] hover:shadow-md"/>
                        <!-- <img :src="info.main_image" loading="lazy" alt="News card's main image" class="rounded-md h-fit w-full hover:rotate-[0.5deg] hover:shadow-md"/> -->
                        <div class="p-1">
                            <div class="text-md font-semibold line-clamp-2 h-14">{{ info.title }}</div>
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
        <div ck></div>
    </div>
</template>

<style lang="scss" scoped>

</style>