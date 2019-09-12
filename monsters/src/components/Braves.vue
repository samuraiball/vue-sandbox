<template>
    <div>
        <div v-for="(brave, index) in braveList.braves" v-bind:key="brave.id">
            {{brave.name}}
        </div>

        <div v-for="(monster, index) in monsterList.monsters">
            <button v-on:click="doAttack(index)">{{monster.name}}を攻撃</button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Monsters from "./Monsters";

    export default {
        name: "Braves",
        components: {Monsters},
        computed: mapState({
            braveList: state => state.braves,
            monsterList: state => state.monsters
        }),
        methods: {
            doAttack(id) {
                this.$store.dispatch('monsters/doAttack', id)
            }
        }
    }
</script>

<style scoped>

</style>
