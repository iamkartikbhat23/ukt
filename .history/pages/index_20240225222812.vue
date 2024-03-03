<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { data } = await useFetch('/api/dashboard') ;
    
</script>
<template>
    <div class="w-full">
        <div class="text-2xl font-semibold py-5">Popular News</div>
        <swiper
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
                <div class="flex flex-col border border-blue-100  rounded-lg">
                    <NuxtLink :to="news/info.slug">
                        <img :src="info.main_image" class="rounded-md h-fit w-full hover:rotate-[0.5deg]"/>
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
            </swiper-slide>
        </swiper>
        <!-- <div class="grid grid-cols-5 gap-5">
            <div v-for="info in data.data.news" >
                <img :src="info.main_image" class="rounded-md h-fit w-full"/>
            </div>
        </div> -->
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