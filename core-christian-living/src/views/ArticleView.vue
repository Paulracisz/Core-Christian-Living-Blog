<template>
  <div id="header-flex">
<h1 id="article-header"></h1>
  </div>
<div id="p-flex">
<p id="date"></p>
<p id="created-by"></p>
</div>
<div id="article-flex">
<img id="article-thumb" />
</div>
<div id="text-flex">
  <p id="text"></p>
  <img id="image-2" />
  <br/>
<p id="par2"></p>
<img id="image-3" />
<br/>
<p id="par3"></p>
<br/>
<p id="par4"></p>
<img id="image-4" />
<br/>
<p id="par5"></p>
<br/>
<p id="par6"></p>
<br/>
</div>
      <RouterLink id="route" to="/">
        Back To Home
      </RouterLink>
</template>

<!-- 
Features to add:
Daily Bible Verse from Bible Verse API []
Comment section users can log in with social medias []
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
            let createdBy = document.getElementById("created-by")
            let formattedDate = new Date(currentArticle._createdAt)
            let image = document.getElementById("article-thumb")
            let par2 = document.getElementById("par2")
            let par3 = document.getElementById("par3")
            let par4 = document.getElementById("par4")
            let par5 = document.getElementById("par5")
            let par6 = document.getElementById("par6")
            image.src = currentArticle.imageUrl
            date.textContent = `${formattedDate.toGMTString()}`
            createdBy.textContent = `Created By: ${currentArticle.createdBy}`
            text.textContent = currentArticle.Body
            par2.textContent = currentArticle.paragraph2
            par3.textContent = currentArticle.paragraph3
            par4.textContent = currentArticle.paragraph4
            par5.textContent = currentArticle.paragraph5
            par6.textContent = currentArticle.paragraph6
            h1.textContent = currentArticle.title
            if (currentArticle.image2) {
              let image2 = document.getElementById("image-2")
              image2.src = currentArticle.image2Url
            }
            if (currentArticle.image3) {
              let image3 = document.getElementById("image-3")
              image3.src = currentArticle.image3Url
            }
            if (currentArticle.image4) {
              let image4 = document.getElementById("image-4")
              image4.src = currentArticle.image4Url
            }
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

p {
  line-height: 150%;
}

  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  
  #date {
    margin: 2em;
  }
  
  #text,
  #par2,
  #par3,
  #par4,
  #par5,
  #par6 {
    margin: 2em;
    font-size: 2em;
  }
  
  #p-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2em;
  }
  
  #header-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
  }
  
  #text-flex {
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1000px;
  }
  
  #route {
    text-align: center;
    font-size: 2em;
    transition: 0.3 ease all;
    margin-bottom: 2em;
  }
  
  #route:hover {
    text-decoration: underline;
    filter: brightness(50%);
  }
  
  #article-header {
    font-size: 3em;
  }
  
  #article-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
