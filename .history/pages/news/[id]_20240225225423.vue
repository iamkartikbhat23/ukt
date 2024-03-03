<script setup>
    const { id } = useRoute().params ;

    definePageMeta({
        layout:'news'
    }) ;

    const { data } = await useFetch(`/api/news/${id}`) ;
    
</script>
<template>
    <div class="max-h-screen">
        <!-- <p>News {{ data.data }}</p> -->
        <swiper
            :scrollbar="{
                hide: false,
            }"
            :modules="modules"
            class="mySwiper">
            <swiper-slide>
                <div>
                    <img :src="data.data.main_image" class="rounded-md h-screen w-full"/>
                </div>
            </swiper-slide>
            
            <swiper-slide v-for="info in data.data.news">
                <div>
                    <img :src="info.image" class="rounded-md h-screen w-full"/>
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
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .swiper-slide img {
    /* display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; */
    }
</style>