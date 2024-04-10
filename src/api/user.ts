import delay from '../utils/delay'
interface User {
  id: string
  name: string
}
const getUserData = (): User[] => {
  const count = Math.floor(Math.random() * 20)
  return Array(count)
    .fill(0)
    .map(() => {
      return {
        id: Math.random() + '',
        name: `张三${Math.floor(Math.random() * 20)}`,
        account: Math.floor(Math.random() + 100000),
      }
    })
}

//@ts-ignore
const query = (params: Partial<User & { orgId: string }>) => {
  return delay(getUserData())
}

const userApi = {
  query,
}

export default userApi
