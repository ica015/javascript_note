import axios from 'axios' //ferramenta pra chamar a API
const API = axios.create({baseURL: process.env.REACT_APP_BASE_API});
export default API;