import User from '../models/user'

export default {
  fetchUser(id: string) {
    // 模擬 API 請求
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new User(id, 'John Doe', 'john.doe@example.com'))
      }, 1000)
    })
  }
}
