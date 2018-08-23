<template>
    <div id="app-view">
        <NavBar />
        <section class="main-body">
            <transition name="slide-fade">
                <SongGroup v-if="show" :seed="seed" :page="page"/>
            </transition>
        </section>
        <NavArrow direction="left" :disable="disableLeft" id="left-arrow" v-on:click-arrow="prevPage"/>
        <NavArrow direction="right" :disable="false" id="right-arrow" v-on:click-arrow="nextPage"/>
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
  },
  data: function () {
    return {
        show: true,
        seed: 'hello',
        page: 1,
        disableLeft: true,
        disableRight: false
    }
  },
  methods: {
    prevPage () {
        // Don't execute if there is a disabled button
        if (this.disableLeft == true)
            return

        this.show = !this.show
        setTimeout(() => {
            this.page -= 1
            if (this.page == 1)
                this.disableLeft = true
            this.show = !this.show
        }, 1000)
    },
    nextPage () {
        // Don't execute if there is a disabled button
        if (this.disableRight == true)
            return

        this.show = !this.show
        setTimeout(() => {
            this.page += 1
            if (this.page == 2)
                this.disableLeft = false
            this.show = !this.show
        }, 1000)
    }
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

    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
      transform: translateX(10px);
      opacity: 0;
    }
</style>
