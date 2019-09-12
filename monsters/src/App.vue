<template>
    <div id="app">
        <div>
            <Monsters/>
        </div>
        <Braves/>
    </div>
</template>

<script>
    import Monsters from './components/Monsters'
    import Braves from './components/Braves'

    export default {
        name: 'app',
        components: {
            Monsters,
            Braves
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
