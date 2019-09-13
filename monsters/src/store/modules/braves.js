const state = {
    braves: [
        {id: 1, name: '西修羅', hp: 5000, didAttack: false, offensivePower: 300},
        {id: 2, name: 'へのへのもへじ', hp: 100, didAttack: false, offensivePower: 100},
        {id: 3, name: 'ボーイ', hp: 1000, didAttack: false, offensivePower: 100}
    ]
}

const actions = {
    doAttack(context, attackProps) {
        context.commit('doAttack', attackProps)
    },
    didAttack(context, attackerId) {
        context.commit('didAttack', attackerId)
    },
    resetDidAttackState(context) {
        context.commit('resetDidAttackState')
    }
}

const mutations = {
    doAttack(state, attackProps) {

        const tmp = state.braves[attackProps.targetId].hp -= attackProps.damage
        if (tmp <= 0) {
            state.braves.splice(attackProps.targetId, 1)
        }
    },
    didAttack(state, attackerId) {
        state.braves[attackerId].didAttack = true;
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

