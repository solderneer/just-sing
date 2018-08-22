<template>
  <div id="app-view">
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
    <font-awesome-icon icon="angle-double-left" size="lg" id="left-arrow"/>
    <font-awesome-icon icon="angle-double-right" size="lg" id="right-arrow" />
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

    #left-arrow {
        position: absolute;
        top: 50vh;
        left: 2vw;
        font-size: 30px;

        -webkit-transition: font-size .55s ease;
        -moz-transition: font-size .55s ease;
        -ms-transition: font-size .55s ease;
        -o-transition: font-size .55s ease;
        transition: font-size .55s ease;
    }
    #left-arrow:hover {
        font-size: 31px;
        left: 2vw;
    }

    #right-arrow {
        position: absolute;
        top: 50vh;
        right: 2vw;
        font-size: 30px;

         -webkit-transition: font-size .55s ease;
        -moz-transition: font-size .55s ease;
        -ms-transition: font-size .55s ease;
        -o-transition: font-size .55s ease;
        transition: font-size .55s ease;
    }
    #right-arrow:hover {
        font-size: 31px;
        right: 2vw;
    }

</style>
