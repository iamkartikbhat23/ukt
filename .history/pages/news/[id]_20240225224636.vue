<script setup>
    const { id } = useRoute().params ;

    definePageMeta({
        layout:'news'
    }) ;

    const { response } = await useFetch(`/api/news/${id}`) ;
    
</script>
<template>
    <div>
        <p>News {{ response.data }}</p>
        <swiper
            :scrollbar="{
                hide: true,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide>
                <div>
                    <!-- <img :src="response.main_image" class="rounded-md h-fit w-full hover:rotate-[0.5deg]"/> -->
                </div>
            </swiper-slide>
            
            <!-- <swiper-slide v-for="info in response.data.cards"> -->
            
            <!-- </swiper-slide> -->
        </swiper>
    </div>
</template>

<script>

</script>
<style scoped>

</style>