import { COUNT_MUTATION_TYPE } from '../mutations/countMutation'

export const COUNT_ACTIONS_TYPE = {
  TIMER: 'timer'
}
let timeout = null
const COUNT_ACTIONS = {
  /**
   *
   * @param {*} context ==> {commit, state}
   * @param {*} payload
   */
  [COUNT_ACTIONS_TYPE.TIMER]({ commit, state }, payload) {
    console.log(state.count)
    return new Promise(function(resolve) {
      if (timeout === null) {
        timeout = setTimeout(() => {
          commit(COUNT_MUTATION_TYPE.INCREASE)
          resolve()
          timeout = null
        }, payload.timer)
      }
    })
  }
}

export default COUNT_ACTIONS
