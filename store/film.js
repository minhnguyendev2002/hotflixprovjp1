export const state = () => ({
    dataArr: [],
    filterArr: []
});

export const mutations = {
    setDataArr: (state, array) => {
        state.dataArr = array
    },
    setFilterArr: (state, array) => {
        state.filterArr = array
    }
};

export const getters = {
    getDataArr: state => state.dataArr,
    getFilterArr: state => state.filterArr
};

export const actions = {
    async getApiArr({ commit }) {
        const arr = await this.$axios.$get('https://hotflix-df697-default-rtdb.firebaseio.com/datafilm.json')
        const newArr = []
        for(const key in arr) {
            newArr.push({...arr[key], id: key})
        }
        commit("setDataArr", newArr)
        commit("setFilterArr", newArr)
    },
    filterArr({ commit, getters }, payload) {
        const newArr = getters.getFilterArr.filter(item => item.type === payload)
        commit("setDataArr", newArr)
    }
};