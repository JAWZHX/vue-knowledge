<template>
    <div id="app">
        <p @click="testClick()">我是{{name}}</p>
        <img src="~assets/images/logo.png" alt="logo">
        <div id="bgimg"></div>
    </div>
</template>
<script>
export default {
    name: 'app',
    data () {
        return {
            name: 'app.vue'
        }
    },
    methods: {
        testClick () {
            alert('clicked');
        }
    }
}
</script>
<style lang="scss" scoped>
#app {
    text-align: center;
    color: orangered;
    #bgimg {
        width: 300px;
        height: 300px;
        background-image: url('~assets/images/panda_16px.png');       
    }
}
</style>
