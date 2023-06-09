<template>
    <div>
      <h2>Verse of the Day</h2>
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else>
        <p>{{ verse }}</p>
        <p>- {{ reference }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        verse: '',
        reference: '',
        isLoading: false,
        error: ''
      };
    },
    mounted() {
      this.fetchVerseOfTheDay();
    },
    methods: {
      fetchVerseOfTheDay() {
        this.isLoading = true;
        axios
          .get('https://bible-api.com/v2/verses/John 3:16')
          .then(response => {
            const { text, reference } = response.data;
            this.verse = text;
            this.reference = reference;
            this.isLoading = false;
          })
          .catch(error => {
            this.error = 'Failed to fetch verse of the day.';
            console.error(error);
            this.isLoading = false;
          });
      }
    }
  };
  </script>
  