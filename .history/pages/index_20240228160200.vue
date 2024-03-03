<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { data } = await useFetch('/api/dashboard') ;
    
</script>
<template>
    <div class="w-full">
        <h1 class="text-2xl font-semibold py-5">Popular News</h1>
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
                        spaceBetween: 40,
                    },
                    '1024': {
                        slidesPerView: 4.5,
                        spaceBetween: 50,
                    },
                }">
            <SwiperSlide v-for="info in data.data.news">

            </SwiperSlide>
        </Swiper>
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