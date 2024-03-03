<template>
    <div>
      <div v-for="item in items" :key="item.id">
        <!-- Render your data here -->
        {{ item.name }}
      </div>
      <div v-if="loading">Loading...</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
        page: 1, // Initial page
        loading: false
      };
    },
    mounted() {
      // Fetch initial data
      this.fetchData();
      // Add scroll event listener
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      // Remove scroll event listener when component is destroyed
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      fetchData() {
        // Set loading state to true to show loading indicator
        this.loading = true;
        // Fetch data from API
        // You need to replace this with your actual API endpoint
        wait useFetch(`https://api.example.com/data?page=${this.page}`)
          .then(response => response.json())
          .then(data => {
            // Append new data to existing items
            this.items = this.items.concat(data);
            // Increment page for next request
            this.page++;
            // Set loading state to false to hide loading indicator
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Set loading state to false in case of error
            this.loading = false;
          });
      },
      handleScroll() {
        // Detect if the user has scrolled to the bottom of the page
        if (
          window.innerHeight + window.scrollY >= document.body.offsetHeight &&
          !this.loading
        ) {
          // Fetch more data when user scrolls to bottom
          this.fetchData();
        }
      }
    }
  };
  </script>
  