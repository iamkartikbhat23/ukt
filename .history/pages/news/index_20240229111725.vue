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
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const items = ref([])
  const page = ref(1)
  const loading = ref(false)
  
  const fetchData = () => {
    loading.value = true
    // Fetch data from the API
    aw(`https://api.example.com/data?page=${page.value}`)
      .then(response => response.json())
      .then(data => {
        // Append new data to existing items
        items.value = items.value.concat(data)
        page.value++
        loading.value = false
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        loading.value = false
      })
  }
  
  const handleScroll = () => {
    // Detect if the user has scrolled to the bottom of the page
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !loading.value
    ) {
      fetchData()
    }
  }
  
  onMounted(() => {
    fetchData()
    // Add scroll event listener to the window
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    // Remove scroll event listener when component is unmounted
    window.removeEventListener('scroll', handleScroll)
  })
  </script>