import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.100.83:3333',
  timeout: 1000
});

export default api