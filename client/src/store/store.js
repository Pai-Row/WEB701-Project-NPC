import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLogginIn: false
    },
    mutations: {
        setToken ({commit}, token) {
        state.token = token
        if (token) {
            state.isUserLogginIn = true
        }else{
            state.isUserLogginIn = false
        }
        },
        setUser ({commit}, user) {
            state.user = user
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, user) {
            commit('setUser', user)
        }
    }
})