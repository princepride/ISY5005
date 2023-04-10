import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import config_data from '../assets/data/config_data.json';
import customer from "../assets/videos/customer.mp4";
import enterprise from "../assets/videos/enterprise.mp4";
import {login, register} from '../utils/connectSQLite';
import './LoginPage.sass';

function LoginPage() {
  const listElement = useRef(null);
  const { setLogin, userType, setUserName, setUserEmail } = useStateContext();
  const navigate = useNavigate();
  const [registerText, setRegisterText] = useState(config_data.user_config[0].register_text);
  const [loginText, setLoginText] = useState(config_data.user_config[0].login_text);

  useEffect(() => {
    console.log(userType);
    setRegisterText(config_data.user_config.find(item => item.user_type === userType).register_text);
    setLoginText(config_data.user_config.find(item => item.user_type === userType).login_text);
  },[userType])


    const handleSignup = () => {
      listElement.current.classList.remove('bounceRight');
      listElement.current.classList.add('bounceLeft');
    };

    const handleLogin = () => {
      listElement.current.classList.remove('bounceLeft');
      listElement.current.classList.add('bounceRight');
    };

    const sumbitLoginForm = () => {
      const loginEmail = document.querySelector('#login-email').value;
      const loginPassword = document.querySelector('#login-password').value;
      // setLogin(true);
      console.log("hello")
      login(userType, loginEmail, loginPassword).then(
        response => {
          console.log(response)
          if(response.status === '100') {
            setLogin(true);
            setUserName(response.userName)
            setUserEmail(response.userEmail)
            // navigate('/form');
          }
          else {
            setLogin(false);
            console.log(response.message)
          }
        }
      );
      
    };

    const sumbitSignupForm = () => {
      const signupUsername = document.querySelector('#signup-username').value;
      const signupEmail = document.querySelector('#signup-email').value;
      const signupPassword = document.querySelector('#signup-password').value;
      setLogin(true);
      navigate('/');
    };

  return (
    <section className="user">
      <div className=" relative w-full h-full">
        <video
          src={userType === 'Customer' ? customer : enterprise}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Don't have an account ?</h2>
            <p className="user_unregistered-text">{registerText}</p>
            <button className="user_unregistered-signup" id="signup-button" onClick={handleSignup} type="button">Sign up</button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Have an account ?</h2>
            <p className="user_registered-text">{loginText}</p>
            <button className="user_registered-login" id="login-button" onClick={handleLogin} type="button">Login</button>
          </div>
        </div>

        <div className="user_options-forms" id="user_options-forms" ref={listElement}>
          <div className="user_forms-login">
            <h2 className="forms_title">Login</h2>
            <form className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input placeholder="Email / User Name" className="forms_field-input" id="login-email" required autoFocus />
                </div>
                <div className="forms_field">
                  <input type="password" placeholder="Password" className="forms_field-input" id="login-password" required />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <button type="button" className="forms_buttons-forgot" id="reset-password">Forgot password?</button>
                <input type="submit" value="Log In" className="forms_buttons-action" id="submit-login-form" onClick={sumbitLoginForm} />
              </div>
            </form>
          </div>
          <div className="user_forms-signup">
            <h2 className="forms_title">Sign Up</h2>
            <form className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input type="email" placeholder="Email" className="forms_field-input" id="signup-email" required />
                </div>
                <div className="forms_field">
                  <input type="password" placeholder="Password" className="forms_field-input" id="signup-password" required />
                </div>
                <div className="forms_field">
                  <input type="password" placeholder="Confirm Password" className="forms_field-input" id="signup-password" required />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <input type="submit" value="Sign up" className="forms_buttons-action" id="submit-signup-form" onClick={sumbitSignupForm} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;