import countStore from './countStore'

const STORE_NAMES = {
  COUNT_STORE: 'countStore'
}

const modules = {
  [STORE_NAMES.COUNT_STORE]: countStore
}

export { modules, STORE_NAMES }
