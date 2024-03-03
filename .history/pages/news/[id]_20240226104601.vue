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
        <swiper
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
  </swiper>
    </div>
</template>

<script>
     // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/scrollbar';
    
    import 'swiper/css/autoplay' ;
    import 'swiper/css/pagination' ;

    import './style.css';

    // import required modules
    import { Scrollbar,Pagination,Navigation } from 'swiper/modules';

    export default {
        components: {
            Swiper,
            SwiperSlide,
            Scrollbar
        },
        setup() {
            const progressCircle = ref(null);
            const progressContent = ref(null);
            const onAutoplayTimeLeft = (s, time, progress) => {
                progressCircle.value.style.setProperty('--progress', 1 - progress);
                progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
            };
            return {
                onAutoplayTimeLeft,
                progressCircle,
                progressContent,
                modules: [Autoplay, Pagination],
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