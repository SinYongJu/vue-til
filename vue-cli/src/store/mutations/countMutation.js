export const COUNT_MUTATION_TYPE = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
  MULTIPLY: 'multiply'
}

const COUNT_MUTATION = {
  [COUNT_MUTATION_TYPE.INCREASE](state) {
    state.count++
  },
  [COUNT_MUTATION_TYPE.DECREASE](state) {
    state.count--
  },
  [COUNT_MUTATION_TYPE.MULTIPLY](state, payload) {
    console.log(state, payload)
    state.count = state.count * payload.num
  }
}

export default COUNT_MUTATION
