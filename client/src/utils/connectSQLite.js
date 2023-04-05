import Axios from 'axios';
import config_axios from '../assets/data/config_axios.json'


function login(userType, email, password) {
    const url = server_host + 'api/login';
    const data = {
      userType: userType,
      email: email,
      password: password
    };
    return axios.post(url, data)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }

  function register(userType, email, password) {
    const url = server_host + 'api/register';
    const data = {
      userType: userType,
      email: email,
      password: password
    };
    return axios.post(url, data)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }