<template>
  <div id="giant-div">
    <div id="title-box">
      <h1 class="title">Core Christian Living Blog</h1>
      <Navi></Navi>
    </div>
    <div id="search">
      <input id="Search-Bar" v-on:change="changeHandler" placeholder="Search" />
    </div>
    <div id="topics-box">
      <div id="topics-flex">
        <h1 class="">Topics</h1>
        <div id="buttons-flex">
          <button id="all-button" class="selected-button" v-on:click="normalAPICall()">All</button>
          <button id="prayer-button" v-on:click="sortByTopicAPICall('Prayer')">Prayers</button>
          <button id="study-button" v-on:click="sortByTopicAPICall('Study')">Bible Studies</button>
          <button id="evidence-button" v-on:click="sortByTopicAPICall('Evidence')">Evidence</button>
        </div>
      </div>
    </div>
    <h1 id="not-found"></h1>

    <div class="article-flex">
      <div class="article-box" v-for="article in result" :key="article._id">
        <RouterLink :to="`/article/${article._id}`">
          <div class="big-box">
            <img :src="article.imageUrl" :alt="article.title" class="article-image" />
            <h1 class="article-title">{{ article.title }}</h1>

            <p class="article-p">By: {{ article.createdBy }}</p>
            <div class="app">
              <vue-feedback-reaction v-model="feedback" />
            </div>
          </div>
        </RouterLink>
        <div class="article-footer">
          <div class="article-cati">
            <p class="cati-text">{{ article.Category }}</p>
          </div>
          <div class="article-created-at">
            <p class="footer-text">
              📅 {{ convertMonth(article._createdAt) }} {{ new Date(article._createdAt).getDate() }}
            </p>
          </div>
          <div class="article-time-to-read">
            <p class="footer-text">🕒 {{ article.timeToRead }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="dailyVerseContainer">
      <h2 id="verse-header">Verse of the Day</h2>
      <div id="translation-selector">
      <p id="NKJV" v-on:click="loadAndWriteToDiv('NKJV')">(NKJV)</p>
      <p id="NLT" v-on:click="loadAndWriteToDiv('NLT')">(NLT)</p>
      <p id="KJV" v-on:click="loadAndWriteToDiv('KJV')">(KJV)</p>
      </div>
      <div id="dailyVersesWrapper"> {{ verseText }} <!-- Display the verse text --></div>
    </div>
    <a id="back-home" href="#top" class="home-back" to="/"> Back To The Top </a>
    <div class="credit-div"><p class="credit-text">Website Created By Paul Racisz © 2023</p></div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Dailyverse from '../components/Dailyverse.vue'
import Navi from '../components/Navi.vue'
import { loadScript } from 'vue-plugin-load-script'

export default {
  data() {
    return {
      result: null, // Initialize result to null
      verseTranslation: 'NKJV', // Default translation
      verseText: '' // Store the verse text
    }
  },
  created() {
    this.loadAndWriteToDiv();
  },
  mounted() {
    let PROJECT_ID = 'xinvfi3s'
    let DATASET = 'production'
    let QUERY = encodeURIComponent('*[_type == "article"]')
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`
    let h1 = document.getElementById('not-found')
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        if (result.length === 0) {
          // Handle the case when no articles are found
          this.result = null // Clear the result
          h1.textContent = 'No Results Found'
        } else {
          this.result = result.map((article) => {
            const imageUrl = article.imageUrl
            return {
              ...article,
              imageUrl
            }
          })
        }
      })
      .catch((err) => console.error(err))
  },
  methods: {
    getVerseTextFromVADScript() {
      // Create a temporary hidden element to capture the VAD script output
      const tempElement = document.createElement("div");
      tempElement.style.display = "none";
      document.body.appendChild(tempElement);

      // Load the VAD script and let it write to the hidden element
      const script = document.createElement("script");
      script.src = `https://dailyverses.net/get/verse.js?language=${this.verseTranslation}`;
      tempElement.appendChild(script);

      // Extract the content from the hidden element
      const verseText = tempElement.innerText;

      // Remove the temporary element from the DOM
      document.body.removeChild(tempElement);

      return verseText;
    },
    loadAndWriteToDiv(translation) {
      if (!translation) {
        translation = this.verseTranslation;
      }
      let pTag = document.getElementById(`${translation}`)
      let NKJV = document.getElementById("NKJV")
      let NLT = document.getElementById("NLT")
      let KJV = document.getElementById("KJV")
      if (pTag) {
        switch (pTag.id) {
          case 'NKJV':
          KJV.style.color = "white"
          NLT.style.color = "white"
          pTag.style.color = "#FFD60A"
          case "NLT":
          KJV.style.color = "white"
          NKJV.style.color = "white"
          pTag.style.color = "#FFD60A"
          case "KJV":
          NLT.style.color = "white"
          NKJV.style.color = "white"
          pTag.style.color = "#FFD60A"
        default:
        }
      }
      
      const scriptUrl = `https://dailyverses.net/get/verse.js?language=${translation}`
      
      loadScript(scriptUrl)
        .then(() => {
          // Update the data with the new verse text and translation
          this.verseTranslation = translation
          // VAD script loaded
          const verseTextFromScript = this.getVerseTextFromVADScript()
          this.verseText = verseTextFromScript
        })
        .catch(() => {
          // Failed to fetch script
          console.error('Failed to load the script.')
        })
    },

    convertMonth(utcString) {
      const date = new Date(utcString)
      const monthWord = date.toLocaleString('en-US', { month: 'long' })
      return monthWord
    },
    changeHandler(e) {
      e.preventDefault()
      let input = e.target.value // Get the value from the input box
      let PROJECT_ID = 'xinvfi3s'
      let DATASET = 'production'
      let QUERY = encodeURIComponent(
        `*[_type == "article" && (title match "${input}" || createdBy match "${input}" || Category match "${input}")]`
      ) // Update the query to include search conditions
      let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`
      let h1 = document.getElementById('not-found')

      if (input) {
        fetch(URL)
          .then((res) => res.json())
          .then(({ result }) => {
            if (result.length === 0) {
              this.result = null // Clear the result
              h1.textContent = 'No Results Found'
            } else {
              this.result = result.map((article) => {
                const imageUrl = article.imageUrl
                h1.textContent = ' '
                return {
                  ...article,
                  imageUrl
                }
              })
            }
          })
          .catch((err) => console.error(err))
      } else {
        this.normalAPICall()
        h1.textContent = ' '
      }
    },

    normalAPICall() {
      const prayerButton = document.getElementById('prayer-button')
      const studyButton = document.getElementById('study-button')
      const evidenceButton = document.getElementById('evidence-button')
      const allButton = document.getElementById('all-button')
      allButton.classList.add('selected-button')
      studyButton.classList.remove('selected-button')
      prayerButton.classList.remove('selected-button')
      evidenceButton.classList.remove('selected-button')
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

    sortByTopicAPICall(topic) {
      const prayerButton = document.getElementById('prayer-button')
      const studyButton = document.getElementById('study-button')
      const evidenceButton = document.getElementById('evidence-button')
      const allButton = document.getElementById('all-button')
      let h1 = document.getElementById('not-found')
      h1.textContent = ' '
      switch (topic) {
        case 'Prayer':
          prayerButton.classList.add('selected-button')
          allButton.classList.remove('selected-button')
          studyButton.classList.remove('selected-button')
          evidenceButton.classList.remove('selected-button')
          break
        case 'Study':
          studyButton.classList.add('selected-button')
          allButton.classList.remove('selected-button')
          prayerButton.classList.remove('selected-button')
          evidenceButton.classList.remove('selected-button')
          break
        case 'Evidence':
          evidenceButton.classList.add('selected-button')
          allButton.classList.remove('selected-button')
          prayerButton.classList.remove('selected-button')
          studyButton.classList.remove('selected-button')
          break
      }
      let PROJECT_ID = 'xinvfi3s'
      let DATASET = 'production'
      let QUERY = `*[Category == "${topic}"]`
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
    }
  },
  components: {
    RouterLink,
    Navi,
    Dailyverse
  }
}
</script>

<style>
#not-found {
  line-height: 20;
}

#NKJV {
  color: #FFD60A;
}

#NKJV,
#NLT,
#KJV:hover {
  cursor: pointer;
    user-select: none;
}

#translation-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
}

.dailyVerses > a {
  color: #ffd60a;
  text-align: center;
  font-size: 1.5em;
  color: #ffd60a;
  transition: 0.3 ease all;
  margin-bottom: 2em;
}

.dailyVerses > a:hover {
  text-decoration: underline;
}

#dailyVersesWrapper {
  color: white;
  font-size: 18px;
  text-align: center;
  padding: 20px;
  margin: 10px;
  background-color: #001d3d;
  margin-top: 0;
  border: 0px solid;
  border-radius: 10px;
  width: 15em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#verse-header {
  margin: 0;
}

#dailyVerseContainer {
  color: white;
  text-align: center;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

#back-home {
  margin-bottom: 3.5em !important;
}

#giant-div {
  width: 100vw;
  height: 100vh;
}

#topics-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  margin: 20px;
}

.nav-text {
  color: white;
}

button {
  border-radius: 500px;
  padding: 10px;
  margin: 5px;
  border: none;
  color: white;
  text-align: center;
  transition: 0.2 all ease;
  background-color: #33415c;
}

button:hover {
  filter: brightness(50%);
}

.selected-button {
  background-color: #ffd60a !important;
  color: black;
}

button:hover {
  cursor: pointer;
}

#buttons-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
