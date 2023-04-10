import Axios from 'axios';
import config_axios from '../assets/data/config_axios.json'


const login = (userType, email, password) => {
    const url = config_axios.server_host + 'api/login';
    const data = {
      userType: userType,
      email: email,
      password: password
    };
    return Axios.post(url, data)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }

  const register = (userType, email, password) => 
  {
    const url = config_axios.server_host + 'api/register';
    const data = {
      userType: userType,
      email: email,
      password: password
    };
    return Axios.post(url, data)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }

  export {login, register}