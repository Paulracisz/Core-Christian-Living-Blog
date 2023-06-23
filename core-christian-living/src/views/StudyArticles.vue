<template>
    <h1>Study Articles</h1>
 <div class="article-box" v-for="article in result">
      <RouterLink :to="`/article/${article._id}`" :key="article._id">
        <div class="big-box">
            <h1 class="article-title">{{ article.title }}</h1>
            <p>By: {{ article.createdBy }}</p>
            <img :src="article.imageUrl" :alt="article.title" class="article-image" />
          </div>
        </RouterLink>
        </div>
        <RouterLink id="back-home" to="/">
          Back To Home
        </RouterLink>
  </template>
  
  <!-- 
  Features to add:
  Daily Bible Verse from Bible Verse API []
  Comment section users can log in with social medias []
  Split articles into categories []
  Add side tabs to filter by category []
  Gospel playlist tab []
  Categories: Study articles, biblical evidence, gospel playlist []
  Make the text more colorful []
  Create About page for authors []
  Get rid of light and dark mode vars and just use the dark mode scheme []
  add website created by []
  Find way to make the newest articles appear at the top []
  
  Complete:
  Style articles to break text into different paragraphs according to schema [X]
  Clean up date for articles [X]
  MIT License [X]
  style article page [X]
  Figure out how to render the article previews on the homepage in a row format (side by side) [X]
  -->
  
  <script>
import { RouterLink } from 'vue-router';
import Dailyverse from '../components/Dailyverse.vue';
import AboutView from './AboutView.vue';

export default {
  data() {
    return {
      result: null // Initialize result to null
    };
  },mounted() {
  let PROJECT_ID = 'xinvfi3s';
  let DATASET = 'production';
  let QUERY = `*[Category == "study"]`;
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
        console.log(result)
      this.result = result.map((article) => {
        const imageUrl = article.imageUrl;
        return {
          ...article,
          imageUrl
        };
      });
    })
    .catch((err) => console.error(err));
},
  components: {
    RouterLink
  }
};
</script>
  