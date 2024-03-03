<script setup>
    definePageMeta({
        layout:'default'
    }) ;

    const { data  } = await useFetch(`/api/news`) ;

    const handleScroll = () => {
      // Check if the user has scrolled to the bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight
      ) {
        this.loadMore();
      }
    };

    const loadMore = () {
      if (!this.isLoading) {
        this.isLoading = true;
        // Simulated API call or data fetching
        // Replace this with your actual data fetching logic
        const newData = await useFetch(`/api/news`);
        this.items = this.items.concat(newData);
        this.page++;
        this.isLoading = false;
      }
    },
</script>
<template >
    <div class="flex flex-col p-1 md:p-0" >
        <h1 class="text-2xl text-gray-700 font-semibold p-3">All News</h1>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-2" @scroll="loadNews">
            <div v-for="info in items" :key="info.slug">
                <div class="flex flex-col border border-blue-100 rounded-lg ">
                    <NuxtLink :to="`/news/${info.slug}`">
                        <img :src="info.main_image" loading="lazy" alt="News card's main image" class="rounded-md h-fit w-full hover:rotate-[0.5deg] hover:shadow-md"/>
                        <div class="p-1">
                            <div class="text-md font-semibold line-clamp-2 h-14">{{ info.title }}</div>
                            <div class="flex justify-between items-center">
                                <div class="flex gap-2 items-center text-neutral-600 text-sm">
                                    <Icon name="uil:eye" color="#525252" />
                                    <div>{{ info.total_views }}</div>
                                </div>
                                <div class="text-sm text-blue-700 border border-blue-600 rounded-lg px-1">{{ info.category_en }}</div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      items: [], // Array to hold your content
      page: 1, // Track current page
      isLoading: false // Boolean to prevent multiple requests
    };
  },
  mounted() {
    this.loadMore();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Check if the user has scrolled to the bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight
      ) {
        this.loadMore();
      }
    },
    async loadMore() {
      if (!this.isLoading) {
        this.isLoading = true;
        // Simulated API call or data fetching
        // Replace this with your actual data fetching logic
        const newData = await useFetch(`/api/news`);
        this.items = this.items.concat(newData);
        this.page++;
        this.isLoading = false;
      }
    },
  }
};
</script>

<style  scoped>

</style>