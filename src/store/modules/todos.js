export default {
    // namespaced: true,
    state: {
        tasklist: [
            {
                name: "吃饭",
                done: false,
                id: 1,
            },
            {
                name: "睡觉",
                done: false,
                id: 2,
            },
            {
                name: "打豆豆",
                done: false,
                id: 3,
            },
        ],
        showtasklist: [],
    },
    mutations: {
        deltask(state, payload) {
            const index = state.tasklist.findIndex(e => e.id === payload)
            state.tasklist.splice(index, 1)
        },
        changestate(state, payload) {
            const index = state.tasklist.findIndex(e => e.id === payload)
            state.tasklist[index].done = !state.tasklist[index].done
        },
        addtask(state, payload) {
            if (payload.trim() !== '') {
                state.tasklist.push({
                    name: payload,
                    done: false,
                    id: state.tasklist.length !== 0 ? state.tasklist[state.tasklist.length - 1].id + 1 : 1
                })
            }
            payload = ''
        },
        delall(state) {
            state.tasklist = state.tasklist.filter(e => e.done === false);
        },
    },
    actions: {
        asyncdeltask(context, payload) {
            context.commit('deltask', payload)
        },
        asyncchangestate(context, payload) {
            context.commit('changestate', payload)
        },
        asyncaddtask(context, payload) {
            context.commit('addtask', payload)
        },
        asyncdelall(context) {
            context.commit('delall')
        },
    },
    getters: {},
};
