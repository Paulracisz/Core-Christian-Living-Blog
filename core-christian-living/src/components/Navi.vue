<template>
  <div class="rout-box">
    <RouterLink class="nav-link" id="route" to="/About">
      About
    </RouterLink>
    <RouterLink class="nav-link" id="route" to="/prayer-articles">
      Prayers
    </RouterLink>    
    <RouterLink class="nav-link" id="route" to="/study-articles">
      Bible Studies
    </RouterLink>    
    <RouterLink class="nav-link" id="route" to="/evidence-articles">
      Biblical Evidence
    </RouterLink>
    <RouterLink class="nav-link" id="route" to="/gospel-playlists">
      Gospel Playlists
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {}
</script>

<style>
.rout-box {
  text-align: center;
  margin: 10px;
}

.nav-link {
  text-align: center;
  padding: 10px;
  margin: 10px;
  margin-right: 0;
  margin-left: 0;
  color: whitesmoke;
  background-color: rgb(36, 36, 36);
  border: 2px solid black;
}
</style>
