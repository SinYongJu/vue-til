import { createReq } from '@api/'

const SUGGEST_URL = '/users'

const getSuggestList = async () => {
  const config = {
    url: SUGGEST_URL
  }
  try {
    const data = await createReq(config)
    return data
  } catch (error) {
    console.log(error)
  }
}

export { getSuggestList }
