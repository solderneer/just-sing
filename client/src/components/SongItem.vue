<template>
    <article class="song-card">
        <img alt="Cover Image" v-bind:src="songImage" />
        <div class="song-info">
            <h1>{{songTitle}}</h1>
            <h2>{{songArtist}}</h2>
            <ul>
                <li><RankStar v-bind:isActive="star1" /></li>
                <li><RankStar v-bind:isActive="star2" /></li>
                <li><RankStar v-bind:isActive="star3" /></li>
                <li><RankStar v-bind:isActive="star4" /></li>
                <li><RankStar v-bind:isActive="star5" /></li>
            </ul>
        </div>
    </article>
</template>

<script>
    import RankStar from './RankStar.vue'
    import SongService from '../services/SongService'

    export default {
        name: 'SongItem',
        props: ['id', 'page', 'index'],
        data: function () {
            return {
                songTitle: '',
                songArtist: '',
                songRank: null,
                songImage: ''
            }
        },
        components: {
            RankStar
        },
        computed: {
            star1: function () { return (this.songRank >= 1) ? true : false },
            star2: function () { return (this.songRank >= 2) ? true : false },
            star3: function () { return (this.songRank >= 3) ? true : false },
            star4: function () { return (this.songRank >= 4) ? true : false },
            star5: function () { return (this.songRank >= 5) ? true : false }
        },
        mounted: async function () {
            let res = await SongService.getSong(this.id, this.page, this.index)

            this.songTitle = res.data.name
            this.songArtist = res.data.artist
            this.songRank = res.data.rating
            this.songImage = 'http://localhost:8081/assets/album' + res.data.album // TODO: change hardcoded address*/
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

        -webkit-transition: box-shadow .55s ease;
        -moz-transition: box-shadow .55s ease;
        -ms-transition: box-shadow .55s ease;
        -o-transition: box-shadow .55s ease;
        transition: box-shadow .55s ease;
    }
    .song-card:hover {
        -webkit-box-shadow: 0px 4px 12px 0px rgba(0,0,0,0.50);
        -moz-box-shadow: 0px 4px 12px 0px rgba(0,0,0,0.50);
        box-shadow: 0px 4px 12px 0px rgba(0,0,0,0.50);
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