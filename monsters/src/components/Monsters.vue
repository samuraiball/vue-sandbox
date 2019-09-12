<template>
    <div>
        <input v-model="name">
        <button v-on:click="addMonster">モンスターを追加</button>
        <ul>
            <li v-for="monster in monsters"
                v-bind:key="monster.id"
                v-bind:class="{tuyoi: monster.hp > 300}">
                ID.{{ monster.id }} {{ monster.name }} {{ monster.hp }}
                <span v-if="monster.hp > 300">つよい!!!!</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "monsters",
        data() {
            return {
                monsters: [
                    {id: 1, name: 'スライム', hp: 200},
                    {id: 2, name: 'ゴブリン', hp: 300},
                    {id: 3, name: 'ドラゴン', hp: 700},
                    {id: 4, name: 'スライム', hp: 100}
                ]
            }
        },
        methods:{
            addMonster: function () {
                const max = this.monsters.reduce(
                    function (a, b) {
                        return b.id ? a: b.id
                    }, 0)
                this.monsters.push({
                    id: max + 1,
                    name: this.name,
                    hp: 500
                })
            }
        }
    }
</script>

<style scoped>

</style>
