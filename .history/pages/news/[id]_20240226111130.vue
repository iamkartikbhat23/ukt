<script setup>
    const { id } = useRoute().params ;

    definePageMeta({
        layout:'news'
    }) ;

    const { data } = await useFetch(`/api/news/${id}`) ;
    
</script>
<template>
    <div class="max-h-screen">
        <!-- <p>News {{ data.data.cards }}</p> -->
        <!-- <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
            }"
            :pagination="{
            clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
        </swiper> -->

        <swiper 
            :scrollbar="{
                hide: true,
            }"
            :modules="modules"
            class="mySwiper">
            <swiper-slide>
                <div class="relative">
                    <img :src="data.data.main_image" class="rounded-sm h-screen w-full blur-sm bg-white/30"/>
                    <div class="absolute top-0 left-0 h-screen w-full">
                        <div class="flex justify-center items-center h-full w-full">
                            <div class="w-[90%] text-4xl text-gray-600 text-pretty">
                                <p>{{ data.data.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            
            <swiper-slide v-for="info in data.data.cards">
                <div>
                    <img :src="info.image" class="rounded-sm h-screen w-full"/>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/scrollbar';

  import './style.css';

  // import required modules
  import { Scrollbar } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Scrollbar],
      };
    },
  };
</script>
<style scoped>
    .swiper {
    /* width: 100%;
    height: 100%; */
    }

    .swiper-slide {
    /* text-align: center;
    font-size: 18px;
    background: #fff; */

    /* Center slide text vertically */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    }

    .swiper-slide img {
    /* display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; */
    }
</style>