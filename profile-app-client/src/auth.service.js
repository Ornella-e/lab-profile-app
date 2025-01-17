import axios from 'axios';
import { API_URL } from './constants';

const service = axios.create({
  baseURL: `${API_URL}/api/`,
});

const errorHandler = (err) => {
  throw err;
};
const signUp = (newUser) => {
  return service
    .post('/auth/signup', newUser)
    .then((res) => res.data)
    .catch(errorHandler);
};
const logIn = (loggeduser) => {
  return service
    .get('/auth/login', loggeduser)
    .then((res) => res.data)
    .catch(errorHandler);
};
const verifyToken = () => {
  return service
    .get('/auth/verify')
    .then((res) => res.data)
    .catch(errorHandler);
};
const uploadPhoto = (file) => {
  return service
    .post('/auth/upload', file)
    .then((res) => res.data)
    .catch(errorHandler);
};
const getCurrentUser = () => {
  return service
    .get('/auth/user')
    .then((res) => res.data)
    .catch(errorHandler);
};
const editUser = () => {
  return service
    .put('/auth/user')
    .then((res) => res.data)
    .catch(errorHandler);
};

export {
  service,
  signUp,
  logIn,
  verifyToken,
  uploadPhoto,
  getCurrentUser,
  editUser,
};
