<template>
    <font-awesome-icon v-bind:class="{ active: !isActive }" icon="star" size="md" />
</template>

<script>
    export default {
        name: 'RankStar',
        props: ['isActive']
    }
</script>

<style>
    .active {
        color: #C1C1C1;
    }
</style>