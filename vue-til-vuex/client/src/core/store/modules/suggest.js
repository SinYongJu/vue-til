import { getSuggestList } from '../../../api/v1/suggest/suggest'

const state = {
  suggestList: [],
  keyword: ''
}
const getters = {
  suggestList: state => state.suggestList
}
const mutations = {
  changeKeyword: function(state, payload) {
    state.keyword = payload
  },
  setSuggestList: function() {}
}
const actions = {
  suggest: async function({ commit, dispatch }) {
    const suggestlist = await getSuggestList()

    console.log(commit, dispatch, suggestlist)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
