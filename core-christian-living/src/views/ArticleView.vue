<template>
<h1></h1>
<p id="date"></p>
<img />
<p id="text"></p>
      <RouterLink to="/">
        Back To Home
      </RouterLink>
</template>

<!-- 
Features to add:
Daily Bible Verse from Bible Verse API []
Comment section users can log in with social medias []
Create About page []
Clean up date for articles []
add website created by []
MIT License []
style article page []

Complete:
Figure out how to render the article previews on the homepage in a row format (side by side) [X]
-->

<script>
export default {
  name: 'ArticlePage',
  data() {
    return {
      article: {},
    };
  },
  created() {
    let currentArticle = {}
    let PROJECT_ID = 'xinvfi3s';
    let DATASET = 'production';
    let QUERY = encodeURIComponent('*[_type == "article"]');
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    const articleId = this.$route.params.id;
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
       result.map((article) => {
          if (article._id === articleId) {
             currentArticle = article
            let h1 = document.querySelector("h1")
            let text = document.getElementById("text")
            let date = document.getElementById("date")
            let formattedDate = Date(currentArticle._createdAt)
            let image = document.querySelector("img")
            image.src = currentArticle.imageUrl
            date.textContent = `${formattedDate.toLocaleString()}`
            text.textContent = currentArticle.Body
            h1.textContent = currentArticle.title
          }
        });
      })
      .catch((err) => console.error(err));
  },
}
</script>

<style>
img {
  width: 30em;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
