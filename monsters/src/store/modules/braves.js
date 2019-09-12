const state = {
    braves: [
        {id: 1, name: '修羅', hp: 1000000}
    ]
}

const actions = {
    doAttack(context, index) {
        context.commit('doAttack', index)
    }
}


const mutations = {
    doAttack(state, index) {
        const tmp = state.braves[index].hp -= 100
        if (tmp <= 0) {
            state.braves.splice(index, 1)
        }
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}

