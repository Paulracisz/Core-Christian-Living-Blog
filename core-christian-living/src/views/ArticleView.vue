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
<img id="image-5" />
<br/>
<p id="par6"></p>
<img id="image-6" />
<br/>
<p id="par7"></p>
<img id="image-7" />
<br/>
<p id="par8"></p>
<img id="image-8" />
<br/>
<p id="par9"></p>
<img id="image-9" />
<br/>
<p id="par10"></p>
<img id="image-10" />
<br/>
<p id="par11"></p>
<img id="image-11" />
<br/>
<p id="par12"></p>
<img id="image-12" />
<br/>
</div>
      <RouterLink id="back-home" to="/">
        Back To Home
      </RouterLink>
</template>

<!-- 
Features to add:
Comment section users can log in with social medias []
Add side tabs to filter by category []
Possibly add emoji reactions to the articles [] check out: https://github.com/IvanSotelo/VueFeedbackReaction
Possible add emoji reactions to the daily verse [] check out: https://github.com/IvanSotelo/VueFeedbackReaction
Gospel playlist tab []
Possibly add youtube embedded playlists in Gospel playlist tab []
See about making potentially a christian radio for the website: https://www.icecast.org/download/ []
Search functionality for articles []
Sign up for email notifications every time a new article is made []
Page views for articles []
update the nav bar for mobile []
Find better solution for the daily bible verse []
make logo for website []
Change theme to avoid copyright infringement []
add article category to the article page []

Refactors:


Complete:
Create About page for authors [X]
add website created by [X]
Add 12 paragraphs in total [X]
Add up to 12 images in total [X]
fix header clipping on iphone [X]
Add brighter colors change text style up [X]
Make the text more colorful [X]
Fix weird styling for nav bar on smaller screens [X]
Get rid of light and dark mode vars and just use the dark mode scheme [X]
Find way to make the newest articles appear at the top [X]
put dist file back in gitignore [X]
Split articles into categories [X]
Categories: Study articles, biblical evidence, gospel playlist [X]
Daily Bible Verse from Bible Verse API [X]
Style articles to break text into different paragraphs according to schema [X]
Clean up date for articles [X]
MIT License [X]
style article page [X]
Figure out how to render the article previews on the homepage in a row format (side by side) [X]
-->

<script>
import axios from 'axios';
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
            let par7 = document.getElementById("par7")
            let par8 = document.getElementById("par8")
            let par9 = document.getElementById("par9")
            let par10 = document.getElementById("par10")
            let par11 = document.getElementById("par11")
            let par12 = document.getElementById("par12")
            image.src = currentArticle.imageUrl
            date.textContent = `${formattedDate.toGMTString()}`
            createdBy.textContent = `Created By: ${currentArticle.createdBy}`
            text.textContent = currentArticle.Body
            par2.textContent = currentArticle.paragraph2
            par3.textContent = currentArticle.paragraph3
            par4.textContent = currentArticle.paragraph4
            par5.textContent = currentArticle.paragraph5
            par6.textContent = currentArticle.paragraph6
            par7.textContent = currentArticle.paragraph7
            par8.textContent = currentArticle.paragraph8
            par9.textContent = currentArticle.paragraph9
            par10.textContent = currentArticle.paragraph10
            par11.textContent = currentArticle.paragraph11
            par12.textContent = currentArticle.paragraph12
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
            if (currentArticle.image5) {
              let image5 = document.getElementById("image-5")
              image5.src = currentArticle.image5Url
            }
            if (currentArticle.image6) {
              let image6 = document.getElementById("image-6")
              image6.src = currentArticle.image6Url
            }
            if (currentArticle.image7) {
              let image7 = document.getElementById("image-7")
              image7.src = currentArticle.image7Url
            }
            if (currentArticle.image8) {
              let image8 = document.getElementById("image-8")
              image8.src = currentArticle.image8Url
            }
            if (currentArticle.image9) {
              let image9 = document.getElementById("image-9")
              image9.src = currentArticle.image9Url
            }
            if (currentArticle.image10) {
              let image10 = document.getElementById("image-10")
              image10.src = currentArticle.image10Url
            }
            if (currentArticle.image11) {
              let image11 = document.getElementById("image-11")
              image11.src = currentArticle.image11Url
            }
            if (currentArticle.image12) {
              let image12 = document.getElementById("image-12")
              image12.src = currentArticle.image12Url
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

#created-by {
  
  color: white;
}

  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  
  #date {
    margin: 2em;
    color: white;
  }
  
  #text,
  #par2,
  #par3,
  #par4,
  #par5,
  #par6 {
    margin: 2em;
    color: white;
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
    font-size: 1.5em;
    transition: 0.3 ease all;
    margin-bottom: 2em;
  }

  #back-home {
    text-align: center;
    font-size: 1.5em;
    color: #d5b00c;
    transition: 0.3 ease all;
    margin-bottom: 2em;
  }

  #back-home:hover {
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
