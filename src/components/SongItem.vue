<template>
    <article class="song-card">
        <img alt="Probably should bind this" src="../assets/cover.png" />
        <div class="song-info">
            <h1>{{song_title}}</h1>
            <h2>{{song_artist}}</h2>
            <ul>
                <li><font-awesome-icon icon="star" size="md" /></li>
                <li><font-awesome-icon icon="star" size="md" /></li>
                <li><font-awesome-icon icon="star" size="md" /></li>
                <li><font-awesome-icon icon="star" size="md" /></li>
                <li><font-awesome-icon icon="star" size="md" /></li>
            </ul>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'SongItem',
        props: ['song_title', 'song_artist', 'rank']
    }    
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700');

    .song-card {
        font-family: 'Raleway', sans-serif;
        width: 250px;
        padding: 0px;
        margin: 10px;
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
        font-weight: 400;
        font-size: 12px;
    }
    ul {
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        display: flex;
    }
    img {
        width: 250px;
    }
    .song-info {
        padding: 20px;
    }
</style>