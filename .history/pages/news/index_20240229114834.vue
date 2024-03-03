<template>
    <div>
      <div v-for="item in items" :key="item.id">
        <!-- Render your data here -->
        {{ item.name }}
      </div>
      <div v-if="loading">Loading...</div>
    </div>
  </template>
  
  <script setup>
  
 
  </script>