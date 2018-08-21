<template>
  <div id="app">
    <NavBar />
    <section class="main-body">
        <div class="reccomended-songs">
            <SongItem />
            <SongItem />
            <SongItem />
            <SongItem />
            <SongItem />
            <SongItem />
            <SongItem />
            <SongItem />
        </div>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import SongItem from '../components/SongItem.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    SongItem
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700');

    body {
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif;
    }

    h1 {
        margin: 10px;
        margin-left: 150px;
        padding: 0;
        font-weight: 400;
        font-size: 27px;
    }

    .main-body {
        padding: 10px;
    }

    .reccomended-songs {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
