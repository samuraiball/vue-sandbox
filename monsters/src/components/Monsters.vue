<template>
    <div>
        <div v-for="monster in monsterList.monsters"
             v-bind:key="monster.id">
            <div>
                {{ monster.name}}
                <span v-for="_ of monster.hp/100 "
                      v-bind:style="{color: monster.hp < 200 ? 'red' : 'black'}">

                    ■</span>
            </div>
        </div>
        <button v-if="!battleEvent.bravesTurn" v-on:click="doAttack()">勇者を攻撃</button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "monsters",
        computed: mapState({
            monsterList: state => state.monsters,
            braveList: state => state.braves,
            battleEvent: state => state.battleEvent
        }),
        methods: {
            doAttack() {
                //攻撃対象をランダムで選出
                for (let monster of this.monsterList.monsters) {
                    const targetId = Math.floor(Math.random() * this.braveList.braves.length);
                    this.$store.dispatch('braves/doAttack', {targetId: targetId, damage: monster.offensivePower});

                }

                // ターン終了後勇者の攻撃フラグをONに
                this.$store.dispatch('battleEvent/toggleTurn')
                this.$store.dispatch('braves/resetDidAttackState')
            }
        }
    }
</script>

<style scoped>

</style>
