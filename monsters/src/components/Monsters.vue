<template>
    <div>
        <div v-for="(monster, index) in monsterList.monsters"
             v-bind:key="monster.id">
            <div>
                {{ monster.name}}
                <span v-for="n of monster.hp/100 "
                      v-bind:style="{color: monster.hp < 200 ? 'red' : 'black'}">■</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "monsters",
        computed: mapState({
            monsterList: state => state.monsters
        }),
        methods: {
            doAttack(index) {
                this.$store.dispatch('monsters/doAttack', index);
            }
        }
    }
</script>

<style scoped>

</style>
