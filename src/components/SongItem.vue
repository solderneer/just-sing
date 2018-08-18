<template>
    <article class="song-card">
        <img alt="Probably should bind this" src="../assets/cover.png" />
        <div class="song-info">
            <h1>{{songTitle}}</h1>
            <h2>{{songArtist}}</h2>
            <ul>
                <li><RankStar v-bind:isActive="true" /></li>
                <li><RankStar v-bind:isActive="false" /></li>
                <li><RankStar v-bind:isActive="false" /></li>
                <li><RankStar v-bind:isActive="false" /></li>
                <li><RankStar v-bind:isActive="false" /></li>
            </ul>
        </div>
    </article>
</template>

<script>
    import RankStar from './RankStar.vue'

    export default {
        name: 'SongItem',
        props: ['songTitle', 'songArtist', 'rank'],
        components: {
            RankStar
        }
    }    
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700');

    .song-card {
        font-family: 'Raleway', sans-serif;
        width: 250px;
        padding: 0px;
        margin: 20px;
        -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    }
    h1 {
        padding: 0px;
        margin: 0px;
        font-weight: 700;
        font-size: 17px;
    }
    h2 {
        padding: 0px;
        margin: 0px;
        margin-top: 2px;
        font-weight: 400;
        font-size: 12px;
    }
    ul {
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        display: flex;
        justify-content: flex-end;
    }
    img {
        width: 250px;
    }
    .song-info {
        padding: 10px;
    }
</style>