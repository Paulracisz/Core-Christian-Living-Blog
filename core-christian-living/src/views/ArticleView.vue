<template>
  <div id="title-box">
    <h1 class="title">Core Christian Living Blog</h1>
    <div class="rout-box">
      <RouterLink class="nav-link route" to="/"> Home </RouterLink>
      <RouterLink class="nav-link route" to="/About"> About </RouterLink>
      <RouterLink class="nav-link route gospelnavtag" to="/gospel-playlists">
        Gospel Playlists
      </RouterLink>
      <RouterLink class="nav-link route biblenavtag" to="/bible-evidence">
        Bible Evidence
      </RouterLink>
    </div>
  </div>
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
    <br />
    <p id="par2"></p>
    <img id="image-3" />
    <br />
    <p id="par3"></p>
    <br />
    <p id="par4"></p>
    <img id="image-4" />
    <br />
    <p id="par5"></p>
    <img id="image-5" />
    <br />
    <p id="par6"></p>
    <img id="image-6" />
    <br />
    <p id="par7"></p>
    <img id="image-7" />
    <br />
    <p id="par8"></p>
    <img id="image-8" />
    <br />
    <p id="par9"></p>
    <img id="image-9" />
    <br />
    <p id="par10"></p>
    <img id="image-10" />
    <br />
    <p id="par11"></p>
    <img id="image-11" />
    <br />
    <p id="par12"></p>
    <img id="image-12" />
    <br />
  </div>
  <div id="disqus_thread"></div>
  <RouterLink id="back-home" to="/"> Back To Home </RouterLink>
</template>

<!-- 
Features to add:
Possible add emoji reactions to the daily verse [] check out: https://github.com/IvanSotelo/VueFeedbackReaction
Gospel playlist tab []
Possibly add youtube embedded playlists in Gospel playlist tab []
See about making potentially a christian radio for the website: https://www.icecast.org/download/ []
Sign up for email notifications every time a new article is made []
Sort BibleEvidence text, create section tags for easy navigation []
Purchase google domain for site []
Add analytics for website vists and page views (Will set this up with google analytics once I have google domain) []

Refactors: [X]

Scrapped Features:
Add search bar in Bible Evidence page [Scrapped] (They can just use Ctrl+ F)

Complete:
refactor all dry code [X]
add comments explaining the code [X]
format all files [X]
sort imports [X]
remove all unused imports [X]
remove unused files [X]
Find better solution for the daily bible verse [X]
Make logo for website [X]
Comment section users can log in with social medias [X]
Possibly add emoji reactions to the articles [X] check out: https://github.com/IvanSotelo/VueFeedbackReaction
Make the search bar work on every page [X]
instead of using identicial pages, just use one component and render it dynamically based on filter tabs [X]
Make one function to call the sanity api, and use a param to specify what the query is [X]
Search functionality for articles [X]
update the nav bar for mobile [X]
Change theme to avoid copyright infringement [X]
add article category to the article page [X]
Add side tabs to filter by category [X]
Page views for articles [X]
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
export default {
  name: 'ArticlePage',
  data() {
    return {
      article: {}
    }
  },

  created() {
    // LOAD DIQUS COMMENTS
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    ;(function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement('script')
      s.src = 'https://corechristianlivingblog.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date())
      ;(d.head || d.body).appendChild(s)
    })()
    // construct API Url
    let currentArticle = {}
    let PROJECT_ID = 'xinvfi3s'
    let DATASET = 'production'
    let QUERY = encodeURIComponent('*[_type == "article"]')
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`
    const articleId = this.$route.params.id
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        result.map((article) => {
          if (article._id === articleId) {
            currentArticle = article
            let h1 = document.getElementById('article-header')
            let text = document.getElementById('text')
            let date = document.getElementById('date')
            let createdBy = document.getElementById('created-by')
            let formattedDate = new Date(currentArticle._createdAt)
            let image = document.getElementById('article-thumb')
            text.textContent = currentArticle.Body
            date.textContent = `${formattedDate.toGMTString()}`
            image.src = currentArticle.imageUrl
            createdBy.textContent = `Created By: ${currentArticle.createdBy}`
            h1.textContent = currentArticle.title
            // populate each paragraph with text
            for (let i = 2; i < 12; i++) {
              document.getElementById(`par${i}`).textContent = currentArticle[`paragraph${i}`]
            }
            // populate each image
            for (let j = 2; j < 12; j++) {
              if (currentArticle[`image${j}Url`])
                document.getElementById(`image-${j}`).src = currentArticle[`image${j}Url`]
            }
          }
        })
      })
      .catch((err) => console.error(err))
  }
}
</script>

<style>
/* tags */
img {
  width: 30em;
}

p {
  line-height: 150%;
}

/* classes */
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.route {
  text-align: center;
  font-size: 1.5em;
  transition: 0.3 ease all;
  margin-bottom: 2em;
}

/* IDs */
#created-by {
  color: white;
}

#date {
  margin: 2em;
  color: white;
}

#disqus_thread {
  width: 100%;
}

#text,
#par2,
#par3,
#par4,
#par5,
#par6,
#par7 {
  margin: 1em;
  color: white;
  font-size: 17px;
  line-height: 26px;
  border-radius: 10px;
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

#back-home {
  text-align: center;
  font-size: 1.5em;
  color: #ffd60a;
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
