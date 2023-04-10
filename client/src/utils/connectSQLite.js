import Axios from 'axios';
import config_axios from '../assets/data/config_axios.json'


const login = (userType, email, password) => 
  {
    const url = config_axios.server_host + 'api/login';
    const data = {
      userType: userType,
      email: email,
      password: password
    };
    return Axios.post(url, data)
      .then(response => {
        console.log(response.data);
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
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }

  const update_email = (userType, old_email, new_email, password) => 
  {
    const url = config_axios.server_host + 'api/update_email';
    const data = {
      userType: userType,
      old_email: old_email,
      new_email: new_email,
      password: password
    };
    return Axios.post(url, data)
      .then(response => {
<<<<<<< HEAD
        console.log(response.data);
=======
>>>>>>> 3e5285f22257238d2c03958f5a8dc19779e92e00
        return response.data;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }

  const update_password = (userType, old_password, new_password, email) => 
  {
    const url = config_axios.server_host + 'api/update_password';
    const data = {
      userType: userType,
<<<<<<< HEAD
      old_password: old_password,
      new_password: new_password,
      email: email
    };
    return Axios.post(url, data)
      .then(response => {
        console.log(response.data);
=======
      email: email,
      old_password: old_password,
      new_password: new_password
    };
    return Axios.post(url, data)
      .then(response => {
>>>>>>> 3e5285f22257238d2c03958f5a8dc19779e92e00
        return response.data;
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }

<<<<<<< HEAD
  export {login, register,update_email ,update_password}
=======
  export {login, register,update_email,update_password}
>>>>>>> 3e5285f22257238d2c03958f5a8dc19779e92e00
