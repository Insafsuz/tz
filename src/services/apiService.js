import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
})

instance.interceptors.request.use(
  async request => {
    request.params = {
      ...request.params,
      key: 'AIzaSyAh_l7Os7yGNSSpRvSHhM2Wzfl5rWVrW7w',
    }

    return request
  },
  error => Promise.reject(error)
)

export { instance as axios }
