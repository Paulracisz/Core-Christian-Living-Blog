<template>
    <div id="topics-flex">
    <h1 class="">Topics</h1>
    <div id="buttons-flex">
    <button>All</button>
    <button>Prayers</button>
    <button>Bible Studies</button>
    <button>Biblical Evidence</button>
    </div>
    </div>
</template>

<style>

#topics-flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;    
    margin: 20px;
}


button {
  border: 1px solid black;
  border-radius: 500px;
  padding: 10px;
  margin: 5px;
  color: black;
  text-align: center;
  background-color: #283c49;
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
