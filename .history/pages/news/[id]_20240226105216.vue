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
                <div>
                    <img :src="data.data.main_image" class="rounded-md h-full w-full"/>
                </div>
            </swiper-slide>
            
            <swiper-slide v-for="info in data.data.cards">
                <div>
                    <img :src="info.image" class="rounded-md h-full w-full"/>
                </div>
            </swiper-slide>
            <template #container-end>
                <div class="autoplay-progress">
                    <svg viewBox="0 0 48 48" ref="progressCircle">
                    <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref="progressContent"></span>
                </div>
            </template>
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