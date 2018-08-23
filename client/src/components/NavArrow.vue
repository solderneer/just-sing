<template>
    <font-awesome-icon icon="angle-double-left" size="lg" id="left-arrow" v-if="(direction == 'left')" 
    v-bind:class="{ active: disable }" class="icon" v-on:click="$emit('click-arrow')"/>
    <font-awesome-icon icon="angle-double-right" size="lg" id="right-arrow" v-else 
    v-bind:class="{ active: disable }" class="icon" v-on:click="$emit('click-arrow')"/>
</template>

<script>
    export default {
        name: "NavArrow",
        props: ['direction', 'disable']
    }
</script>

<style scoped>
.icon {
    font-size: 30px;
    -webkit-transition: font-size .55s ease;
    -moz-transition: font-size .55s ease;
    -ms-transition: font-size .55s ease;
    -o-transition: font-size .55s ease;
    transition: font-size .55s ease;
}

.icon:hover {
    font-size: 31px;
}

.active {
    color: #C1C1C1;
}
</style>