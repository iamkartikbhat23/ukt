<script setup>

    const { data } = await useFetch(`/api/news?offset=2`) ;

    const scroller = ref(0) ;

</script>
<template>
    <div ref="scroller" @scroll="">
      <div v-for="item in data.data" :key="item.id">
        <!-- Render your data here -->
        {{ item.title }}
      </div>
    </div>
  </template>
  