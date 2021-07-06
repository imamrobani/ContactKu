import axios from 'axios'
import { Networks } from '../consts'

const instance = axios.create({
  baseURL: Networks.BASE_URL,
  headers: {
    'Accept': 'application/json'
  }
})

export default instance