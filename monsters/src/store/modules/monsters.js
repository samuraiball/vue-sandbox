const state = {
    monsters: [
        {id: 1, name: 'スライム', hp: 200},
        {id: 2, name: 'ドラゴン', hp: 700},
        {id: 3, name: 'ゴブリン', hp: 300},
    ]
}


const actions = {
    doAttack(context, index) {
        context.commit('doAttack', index)
    }
}


const mutations = {
    doAttack(state, index) {
        const tmp = state.monsters[index].hp -= 100
        if (tmp <= 0) {
            state.monsters.splice(index, 1)
        }
    }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
