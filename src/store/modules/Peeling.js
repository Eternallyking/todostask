export default {
    // namespaced: true,
    state: {
        Peelinglist: ['red', 'pink', 'green', 'yellow'],
        Peeling: 'hotpink'
    },
    mutations: {
        Peeling(state, payload) {
            state.Peeling = state.Peelinglist[payload]
        }
    },
    actions: {
        asyncPeeling(context, payload) {
            context.commit('Peeling', payload)
        }
    },
    getters: {},
};
