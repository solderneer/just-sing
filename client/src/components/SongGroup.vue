<template>
     <div class="reccomended-songs">
        <SongItem :seed="seed" :page="page" index="1"/>
        <SongItem :seed="seed" :page="page" index="2"/>
        <SongItem :seed="seed" :page="page" index="3"/>
        <SongItem :seed="seed" :page="page" index="4"/>
        <SongItem :seed="seed" :page="page" index="5"/>
        <SongItem :seed="seed" :page="page" index="6"/>
        <SongItem :seed="seed" :page="page" index="7"/>
        <SongItem :seed="seed" :page="page" index="8"/>
    </div>
</template>

<script>
    import SongItem from './SongItem.vue'

    export default {
        name: 'SongGroup',
        props: ['seed', 'page'],
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