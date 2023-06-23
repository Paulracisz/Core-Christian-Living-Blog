<template>
  <div>
    <div id="title-box">
      <h1 class="title">Core Christian Living Blog</h1>
      <Navi></Navi>
    </div>
    <div id="search">
      <input id="Search-Bar" placeholder="Search">
    </div>
<div id="topics-box">
  <Topics></Topics>
</div>
    <h1>Articles</h1>
    <div class="article-flex">
    <div class="article-box" v-for="article in result" :key="article._id">
      <RouterLink :to="`/article/${article._id}`">
        <div class="big-box">
          <img :src="article.imageUrl" :alt="article.title" class="article-image" />
          <h1 class="article-title">{{ article.title }}</h1>
       
          <p id="article-p">By: {{ article.createdBy }}</p>
    
        </div>
      </RouterLink>
    </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Dailyverse from '../components/Dailyverse.vue'
import AboutView from './AboutView.vue'
import Topics from '../components/Topics.vue'
import Navi from '../components/Navi.vue'

export default {
  data() {
    return {
      result: null // Initialize result to null
    }
  },
  mounted() {
    let PROJECT_ID = 'xinvfi3s'
    let DATASET = 'production'
    let QUERY = encodeURIComponent('*[_type == "article"]')
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        this.result = result.map((article) => {
          const imageUrl = article.imageUrl
          return {
            ...article,
            imageUrl
          }
        })
      })
      .catch((err) => console.error(err))
  },
  components: {
    RouterLink,
    Navi,
    Dailyverse,
    Topics
  }
}
</script>

