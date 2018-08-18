<template>
    <nav class="container">
        <ul class="navbar" role="navigation">      
            <li class="logo"><img alt="Just Sing! logo" src="../assets/logo.png"></li>
            <li class="nav-link">HOME</li>
            <li class="nav-link">HIGHSCORE</li>
            <li class="nav-link">HOW TO PLAY</li>
            <li class="search-bar"><SearchBar /></li>
        </ul>
    </nav>
</template>

<script>
    import SearchBar from './SearchBar.vue'

    export default {
        name: 'NavBar',
        components: {
            SearchBar
        }
    }    
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700');

    ul {
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        display: flex;
        align-items: center;
    }
    img {
        width: 120px;
    }
    li {
        padding: 13px 10px;
    }
    nav {
        padding: 0px 20px;
        -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);
    }
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .nav-link {
        margin-left: 10px;
    }
    .nav-link:hover {
        color: #FF7373;
        cursor: pointer;
    }
    .search-bar {
        margin-left: auto;
    }
</style>