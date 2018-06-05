import axios from 'axios';

//登录

export const register = (params) => axios.post('/api/register', params);

export const loginRegister = (params) => axios.post('/api/loginRegister', params);

export const personSave = (params) => axios.post('/api/personSave', params);

export const personList = () => axios.get('/api/personList');

export const personRemove = (params) => axios.post('/api/personRemove', params);

export const getUserInfo = () => axios.get('/api/userInfo');
