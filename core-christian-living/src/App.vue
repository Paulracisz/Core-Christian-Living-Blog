<template>
  <div>
    <h1 class="title"> Core Christian Living Blog</h1>
    <h2>A blog About Christian Family and Living, and Core Christian Principles</h2>
    <h1>Articles</h1>
    <div class="big-box">
      <div class="article-box" v-for="article in result" :key="article._id">
        <h1 class="article-title">{{ article.title }}</h1>
        <img :src="article.imageUrl" :alt="article.title" class="article-image" />
        <p class="article-body">{{ article.Body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [] // Define the result property as an empty array initially
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
        this.result = result.map(article => {
          // Extract the URL for the first image in the article's "images" array
          const imageUrl = article.image && article.image[0]?.asset?.url;
          return {
            ...article
          };
        });
        console.log(result[0].Body);
      })
      .catch((err) => console.error(err));
  }
};
</script>
