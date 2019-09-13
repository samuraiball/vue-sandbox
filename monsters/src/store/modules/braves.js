const state = {
    braves: [
        {id: 1, name: '西修羅', hp: 10000, didAttack: false},
        {id: 2, name: 'へのへのもへじ', hp: 100, didAttack: false}
    ]
}

const actions = {
    doAttack(context, index) {
        context.commit('doAttack', index)
    },
    didAttack(context, index) {
        context.commit('didAttack', index)
    },
    resetDidAttackState(context) {
        context.commit('resetDidAttackState')
    }
}

const mutations = {
    doAttack(state, index) {
        const tmp = state.braves[index].hp -= 100
        if (tmp <= 0) {
            state.braves.splice(index, 1)
        }
    },
    didAttack(state, index) {
        state.braves[index].didAttack = true;
    },
    resetDidAttackState(state) {
        for (let brave of state.braves) {
            brave.didAttack = false;
        }
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}

