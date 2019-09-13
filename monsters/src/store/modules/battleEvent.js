const state = {
    bravesTurn: true
}

const actions = {
    toggleTurn(context){
        context.commit('toggleTurn')
    }
}

const mutations = {
    toggleTurn(state) {
        state.bravesTurn = !state.bravesTurn
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
}

