<template>
    <div id="topics-flex">
    <h1 class="">Topics</h1>
    <div id="buttons-flex">
    <button id="selected-button"><RouterLink id="nav-text" to="/">All</RouterLink></button>
    <button><RouterLink id="nav-text" to="/prayer-articles">Prayers</RouterLink></button>
    <button id="studies"><RouterLink id="nav-text" to="/study-articles">Bible Studies</RouterLink></button>
    <button><RouterLink id="nav-text" to="/evidence-articles">Evidence</RouterLink></button>
    </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>

<style>

#topics-flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;    
    margin: 20px;
}

#nav-text {
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
  background-color: #283c49;
}

button:hover {
  filter: brightness(50%);
}

#selected-button {
  background-color: #5cc6c7;
}

button:hover {
  cursor: pointer;
}
#studies {
  background-color: #e1718b;
}

#buttons-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;   
}

</style>
