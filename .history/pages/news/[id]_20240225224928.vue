<script setup>
    const { id } = useRoute().params ;

    definePageMeta({
        layout:'news'
    }) ;

    const { data } = await useFetch(`/api/news/${id}`) ;
    
</script>
<template>
    <div>
        <!-- <p>News {{ data.data }}</p> -->
        <swiper
            :scrollbar="{
                hide: false,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide>
                <div>
                    <img :src="data.data.main_image" class="rounded-md h-fit w-full"/>
                </div>
            </swiper-slide>
            
            <swiper-slide v-for="info in data.data.news">
                <div>
                    <img :src="info.image" class="rounded-md h-fit w-full"/>
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

    // import './style.css';

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

</style>