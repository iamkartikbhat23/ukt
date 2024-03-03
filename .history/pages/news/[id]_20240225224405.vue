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
                <div>
                    <img :src="info.main_image" class="rounded-md h-fit w-full hover:rotate-[0.5deg]"/>
                </div>
            </swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
        </swiper>
    </div>
</template>

<script>

</script>
<style scoped>

</style>