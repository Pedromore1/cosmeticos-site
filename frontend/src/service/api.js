import axios from 'axios';
const api = axios.create({ baseURL: 'https://cosmeticos-api.onrender.com/api'});

export default api;

