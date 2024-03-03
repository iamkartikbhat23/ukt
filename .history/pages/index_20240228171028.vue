<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { data } = await useFetch('/api/dashboard') ;
    
</script>
<template>
    <div class="w-full">
        <div>
            <h1 class="text-2xl font-semibold py-5 px-1 md:px-0">Popular News</h1>
        <Swiper :modules="[SwiperNavigation]"
                :slidesPerView="1"
                :spaceBetween="10"
                :pagination="{
                    clickable: true,
                }"
                :breakpoints="{
                    '640': {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    '768': {
                        slidesPerView: 3.5,
                        spaceBetween: 25,
                    },
                    '1024': {
                        slidesPerView: 4.5,
                        spaceBetween: 30,
                    },
                }">
            <SwiperSlide v-for="info in data.data.news">
                <div class="flex flex-col border border-blue-100 rounded-lg ">
                    <NuxtLink :to="`/news/${info.slug}`">
                        <img :src="info.main_image" onload="'~/assets/images/defaultimage.png'" alt="News card's main image" class="rounded-md h-fit w-full hover:rotate-[0.5deg] hover:shadow-md"/>
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
            </SwiperSlide>
        </Swiper>
        </div>
        <!-- <swiper
            :slidesPerView="1"
            :spaceBetween="10"
            :pagination="{
            clickable: true,
            }"
            :breakpoints="{
                '640': {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                '768': {
                    slidesPerView: 3.5,
                    spaceBetween: 40,
                },
                '1024': {
                    slidesPerView: 4.5,
                    spaceBetween: 50,
                },
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide  v-for="info in data.data.news">
                
            </swiper-slide>
        </swiper> -->
        <!-- <div class="grid grid-cols-5 gap-5">
            <div v-for="info in data.data.news" >
                <img :src="info.main_image" class="rounded-md h-fit w-full"/>
            </div>
        </div> -->
        <h2 class="w-10/12 text-2xl font-bold pt-12">Category News</h2>
        <template v-for="category in data.data.categories" class="">
            <div class="flex justify-between items-center my-3">
                <h2 class="w-10/12 text-xl font-semibold py-5">{{ category.eng_name }}</h2>
                <div class="w-2/12 text-sm md:text-lg text-blue-700 font-semibold flex gap-1 justify-end items-center">
                    View all
                    <Icon name="mdi:chevron-double-right" color="#0ea5e9" />
                </div>
            </div>
            <Swiper :modules="[SwiperNavigation]"
                    :slidesPerView="1"
                    :spaceBetween="10"
                    :pagination="{
                        clickable: true,
                    }"
                    :breakpoints="{
                        '640': {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 3.5,
                            spaceBetween: 25,
                        },
                        '1024': {
                            slidesPerView: 4.5,
                            spaceBetween: 30,
                        },
                    }">
                <SwiperSlide v-for="info in category.news">
                    <div class="flex flex-col border border-blue-100  rounded-lg">
                        <NuxtLink :to="`/news/${info.slug}`">
                            <img :src="info.main_image" onload="'~/assets/images/defaultimage.png'" alt="News card's main image" class="rounded-md h-fit w-full hover:rotate-[0.5deg]"/>
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
                </SwiperSlide>
            </Swiper>
            <hr class="my-4" />
        </template>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';


  // import required modules
  import { Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>
<style scoped>

</style>