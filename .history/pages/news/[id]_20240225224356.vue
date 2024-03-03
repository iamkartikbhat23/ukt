<script setup>
    const { id } = useRoute().params ;

    definePageMeta({
        layout:'news'
    }) ;

    const { data } = await useFetch(`/api/news/${id}`) ;
    
</script>
<template>
    <div>
        <p>News {{ data }}</p>
        <swiper
            :scrollbar="{
            hide: true,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide>
                
            </swiper-slide>
            <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
        </swiper>
    </div>
</template>

<script>

</script>
<style scoped>

</style>