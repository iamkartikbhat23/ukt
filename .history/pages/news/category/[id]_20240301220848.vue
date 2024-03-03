<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { id } = useRoute().params ;

    let page = ref(0) ;

    const { data, refresh  } = await useFetch(() => `/api/categories/${id}?offset=${page.value}`,{key:`list-${page.value}`}) ;

    function nextPg()  {
        page.value++ ;
        window.scrollTo(0,0);
        refresh() ;
    }
    function perviousPg()  {
        page.value-- ;
        window.scrollTo(0,0);
        refresh() ;
    };
</script>
<template>
    <div class="flex flex-col p-1 md:p-0 w-full">
        <h1 class="text-2xl text-gray-700 font-semibold py-3">{{ data.categoryInfo.name }} Category Stories</h1>
        <div v-if="page!=0" class="flex w-full px-3 text-xl py-5">
            <div @click="perviousPg()"  class="w-1/3 flex justify-start">
                <div  v-if="page>=1" class="cursor-pointer flex gap-1 items-center text-blue-500">
                    <Icon name="mdi:chevron-double-left" color="#0ea5e9" class="text-xl"/>
                    <div class="hidden md:block">Previous</div>
                </div>
            </div>
            <div class="w-1/3 flex justify-center text-md" v-if="data.categories.length > 0">Page - {{ page+1 }}</div>
            <div @click="nextPg()"  class="w-1/3 flex justify-end">
                <div v-if="data?.categories?.length==96" class="cursor-pointer flex gap-1 items-center text-blue-500">
                    <div class="hidden md:block">Next</div>
                    <Icon name="mdi:chevron-double-right" color="#0ea5e9" class="text-xl"/>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-2"  data-aos="fade-up" v-if="data.categories.length > 0">
            <div v-for="info in data.categories" :key="info.slug" >
                <div class="flex flex-col border border-blue-100 rounded-lg ">
                    <NuxtLink :to="`/news/${info.slug}`">
                        <nuxt-img :src="info.main_image" format="webp" quality="70" placeholder="/default.png" loading="lazy" alt="News card's main image" class="rounded-md h-fit w-full hover:rotate-[0.5deg] hover:shadow-md"/>
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
        <div v-else class="w-full h-36 flex items-center justify-center">
            <div class="text-xl text-gray-400 font-semibold">No Stories Found</div>
        </div>
        <div class="flex w-full px-3 text-xl py-5" :class="page>1?'justify-between':'justify-end'">
            <div @click="perviousPg()"  class="w-1/3 flex justify-start">
                <div  v-if="page>=1" class="cursor-pointer flex gap-1 items-center text-blue-500">
                    <Icon name="mdi:chevron-double-left" color="#0ea5e9" class="text-xl"/>
                    <div class="hidden md:block">Previous</div>
                </div>
            </div>
            <div class="w-1/3 flex justify-center text-md" v-if="data.categories.length > 0">Page - {{ page+1 }}</div>
            <div @click="nextPg()"  class="w-1/3 flex justify-end">
                <div v-if="data?.categories?.length==96" class="cursor-pointer flex gap-1 items-center text-blue-500">
                    <div class="hidden md:block">Next</div>
                    <Icon name="mdi:chevron-double-right" color="#0ea5e9" class="text-xl"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>

<style  scoped>

</style>