<template>
  <div id="app">
    <NavBar username="S.Sudharshan"/>
    <SongItem song_title="Red" song_artist="Taylor Swift" song_ranking="1" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SongItem from './components/SongItem'

export default {
  name: 'app',
  components: {
    NavBar,
    SongItem
  }
}
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }
</style>
