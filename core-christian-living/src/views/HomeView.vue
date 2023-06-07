<template>
  <div>
    <div id="title-box">
      <div id=""></div>
      <h1 class="title">Core Christian Living Blog</h1>
    </div>
    <h2>A blog About Christian Family and Living, and Core Christian Principles</h2>
    <h1>Articles</h1>
      <RouterLink to="/article">
        <div class="big-box">
          <div class="article-box" v-for="article in result" :key="article._id">
            <h1 class="article-title">{{ article.title }}</h1>
            <img :src="article.imageUrl" :alt="article.title" class="article-image" />
          </div>
        </div>
      </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      result: null // Initialize result to null
    };
  },
  mounted() {
    let PROJECT_ID = 'xinvfi3s';
    let DATASET = 'production';
    let QUERY = encodeURIComponent('*[_type == "article"]');
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        this.result = result.map((article) => {
          const imageUrl = article.imageUrl;
          return {
            ...article,
            imageUrl
          };
        });
        console.log(result)
      })
      .catch((err) => console.error(err));
  },
  components: {
    RouterLink
  }
};
</script>
