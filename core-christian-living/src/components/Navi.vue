<template>
  <div class="rout-box">
    <RouterLink class="nav-link route homenavtag" to="/"> Home </RouterLink>
    <RouterLink class="nav-link route aboutnavtag" to="/About"> About </RouterLink>
    <RouterLink class="nav-link route gospelnavtag" to="/gospel-playlists"> Gospel Playlists </RouterLink>
    <RouterLink class="nav-link route biblenavtag" to="/bible-evidence"> Bible Evidence </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {}
</script>

<style>
/* classes */
.rout-box {
  text-align: center;
  color: white;
  margin: 10px;
}

.nav-link {
  text-align: center;
  padding: 10px;
  margin: 10px;
  margin-right: 0;
  margin-left: 0;
  color: whitesmoke;
}

.nav-link:hover {
  color: #ffd60a;
}
</style>
