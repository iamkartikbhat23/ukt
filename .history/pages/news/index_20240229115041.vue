<script setup>

    const { data } = await useFetch(`/api/news?offset=2`) ;

    const 
</script>
<template>
    <div ref="scroller">
      <div v-for="item in data.data" :key="item.id">
        <!-- Render your data here -->
        {{ item.title }}
      </div>
    </div>
  </template>
  