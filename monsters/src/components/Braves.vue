<template>
    <div>
        <div v-for="(brave, indexBrave) in braveList.braves" v-bind:key="brave.id">
            {{brave.name}}

            <span v-for="_ of brave.hp/100"
                  v-bind:style="{color: brave.hp < 200 ? 'red' : 'black'}">
                ■</span>

            <div v-if="!brave.didAttack" v-for="(monster, indexMonster) in monsterList.monsters">
                <button v-on:click="doAttack(indexMonster, indexBrave)">{{monster.name}}を攻撃</button>
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
            doAttack(idMonster, idBrave) {
                this.$store.dispatch('monsters/doAttack', idMonster)
                this.$store.dispatch('braves/didAttack', idBrave)

                // すべての勇者が攻撃を終わっているか確認
               let allAttacked = true;
                for(const brave of this.braveList.braves){
                    if(!brave.didAttack){
                        allAttacked  = false;
                    }
                }

                // 攻撃が終わっていればターン終了
                if (allAttacked) {
                    this.$store.dispatch('monsters/resetDidAttackState')
                }

            },
            resetDidAttackState(){
                this.$store.dispatch('braves/resetDidAttackState')
            }
        }
    }
</script>

<style scoped>

</style>
