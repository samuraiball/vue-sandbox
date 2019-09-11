<template>
    <div id="counter">
        <span>{{ count }} </span>
        <button @click="increment">up</button>
        <button @click="decrement">down</button>
        <p v-if="count === 0">
            Press 'up' or 'down' button!!!!
        </p>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: 'Counter',
        computed: {
            count() {
                return this.$store.state.num
            }
        },
        methods: mapActions([
            'increment',
            'decrement'
        ])
    }
</script>

