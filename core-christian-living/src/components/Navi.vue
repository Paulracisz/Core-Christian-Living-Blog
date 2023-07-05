<template>
  <div class="rout-box">
    <RouterLink class="nav-link route" to="/">
      Home
    </RouterLink>
    <RouterLink class="nav-link route" to="/About">
      About
    </RouterLink>
    <RouterLink class="nav-link route" to="/gospel-playlists">
      Gospel Playlists
    </RouterLink>
    <RouterLink class="nav-link route" to="/bible-evidence">
      Bible Evidence
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

.nav-link:hover {
  color: #FFD60A;
}

</style>
