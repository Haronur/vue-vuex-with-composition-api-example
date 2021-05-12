<template>
<h1>Vuex with Vue 3 Composition API | Vue.js state management</h1>
  <strong>Vuex Store</strong>
  <Notes />
  <AddNewNote />
</template>

<script>
    import Notes from "./components/Notes";
    import AddNewNote from "./components/AddNewNote";

export default {
  name: 'App',
  components: {
      Notes,
      AddNewNote,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
  list-style: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
}
li{
  display: flex;
  margin-bottom: 10px;
}
</style>
