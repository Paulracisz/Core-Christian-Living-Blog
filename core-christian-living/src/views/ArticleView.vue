<template>
<h1>You made it to the articles</h1>
      <RouterLink to="/">
        Back To Home
      </RouterLink>
</template>

<script>
export default {
  name: 'ArticlePage',
  data() {
    return {
      article: {},
    };
  },
  created() {
    let PROJECT_ID = 'xinvfi3s';
    let DATASET = 'production';
    let QUERY = encodeURIComponent('*[_type == "article"]');
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        this.result = result.map((article) => {
          return {
            ...article
          };
        });
        console.log(result)
      })
      .catch((err) => console.error(err));
    // Fetch the article details from the API using the provided article ID
    const articleId = this.$route.params.id;
    // Make an API call to retrieve the article based on the articleId
    // Assign the retrieved article data to the 'article' data property
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
