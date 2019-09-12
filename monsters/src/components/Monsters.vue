<template>
    <div>
        <input v-model="name">
        <button v-on:click="addMonster">モンスターを追加</button>
        <ul>
            <li v-for="(monster, index) in monsters"
                v-bind:key="monster.id"
                v-bind:class="{tuyoi: monster.hp > 300}">
                ID.{{ monster.id }} {{ monster.name }} {{ monster.hp }}
                <span v-if="monster.hp < 50">瀕死!!!!</span>
                <button v-on:click="doAttack(index)">攻撃(10)</button>
                <button v-on:click="doRemove(index)">モンスターを削除</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "monsters",
        data() {
            return {
                name: 'キマイラ',
                monsters: [
                    {id: 1, name: 'スライム', hp: 200},
                    {id: 2, name: 'ゴブリン', hp: 300},
                    {id: 3, name: 'ドラゴン', hp: 700},
                    {id: 4, name: 'スライム', hp: 100}
                ]
            }
        },
        methods: {
            addMonster: function () {
                const max = this.monsters.reduce(
                    function (a, b) {
                        return a > b.id ? a : b.id
                    }, 0)
                this.monsters.push({
                    id: max + 1,
                    name: this.name,
                    hp: 500
                })
            },
            doRemove(index) {
                this.monsters.splice(index, 1)
            },
            doAttack(index){
                this.monsters[index].hp -= 10
            }
        }
    }
</script>

<style scoped>

</style>
