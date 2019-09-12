<template>
  <div id="app">
    <Monsters/>
    <Braves/>
  </div>
</template>

<script>
import Monsters from './components/Monsters'
import Braves  from './components/Braves'

export default {
  name: 'app',
  components: {
    Monsters,
    Braves
  }
}

</script>

<style>
</style>
