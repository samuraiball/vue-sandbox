import Vue from 'vue'
import Vuex from 'vuex'
import monsters from "./modules/monsters"
import braves from "./modules/braves"

Vue.use(Vuex)


export default new Vuex.Store({
        modules: {
            monsters,
            braves
        }
    }
)



