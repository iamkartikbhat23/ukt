<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    let page = ref(0) ;

    const { data  } = await useFetch(`/api/news?offset=0`) ;

    // const nextPg = async () => {
    //   const { data  } = await useFetch(`/api/news?offset=${++page}`) ;
    // };
    // const perviousPg = async () => {
    //   const { data  } = await useFetch(`/api/news?offset=${--page}`) ;
    // };
</script>
<template >
    <div class="flex flex-col p-1 md:p-0">
        <h1 class="text-2xl text-gray-700 font-semibold p-3">All News</h1>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-2">
            <div v-for="info in data" :key="info.slug">
                <div class="flex flex-col border border-blue-100 rounded-lg ">
                    <NuxtLink :to="`/news/${info.slug}`">
                        <img :src="info.main_image" loading="lazy" alt="News card's main image" class="rounded-md h-fit w-full hover:rotate-[0.5deg] hover:shadow-md"/>
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
        <div class="flex w-full px-3 text-xl py-5" :class="page>1?'justify-between':'justify-end'">
            <div v-if="page>1" class="flex gap-1 items-center text-blue-500">
                <Icon name="mdi:chevron-double-left" color="#0ea5e9" class="text-xl"/>
                <div class="hidden md:block">Previous</div>
            </div>
            <div v-if="" class="flex gap-1 items-center text-blue-500">
                <div class="hidden md:block">Next</div>
                <Icon name="mdi:chevron-double-right" color="#0ea5e9" class="text-xl"/>
            </div>
        </div>
    </div>
</template>
<script>
</script>

<style  scoped>

</style>