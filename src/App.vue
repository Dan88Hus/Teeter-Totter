<template>
  <div id="app">
    <Teter />
  </div>
</template>

<script>
import Teter from './components/Teeter'

export default {
  name: 'App',
  components: {
    Teter
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
</style>
