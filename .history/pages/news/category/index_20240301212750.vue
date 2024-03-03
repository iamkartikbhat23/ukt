<template>
    <div class="w-full">
        <div class="my-2 md:py-10 flex justify-center gap-5 md:px-1 px-4 flex-wrap">
            <div data-aos="flip-up" class=" cursor-pointer max-w-max px-3 py-1 border border-sky-700 text-sky-600 rounded-full hover:bg-sky-600 hover:text-white text-xl" 
                        v-for="categoryInfo in data">
                <NuxtLink :to="`/news/category/${categoryInfo.slug}`">
                    {{ categoryInfo.eng_name }} 
                </NuxtLink>
            </div>
        </div>
        <div class="flex w-full px-3 text-xl py-5" :class="page>1?'justify-between':'justify-end'">
            <div @click="perviousPg()"  class="w-1/3 flex justify-start">
                <div  v-if="page>=1" class="cursor-pointer flex gap-1 items-center text-blue-500">
                    <Icon name="mdi:chevron-double-left" color="#0ea5e9" class="text-xl"/>
                    <div class="hidden md:block">Previous</div>
                </div>
            </div>
            <div class="w-1/3 flex justify-center text-md">Page - {{ page+1 }}</div>
            <div @click="nextPg()"  class="w-1/3 flex justify-end">
                <div v-if="data?.length==96" class="cursor-pointer flex gap-1 items-center text-blue-500">
                    <div class="hidden md:block">Next</div>
                    <Icon name="mdi:chevron-double-right" color="#0ea5e9" class="text-xl"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    let page = ref(0) ;

    const { data, refresh  } = await useFetch(() => `/api/categories?offset=${page.value}`,{key:`category-list-${page.value}`}) ;

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

<style scoped>

</style>