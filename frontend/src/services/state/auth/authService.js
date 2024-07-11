<<<<<<< HEAD
import axios from "axios";
const API_URL = "/api/users/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => localStorage.removeItem("user");

const authService = { register, logout, login };
export default authService;
=======
import axios from 'axios'
const API_URL = '/api/users/'

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logout = () => localStorage.removeItem('user')

const authService = { register, logout, login }
export default authService
>>>>>>> 1c325eb56a95b56aca6e16e74e09b141bce11010
