<script setup>
    const date = ref(new Date());

    const dateClicked = (date) => {
        
        const year = date.getFullYear(); // Get the 4-digit year
        const month = date.getMonth() + 1; // Get the month (0-11, add 1 for human-readable month)
        month = month < 10 ? '0'+month : month;
        const day = date.getDate(); 
        day = day < 10 ? '0'+day : day ;
        console.log(`${year}-${month}-${day}`);
        return `${year}-${month<10}-${day}`
    } ;

    const { data, refresh  } = await useFetch(() => `/api/news/date/${page.value}`,{key:`list-${page.value}`}) ;

</script>
<template>
    <div class="flex flex-col gap-3">
        <div class="text-xl font-semibold">Choose a Date</div>
        <VueDatePicker  @date-update="dateClicked" v-model="date" inline auto-apply :max-date="new Date()" :transitions="true" />
    </div>
    <div class="flex flex-col p-1 md:p-0">
        <h1 class="text-2xl text-gray-700 font-semibold p-3">All News</h1>
        <div v-if="page!=0" class="flex w-full px-3 text-xl py-5">
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
        <div class="grid grid-cols-2 md:grid-cols-6 gap-2"  data-aos="fade-up">
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

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// export default {
//   components: { VueDatePicker },
//   data() {
//     return {
//       date: null,
//     };
//   }
// }
</script>
<style lang="scss" scoped>

</style>