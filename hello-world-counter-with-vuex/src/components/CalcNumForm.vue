<template>
    <div>
        <input v-model="calcNum" placeholder="type number">
        <button @click="calc(calcNum)" >calculate</button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "CalcNumForm",
        computed: mapState({
            num: state => state.num
        }),
        methods: {
            calc: function (calcNum) {
                this.$store.dispatch('calc', parseInt(calcNum))
            }
        }
    }
</script>
