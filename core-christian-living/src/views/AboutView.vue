<template>
  <RouterLink to="About">
  <div class="nav-flex">
    <h1 class="Abo-nav">About</h1>
  </div>
  </RouterLink>
</template>


<style>
.Abo-nav {
  text-align: center;
  color: white;
  border: 1px solid black;
  width: 5em;
  background-color: rgb(35, 34, 34);
  transition: 0.3 ease all;
}

.Abo-nav:hover {
  filter: brightness(50%);
  cursor: pointer;
}

.nav-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
