import COUNT_MUTATION from '../mutations/countMutation'
import COUNT_ACTIONS from '../actions/countAction'

const state = {
  count: 0
}

const getters = {
  computedCount: state => `카운트는 ${state.count}`
}

const countState = {
  state,
  getters,
  mutations: { ...COUNT_MUTATION },
  actions: { ...COUNT_ACTIONS }
}
console.log(countState)

export default countState
