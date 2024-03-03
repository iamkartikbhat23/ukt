  <script setup>
  
  const { data } = await useFetch(`/api/news?offset=2`) ;
  </script>
<template>
    <div>
      <div v-for="item in data.data.news" :key="item.id">
        <!-- Render your data here -->
        {{ item.title }}
      </div>
      <div v-if="loading">Loading...</div>
    </div>
  </template>
  