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
    <button  id="prayer-button" v-on:click="sortByTopicAPICall('Prayer')">Prayers</button>
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
    <a id="back-home" href="#top" class="home-back" to="/"> Back To The Top </a>
    <div class="credit-div"><p class="credit-text">Website Created By Paul Racisz © 2023</p></div>
  </div>
</template>

<script>
  import { RouterLink } from 'vue-router'
  import Dailyverse from '../components/Dailyverse.vue'
  import AboutView from './AboutView.vue'
  import Navi from '../components/Navi.vue'
  import DateIco from '../resources/Capture.PNG'

export default {
  data() {
    return {
      result: null // Initialize result to null
    }
  },
  mounted() {
    let PROJECT_ID = 'xinvfi3s'
    let DATASET = 'production'
    let QUERY = encodeURIComponent('*[_type == "article"]')
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`
    let h1 = document.getElementById("not-found")
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        if (result.length === 0) {
           // Handle the case when no articles are found
        this.result = null; // Clear the result
        h1.textContent = "No Results Found"
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
    
    convertMonth(utcString) {
      const date = new Date(utcString)
      const monthWord = date.toLocaleString('en-US', { month: 'long' })
      return monthWord
    },
    changeHandler(e) {
  e.preventDefault();
  let input = e.target.value; // Get the value from the input box
  let PROJECT_ID = 'xinvfi3s';
  let DATASET = 'production';
  let QUERY = encodeURIComponent(`*[_type == "article" && (title match "${input}" || createdBy match "${input}" || Category match "${input}")]`); // Update the query to include search conditions
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  let h1 = document.getElementById("not-found");
  
  if (input) {
    fetch(URL)
      .then((res) => res.json())
      .then(({ result }) => {
        if (result.length === 0) {
          this.result = null; // Clear the result
          h1.textContent = "No Results Found";
        } else {
          this.result = result.map((article) => {
            const imageUrl = article.imageUrl;
            h1.textContent = " ";
            return {
              ...article,
              imageUrl
            };
          });
        }
      })
      .catch((err) => console.error(err));
  } else {
    this.normalAPICall();
    h1.textContent = " ";
  }
},
  
  normalAPICall() {
  const prayerButton = document.getElementById("prayer-button")
  const studyButton = document.getElementById("study-button")
  const evidenceButton = document.getElementById("evidence-button")
  const allButton = document.getElementById("all-button")
    allButton.classList.add("selected-button")
    studyButton.classList.remove("selected-button")
    prayerButton.classList.remove("selected-button")
    evidenceButton.classList.remove("selected-button")
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
  const prayerButton = document.getElementById("prayer-button")
  const studyButton = document.getElementById("study-button")
  const evidenceButton = document.getElementById("evidence-button")
  const allButton = document.getElementById("all-button")
  let h1 = document.getElementById("not-found")
  h1.textContent = " "
    switch (topic) {
      case "Prayer":
        prayerButton.classList.add("selected-button")
        allButton.classList.remove("selected-button")
        studyButton.classList.remove("selected-button")
        evidenceButton.classList.remove("selected-button")
        break;
      case "Study":
        studyButton.classList.add("selected-button")
        allButton.classList.remove("selected-button")
        prayerButton.classList.remove("selected-button")
        evidenceButton.classList.remove("selected-button")
        break;
      case "Evidence":
        evidenceButton.classList.add("selected-button")
        allButton.classList.remove("selected-button")
        prayerButton.classList.remove("selected-button")
        studyButton.classList.remove("selected-button")
        break;
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
  background-color: #FFD60A !important;
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
