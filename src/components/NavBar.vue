<template>
    <nav>
        <img src="#"/>                          <!-- Website logo -->
        <ul>                                    <!-- Initial navigation link -->
            <li><a href="#">HOME</a></li>
            <li><a href="#">HIGHSCORE</a></li>
        </ul>
        <h1>Welcome {{username}}!</h1>           <!-- Welcome header -->
        <ul>    
            <li><a href="#">Search Icon</a></li>
            <li><a href="#">Favourites</a></li>
            <li><a href="#">Notifications</a></li>
            <li><a href="#">Expand sidetab</a></li>
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
</style>