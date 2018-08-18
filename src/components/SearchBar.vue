<template>
    <div class="container-1">
        <span class="icon"><font-awesome-icon icon="search" size="lg" /></span>
        <input type="search" id="search" placeholder="Search for your song " />
    </div>
</template>

<script>
    export default {
        name: 'SearchBar'
    }
</script>

<style scoped>
    .container-1 {
        width: 300px;
        vertical-align: middle;
        white-space: nowrap;
        position: relative;
    }
    .container-1 input#search{
        width: 300px;
        height: 40px;
        background: #EEEEEE;
        border: none;
        font-size: 13pt;
        font-family: 'Raleway', sans-serif;
        float: left;
        color: #262626;
        padding-left: 50px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 10px;

        -webkit-transition: background .55s ease;
        -moz-transition: background .55s ease;
        -ms-transition: background .55s ease;
        -o-transition: background .55s ease;
        transition: background .55s ease;
    }
    .container-1 input#search::-webkit-input-placeholder {
       color: #65737e;
    }
     
    .container-1 input#search:-moz-placeholder { /* Firefox 18- */
       color: #65737e;  
    }
     
    .container-1 input#search::-moz-placeholder {  /* Firefox 19+ */
       color: #65737e;  
    }
     
    .container-1 input#search:-ms-input-placeholder {  
       color: #65737e;  
    }
    .container-1 .icon{
      position: absolute;
      top: 50%;
      margin-left: 17px;
      margin-top: 9px;
      z-index: 1;
      color: #4f5b66;
    }
    .container-1 input#search:hover, .container-1 input#search:focus, .container-1 input#search:active{
        outline:none;
        background: #F5F5F5;
      }
</style>