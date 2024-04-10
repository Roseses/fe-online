import delay from '../utils/delay'
interface Org {
  id: string
  name: string,
  num: number
}
const getOrgData = (): Org[] => {
  const count = Math.floor(Math.random() * 20)
  return Array(count)
    .fill(0)
    .map((_, index: number) => {
      return {
        id: Math.random() + '',
        name: (Math.random() + 1).toString(36).substring(7),
        num: Math.floor((Math.random()) * (10 - index))
      }
    })
}

//@ts-ignore
const query = (parentId: string = '0') => {
  return delay(getOrgData())
}

const orgApi = {
  query,
}

export default orgApi
