<script setup>
    const { id } = useRoute().params ;

    definePageMeta({
        layout:'news'
    }) ;

    const { data  } = await useFetch(`/api/news/${id}`) ;

    const shareNews = () => {
        navigator.share({
            title: data.value.news.title,
            text: 'UKT : WebStories',
            url: `/news/${data.value.news.slug}`
        })
    } ;


    
</script>
<template>
    <Head>
        <Title>Ukt | {{  data.news.title }}</Title>
        <Meta name="ogTitle" :content="`Pravi | ${data.news.title}`"></Meta>
        <Meta name="description" :content="`${data.news.description}`"></Meta>
        <Meta name="ogDescription" :content="`${data.news.description}`"></Meta>
        <Meta name="ogImage" :content="`${data.news.main_image}`"></Meta>
        <Meta name="ogUrl" :content="url"></Meta>
        <Meta name="ogType" content="article"></Meta>
        <Meta name="keywords" :content="data.news.hashtags"></Meta>
    </Head>
    <div class="max-h-screen">
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
                    <nuxt-img :src="data.news.main_image" format="webp" placeholder="/default.png" loading="lazy" alt="News card's main image" class="brightness-50 rounded-sm h-screen w-full blur-sm bg-white/30"/>
                    <div class="absolute top-0 left-0 h-screen w-full">
                        <div class="flex flex-col justify-around items-center h-full w-full ">
                            <div></div>
                            <div class="w-[90%] p-0.5 bg-zinc-100/10 rounded">
                                <div class="w-full flex flex-col justify-center items-center gap-10 bg-stone-900/60 py-4 rounded">
                                    <p data-aos="fade-up" class="px-4 text-4xl text-gray-100 text-pretty text-center">{{ data.news.title }}</p>
                                </div>
                            </div>
                            <div class="flex justify-end w-full px-4">
                                <div data-aos="fade-left" id="exdiv" class="max-w-max items-center text-lg text-blue-400 border border-blue-500 rounded-lg px-1 flex gap-2">
                                    <Icon name="mdi:chevron-triple-left" class="text-2xl" color="#0ea5e9" id="icnImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide  v-slot="{ isVisible }" v-for="info in data.news.cards" :key="info.slug">
                <div class="relative">
                    <div class="absolute right-0 top-0 text-gray-800 text-sm p-1" v-if="info.source!=null">
                        source : {{ info.source }}
                    </div>
                    <div @click="shareNews" class="absolute left-1 top-1 bg-black rounded-full p-1.5 animate-pulse cursor-pointer" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 text-white -rotate-45">
                            <path d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z" />
                        </svg>
                    </div>
                    <img :src="info.image" :class="isVisible ? 'animate-blurry' : ''" class="object-cover rounded-sm h-screen w-full"/>
                    <div :class="isVisible ? 'animate-fade-up' : ''"  class="absolute bottom-0 left-0 h-32 rounded-t-2xl bg-zinc-800/70 w-full text-center ">
                        <div class="flex flex-col items-center justify-around h-full">
                            <div class="text-3xl font-bold text-white">
                                {{ info.title }}
                            </div>
                            <div v-if="info.description!=null" class="text-lg line-clamp-2 font-bold text-gray-300/80">
                                {{ info.description }}
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="flex flex-col justify-around items-center h-screen w-full bg-zinc-900/60">
                    <div class="flex justify-between p-4 w-full">
                        <button @click="this.$router.go(-1);" nuxt-link-go-back class="flex items-center text-zinc-200 border border-zinc-200 px-2 py-1 rounded">
                            <Icon name="mdi:chevron-double-left" color="#e4e4e7" />
                            <div class="text-md">Back</div>
                        </button>
                        <NuxtLink to="/" class="flex items-center text-zinc-200 border border-zinc-200 px-2 py-1 rounded">
                            <Icon name="charm:arrow-up-right" color="#e4e4e7" />
                            <div class="text-md">Dashboard</div>
                        </NuxtLink>
                    </div>
                    <div class="flex flex-grow flex-col justify-around items-center gap-10">
                        <div class="text-center font-semibold text-3xl text-zinc-100/30">{{ data.news.date }}</div>
                        <div class="flex gap-10 justify-center text-xl text-zinc-100/30">
                            <div class="flex items-center gap-1 ">
                                <Icon name="uil:eye" color="#f4f4f5AA"/> 
                                {{ data.news.total_views }}
                            </div>
                            <div class="flex items-center gap-1">
                                <Icon name="uil:share" color="#f4f4f5AA" />  
                                {{ data.news.total_shares }}
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <SocialShare network="facebook"  :styled="true" :label="false"  />

                            <SocialShare network="whatsapp"  :styled="true" :label="false" />
                        </div>
                        <NuxtLink :to="`/categories/${data.news.category_slug}`">
                            <div class="max-w-max text-md text-sky-200 border border-sky-300 rounded-lg px-3">{{ data.news.category_en }}</div>
                        </NuxtLink>
                    </div>
                    <NuxtLink :to="`/news/${data.randomNews.slug}`" class="w-full p-3">
                        <div class="bg-zinc-900/70 rounded-lg flex justify-between items-center p-3 line-clamp-1 truncate">
                            <div class="w-11/12 text-white line-clamp-1 truncate text-xl">{{ data.randomNews.title }}</div>
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

<style>
    .swiper-scrollbar-drag {
        background-color: #e2e8f0AA !important; 
    }
</style>