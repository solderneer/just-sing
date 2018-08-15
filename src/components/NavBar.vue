<template>
    <nav>
        <ul class="navbar" role="navigation">      
            <li><img src="#"/></li>
            <li><a href="#">HOME</a></li>
            <li><a href="#">HIGHSCORE</a></li>
            <li class="center"><h1>Welcome {{username}}!</h1></li>
            <li><font-awesome-icon icon="search" size="lg" /></li>
            <li><font-awesome-icon icon="heart" size="lg" /></li>
            <li><font-awesome-icon icon="bell" size="lg" /></li>
            <li><font-awesome-icon icon="search" size="lg" /></li>
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
    ul {
        list-style-type: none;
        padding: 0px;
        margin: 0px;
    }

    li {
        padding: 10px;
    }

    h1 {
        margin: 0px;
    }
    .navbar {
        display: flex;
    }
    .center {
        margin-left: auto;
        margin-right: auto;
    }
</style>