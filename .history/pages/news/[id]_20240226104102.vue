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
            :scrollbar="{
                hide: false,
                horizontalClass:'swiper-scrollbar-horizontal',
            }"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: true,
            }"
            :navigation="true"
            @autoplayTimeLeft="onAutoplayTimeLeft"
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
                modules: [Autoplay, Pagination, Navigation],
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