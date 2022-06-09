import axios from 'axios' //ferramenta pra chamar a API
const API = axios.create({baseURL:'http://localhost:3001'});
export default API;