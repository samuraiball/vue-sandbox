<template>
    <div>
        <div v-for="(monster, index) in monsterList.monsters"
             v-bind:key="monster.id">
            <div>
                {{ monster.name}}
                <span v-for="_ of monster.hp/100 "
                      v-bind:style="{color: monster.hp < 200 ? 'red' : 'black'}">

                    ■</span>
            </div>
            <button v-if="!monster.didAttack" v-on:click="doAttack(index, monster.offensivePower)">勇者を攻撃</button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "monsters",
        computed: mapState({
            monsterList: state => state.monsters,
            braveList: state => state.braves
        }),
        methods: {
            doAttack(attackerId, damage) {

                //攻撃対象をランダムで選出
                const targetId = Math.floor(Math.random() * this.braveList.braves.length);

                this.$store.dispatch('braves/doAttack', {targetId: targetId, damage: damage});
                this.$store.dispatch('monsters/didAttack', attackerId);

                // すべてのモンスターが攻撃が終わっているか確認
                let allAttacked = true;
                for (const monster of this.monsterList.monsters) {
                    if (!monster.didAttack) {
                        allAttacked = false;
                    }
                }

                // 攻撃が終わっていればターン終了
                if (allAttacked) {
                    this.$store.dispatch('braves/resetDidAttackState')
                }
            }
        }
    }
</script>

<style scoped>

</style>
