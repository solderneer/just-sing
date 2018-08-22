<template>
    <div id="app-view">
        <NavBar />
        <section class="main-body">
            <SongGroup />
        </section>
        <NavArrow direction="left" :disable="true" id="left-arrow"/>
        <NavArrow direction="right" :disable="false" id="right-arrow"/>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import SongGroup from '../components/SongGroup.vue'
import NavArrow from '../components/NavArrow.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    SongGroup,
    NavArrow
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

    #left-arrow {
        position: absolute;
        top: 50vh;
        left: 2vw;
    }

    #right-arrow {
        position: absolute;
        top: 50vh;
        right: 2vw;
    }

</style>
