<template>
  <div class="rout-box">
    <RouterLink class="nav-link" id="route" to="/">
      Home
    </RouterLink>
    <RouterLink class="nav-link" id="route" to="/About">
      About
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
}

</style>
