<template>
        <div>
      <h1 class="title">Core Christian Living Blog</h1>
      <Navi></Navi>
    </div>
    <div class="hero-img1">
      <h1 class="hero-text">Core Christian Living Blog is a place where we share the gospel of Christ</h1>
    </div>
      <h2>We talk about core topics and issues of the bible.</h2>
      <img />
      <h2>We grow and we learn together</h2>
      <img />
      <h2>We help families learn how to live for Christ, as we walk with him together</h2>
      <RouterLink id="back-home" to="/">
        Back To Home
      </RouterLink>
  </template>
  
  <script>
import Navi from '../components/Navi.vue'
export default {
  components: {
    Navi
  }
}
</script>
  
  <style>
  
  .hero-text {
    color: white;
    font-size: 3em;
    font-weight: bold;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  }
  
  .hero-img1 {
    width: 100vw;
    height: 100vh;
    padding: 15px;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../resources/gospel.jpg");
  }
  </style>
  