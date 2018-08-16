<template>
  <div id="app">
    <NavBar username="S.Sudharshan"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }
</style>
