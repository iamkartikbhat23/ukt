<script setup>

    const { data } = await useFetch(`/api/news?offset=2`) ;
</script>
<template>
    <div>
      <div v-for="item in data.data" :key="item.id">
        <!-- Render your data here -->
        {{ item.title }}
      </div>
    </div>
  </template>
  