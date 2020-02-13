import { COUNT_MUTATION_TYPE } from '../mutations/countMutation'

export const COUNT_ACTIONS_TYPE = {
  TIMER: 'timer'
}
let timeout = null

const delay = timer => new Promise(resolve => setTimeout(resolve, timer))

const COUNT_ACTIONS = {
  /**
   *
   * @param {*} context ==> {commit, state}
   * @param {*} payload
   */
  async [COUNT_ACTIONS_TYPE.TIMER]({ commit }, payload) {
    if (timeout === null) {
      await delay(payload.timer)
      clearTimeout(timeout)
      return commit(COUNT_MUTATION_TYPE.INCREASE)
    }
  }
}

export default COUNT_ACTIONS
