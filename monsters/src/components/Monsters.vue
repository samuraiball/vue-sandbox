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
            <button v-if="!monster.didAttack" v-on:click="doAttack(index)">勇者を攻撃</button>
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
            doAttack(index) {
                //fixme ランダムで攻撃するように
                this.$store.dispatch('braves/doAttack', 0);
                this.$store.dispatch('monsters/didAttack', index);

                let allAttacked = true;
                for(const monster of this.monsterList.monsters){
                    if(!monster.didAttack){
                        allAttacked  = false;
                    }
                }

                if (allAttacked) {
                    this.$store.dispatch('braves/resetDidAttackState')
                }
            }
        }
    }
</script>

<style scoped>

</style>
