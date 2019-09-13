<template>
    <div>
        <div v-for="(brave, braveIndex) in braveList.braves" v-bind:key="brave.id">
            {{brave.name}}

            <span v-for="_ of brave.hp/100"
                  v-bind:style="{color: brave.hp < 200 ? 'red' : 'black'}">■</span>

            <div v-if="!brave.didAttack" v-for="(monster, targetId) in monsterList.monsters">
                <button v-on:click="doAttack(targetId, brave.offensivePower, braveIndex)">
                    {{monster.name}}を攻撃
                </button>
            </div>
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
            doAttack(targetId, damage, attackerId) {
                this.$store.dispatch('monsters/doAttack', {targetId: targetId, damage: damage})
                this.$store.dispatch('braves/didAttack', attackerId)

                // すべての勇者が攻撃を終わっているか確認
                let allAttacked = true;
                for (const brave of this.braveList.braves) {
                    if (!brave.didAttack) {
                        allAttacked = false;
                    }
                }

                // 攻撃が終わっていればターン終了
                if (allAttacked) {
                    this.$store.dispatch('monsters/resetDidAttackState')
                }
                console.log('aaaaaaaaa')
            },
            resetDidAttackState() {
                this.$store.dispatch('braves/resetDidAttackState')
            }
        }
    }
</script>

<style scoped>

</style>
