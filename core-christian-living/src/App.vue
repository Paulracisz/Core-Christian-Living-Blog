<template>
  <div>
    <h1>{{ article.title }}</h1>
    <div v-html="article.content" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: null
    };
  },
  mounted() {
    // Replace 'YOUR_DATASET' with your Sanity.io dataset name
    const dataset = 'production';

    // Replace 'YOUR_PROJECT_ID' with your Sanity.io project ID
    const projectId = 'xinvfi3s';

    // Replace 'YOUR_ARTICLE_ID' with the ID of the article you want to fetch
    const articleId = 'YOUR_ARTICLE_ID';

    this.fetchArticle(articleId, dataset, projectId);
  },
  methods: {
    fetchArticle(articleId, dataset, projectId) {
      // Fetch the article from the Sanity.io API endpoint
      fetch(
        `https://${projectId}.api.sanity.io/v1/data/doc/${dataset}/${articleId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data._id) {
            this.article = data;
          } else {
            console.error('Article not found');
          }
        })
        .catch((error) => {
          console.error('Error fetching article:', error);
        });
    }
  }
};
</script>
