<template>
  <div id="study-flexbox">
    <div id="title-box">
      <h1 class="title">Core Christian Living Blog</h1>
      <Navi></Navi>
    </div>
    <div id="search">
      <input id="Search-Bar" placeholder="Search" />
    </div>
    <div id="topics-box">
      <div id="topics-flex">
    <h1 class="">Topics</h1>
    <div id="buttons-flex">
    <RouterLink class="nav-text" to="/"><button>All</button></RouterLink>
    <RouterLink class="nav-text" to="/prayer-articles"><button>Prayers</button></RouterLink>
    <RouterLink class="nav-text" to="/study-articles"><button>Bible Studies</button></RouterLink>
    <RouterLink class="nav-text" to="/evidence-articles"><button id="selected-button">Evidence</button></RouterLink>
    </div>
    </div>
    </div>
    <div class="article-flex">
      <div class="article-box" v-for="article in result" :key="article._id">
        <RouterLink :to="`/article/${article._id}`">
          <div class="big-box">
            <img :src="article.imageUrl" :alt="article.title" class="article-image" />
            <h1 class="article-title">{{ article.title }}</h1>

            <p class="article-p">By: {{ article.createdBy }}</p>
          </div>
        </RouterLink>
        <div class="article-footer">
          <div class="article-cati">
            <p class="cati-text">{{ article.Category }}</p>
          </div>
          <div class="article-created-at">
            <p class="footer-text">📅 {{ convertMonth(article._createdAt) }} {{ new Date(article._createdAt).getDate() }} </p>
          </div>
          <div class="article-time-to-read">
            <p class="footer-text">🕒 {{ article.timeToRead }}</p>
          </div>
        </div>
      </div>
    </div>
    <a id="back-home" href="#top" class="home-back" to="/">
        Back To The Top
    </a>
    <div class="credit-div"><p class="credit-text">Website Created By Paul Racisz © 2023</p></div>
  </div>
</template>
  
  <script>
import { RouterLink } from 'vue-router';
import Dailyverse from '../components/Dailyverse.vue';
import Topics from '../components/Topics.vue'
import Navi from '../components/Navi.vue'
import AboutView from './AboutView.vue';

export default {
  data() {
    return {
      result: null // Initialize result to null
    };
  },mounted() {
  let PROJECT_ID = 'xinvfi3s';
  let DATASET = 'production';
  let QUERY = `*[Category == "Evidence"]`;
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
  methods: {
    convertMonth(utcString) {
      const date = new Date(utcString)
      const monthWord = date.toLocaleString('en-US', { month: 'long' })
      return monthWord
    }
  },
  components: {
    RouterLink,
    Topics,
    Navi
  }
};
</script>


<style>
#study-flexbox {
  width: 100vw;
}
</style>
  