<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <span v-bind:title="msg">
            You hover cursor on several second for show title
        </span>
        <div>
            <my-component></my-component>
        </div>
    </div>
</template>

<script lang="ts">

    import MyComponent from './components/Test'

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App!'
            }
        },
        components: {
            MyComponent
        }
    }
</script>

<style lang="css">
    #app {
        color: #56b983;
    }
</style>
