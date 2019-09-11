import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        state:{
            num: 0
        },
        mutations:{
            increment(state) {
                state.num++
            },
            decrement(state) {
                state.num--
            },
            calc(state, n){
                state.num +=n
            }
        },
        actions:{
            increment(context) {
                context.commit('increment')
            },
            decrement(context) {
                context.commit('decrement')
            },
            calc(context, n){
                context.commit('calc', n)
            }
        }
    }
)
