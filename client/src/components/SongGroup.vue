<template>
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
</template>

<script>
    import SongItem from './SongItem.vue'

    export default {
        name: 'SongGroup',
        components: {
            SongItem
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700');
    
     .reccomended-songs {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>