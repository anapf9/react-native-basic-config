import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://10.0.2.2:3333' // Para usaar com o android studio
  baseURL: 'http://10.0.0.104:3333' // Para usar com USB, atentar ao ip da local
})

export default api;