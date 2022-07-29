import Vue from 'vue'
import Vuex from 'vuex'
import Peeling from './modules/Peeling'
import todos from './modules/todos'
// import careateVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {
    tasklist(state) {
      return state.todos.tasklist
    },
    Peelinglist(state) {
      return state.Peeling.Peelinglist
    },
    Peeling(state) {
      return state.Peeling.Peeling
    },
    nofinishtask(state) {
      return state.todos.tasklist.filter(e => e.done === false).length
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Peeling,
    todos
  },
  // plugins: [
  //   careateVuexPersisted({})
  // ]
})
