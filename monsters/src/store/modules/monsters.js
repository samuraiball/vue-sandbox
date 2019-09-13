const state = {
    monsters: [
        {
            id: 1, name: 'スライム', hp: 200, didAttack: true,
            image: 'http://img2.wikia.nocookie.net/__cb20130309185848/villains/images/0/07/Green_dragon.png'
        },
        {
            id: 2, name: 'ドラゴン', hp: 700, didAttack: true,
            image: 'https://realdgame.jp/DQ2018/img/gacha_real_hint_chara_1.png'
        },
        {
            id: 3, name: 'ゴブリン', hp: 300, didAttack: true,
            image: 'https://i1.wp.com/s3-ap-northeast-1.amazonaws.com/media.gamepedia/gamepedia/wp-content/uploads/sites/9/2019/02/05184222/a44afd6a3f870ecae3f372022f5b4528.png?fit=60%2C60&ssl=1&resize=240%2C240'
        },
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
        const tmp = state.monsters[index].hp -= 100
        if (tmp <= 0) {
            state.monsters.splice(index, 1)
        }
    },
    didAttack(state, index) {
        state.monsters[index].didAttack = true;
    },
    resetDidAttackState(state) {
        for (let monster of state.monsters) {
            monster.didAttack = false;
        }
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
