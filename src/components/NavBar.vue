<template>
    <nav class="container">
        <ul class="navbar" role="navigation">      
            <li class="logo"><img alt="Just Sing! logo" src="../assets/logo.png"></li>
            <li class="nav-link">HOME</li>
            <li class="nav-link">HIGHSCORE</li>
            <li class="header">Welcome {{username}}!</li>
            <li><font-awesome-icon icon="search" size="lg" /></li>
            <li><font-awesome-icon icon="heart" size="lg" /></li>
            <li><font-awesome-icon icon="bell" size="lg" /></li>
            <li><font-awesome-icon icon="ellipsis-v" size="lg" /></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar',
        props: ['username']
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

    .navbar {
        display: flex;
        align-items: center;
    }
    .nav-link {
        margin-left: 10px;
    }
    .header {
        font-size: 17px;
        margin-left: 250px; /* TODO: FIX THIS*/
        margin-right: auto;
    }
</style>