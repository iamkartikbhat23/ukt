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

        <!-- <swiper 
            :scrollbar="{
                hide: true,
            }"
            :modules="modules"
            @destroy="reachedEnd"
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
                <div class="flex flex-col justify-around items-center h-screen w-full bg-zinc-900/60">
                    <div class="flex flex-grow flex-col justify-around items-center gap-10">
                        <div class="text-center font-semibold text-3xl text-zinc-100/30">{{ data.data.news.date }}</div>
                        <div class="flex gap-10 justify-center text-xl text-zinc-100/30">
                            <div class="flex items-center gap-1 ">
                                <Icon name="uil:eye" color="#f4f4f5AA"/> 
                                {{ data.data.news.total_views }}
                            </div>
                            <div class="flex items-center gap-1">
                                <Icon name="uil:share" color="#f4f4f5AA" />  
                                {{ data.data.news.total_shares }}
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <SocialShare network="facebook"  :styled="true" :label="false"  />

                            <SocialShare network="whatsapp"  :styled="true" :label="false" />
                        </div>
                        <NuxtLink :to="`/categories/${data.data.news.category_slug}`">
                            <div class="max-w-max text-md text-sky-200 border border-sky-300 rounded-lg px-3">{{ data.data.news.category_en }}</div>
                        </NuxtLink>
                    </div>
                    <NuxtLink :to="`/news/${data.data.randomNews.slug}`" class="w-full p-2">
                        <div class="bg-zinc-900/70 rounded-lg flex justify-between items-center p-2 line-clamp-1 truncate">
                            <div class="w-11/12 text-white">{{ data.data.randomNews.title }}</div>
                            <div class="w-1/12 flex justify-end">
                                <Icon name="mdi:chevron-triple-right" color="#ffffff" id="icnImg" />
                            </div>
                        </div>
                    </NuxtLink>
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

            
        </swiper> -->

        <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCoverflow,SwiperScrollbar]"
            :slides-per-view="1"
            :effect="'coverflow'"
            :scrollbar=true
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
                stopOnLastSlide: true
            }"
            :loop="false"
            :watch-slides-progress="true"
            :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }"
        >
            <SwiperSlide >
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
            </SwiperSlide>
            <SwiperSlide  v-slot="{ isVisible }" v-for="info in data.data.news.cards" :key="info.slug">
                <div class="relative">
                    <div class="absolute right-0 top-0 text-gray-800 text-sm p-1">
                        source : {{ info.source }}
                    </div>
                    <img :src="info.image" :class="isVisible ? 'animate-blurry' : ''" class="before:blur-md blur-none rounded-sm h-screen w-full"/>
                    <div :class="isVisible ? 'animate-fade-up' : ''"  class="absolute bottom-0 left-0 h-32 rounded-t-2xl bg-zinc-800/70 w-full text-center text-white">
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
            </SwiperSlide>
            <SwiperSlide>
                <div class="flex flex-col justify-around items-center h-screen w-full bg-zinc-900/60">
                    <div class="flex flex-grow flex-col justify-around items-center gap-10">
                        <div class="text-center font-semibold text-3xl text-zinc-100/30">{{ data.data.news.date }}</div>
                        <div class="flex gap-10 justify-center text-xl text-zinc-100/30">
                            <div class="flex items-center gap-1 ">
                                <Icon name="uil:eye" color="#f4f4f5AA"/> 
                                {{ data.data.news.total_views }}
                            </div>
                            <div class="flex items-center gap-1">
                                <Icon name="uil:share" color="#f4f4f5AA" />  
                                {{ data.data.news.total_shares }}
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <SocialShare network="facebook"  :styled="true" :label="false"  />

                            <SocialShare network="whatsapp"  :styled="true" :label="false" />
                        </div>
                        <NuxtLink :to="`/categories/${data.data.news.category_slug}`">
                            <div class="max-w-max text-md text-sky-200 border border-sky-300 rounded-lg px-3">{{ data.data.news.category_en }}</div>
                        </NuxtLink>
                    </div>
                    <NuxtLink :to="`/news/${data.data.randomNews.slug}`" class="w-full p-3">
                        <div class="bg-zinc-900/70 rounded-lg flex justify-between items-center p-2 line-clamp-1 truncate">
                            <div class="w-11/12 text-white line-clamp-1 truncate">{{ data.data.randomNews.title }}</div>
                            <div class="w-1/12 flex justify-end">
                                <Icon name="mdi:chevron-triple-right" color="#ffffff" id="icnImg" />
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script>
  

  const reachedEnd = () => {
    alert("HI")
  }
  
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