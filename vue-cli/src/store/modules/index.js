import countStore from './countStore'

export const STORE_NAMES = {
  COUNT_STORE: 'countStore'
}

const modules = {
  [STORE_NAMES.COUNT_STORE]: countStore
}

export default modules
