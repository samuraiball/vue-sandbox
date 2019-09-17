const state = {
    monsters: [
        {
            id: 1, name: 'スライム', hp: 300, didAttack: true, offensivePower: 100,
            image: 'http://img2.wikia.nocookie.net/__cb20130309185848/villains/images/0/07/Green_dragon.png'
        },
        {
            id: 2, name: 'ドラゴン', hp: 1000, didAttack: true, offensivePower: 500,
            image: 'https://realdgame.jp/DQ2018/img/gacha_real_hint_chara_1.png'
        },
        {
            id: 3, name: 'ゴブリン', hp: 500, didAttack: true, offensivePower: 200,
            image: 'https://i1.wp.com/s3-ap-northeast-1.amazonaws.com/media.gamepedia/gamepedia/wp-content/uploads/sites/9/2019/02/05184222/a44afd6a3f870ecae3f372022f5b4528.png?fit=60%2C60&ssl=1&resize=240%2C240'
        },
    ]
}


const actions = {
    doAttack(context, attackProps) {
        context.commit('doAttack', attackProps)
    },
    didAttack(context, index) {
        context.commit('didAttack', index)
    },
    resetDidAttackState(context) {
        context.commit('resetDidAttackState')
    }
}


const mutations = {
    doAttack(state, attackProps) {
        const tmp = state.monsters[attackProps.targetId].hp -= attackProps.damage
        if (tmp <= 0) {
            state.monsters.splice(attackProps.targetId, 1)
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
