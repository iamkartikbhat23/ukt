<script setup>
    const { id } = useRoute().params ;

    definePageMeta({
        layout:'news'
    }) ;

    const {data} = await useFetch(`/api/news/${id}`) ;

    
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
                    <img :src="data.data.news.main_image" class="brightness-50 rounded-sm h-screen w-full blur-sm bg-white/30"/>
                    <div class="absolute top-0 left-0 h-screen w-full">
                        <div class="flex flex-col justify-around items-center h-full w-full ">
                            <div></div>
                            <div class="w-[90%] flex flex-col justify-center items-center gap-10">
                                <p data-aos="fade-up" class="px-4 text-4xl text-gray-100 text-pretty text-center">{{ data.data.news.title }}</p>
                                <div class="max-w-max text-md text-blue-200 border border-blue-200 rounded-lg px-1">{{ data.data.news.category_en }}</div>
                            </div>
                            <div class="flex justify-end w-full px-4">
                                <div data-aos="fade-left" id="exdiv" class="animate-pulse  max-w-max items-center text-lg text-blue-400 border border-blue-500 rounded-lg px-1 flex gap-2">
                                    <Icon name="mdi:chevron-triple-left" color="#0ea5e9" id="icnImg" />
                                    Swipe Left
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="flex flex-col justify-around items-center h-full w-full bg-green-50">
                    <div>Date : {{ data.data.main_image.date }}</div>
                    <div>Views {{ data.data.main_image.total_views }}</div>
                    <div>Views {{ data.data.main_image.total_shares }}</div>
                    <div class="flex justify-end w-full px-4">
                        <div data-aos="fade-left" id="exdiv" class="animate-pulse  max-w-max items-center text-lg text-blue-400 border border-blue-500 rounded-lg px-1 flex gap-2">
                            <Icon name="mdi:chevron-triple-left" color="#0ea5e9" id="icnImg" />
                            Swipe Left
                        </div>
                    </div>
                </div>
            </swiper-slide>
            
            <swiper-slide v-for="info in data.data.news.cards">
                <div class="relative">
                    <div class="absolute right-0 top-0 text-gray-800 text-sm p-1">
                        source : {{ info.source }}
                    </div>
                    <img :src="info.image" class="before:blur-md blur-none rounded-sm h-screen w-full"/>
                    <div data-aos="fade-up" class="absolute bottom-0 left-0 h-32 rounded-t-2xl bg-zinc-800/70 w-full text-center text-white">
                        <div class="flex flex-col items-center justify-around h-full">
                            <div class="text-3xl font-bold">
                                {{ info.title }}
                            </div>
                            <div v-if="info.description!=null" class="text-xl font-bold">
                                {{ info.description }}
                            </div>
                        </div>
                    </div>
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