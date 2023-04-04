import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import config_data from '../assets/data/config_data.json';
//import test from "../assets/videos/customer.mp4";
import './LoginPage.sass';

function LoginPage(props) {
  const listElement = useRef(null);
  const { userType } = props;
  const { setLogin } = useStateContext();
  const navigate = useNavigate();

  // const [loginEmail, setLoginEmail] = useState();
  // const [loginPassword, setLoginPassword] = useState();
  // const [signupUserName, setSignupUserName] = useState();
  // const [signupEmail, setSignupEmail] = useState();
  // const [signupPassword, setSignupPassword] = useState();

    const handleSignup = () => {
      listElement.current.classList.remove('bounceRight');
      listElement.current.classList.add('bounceLeft');
    };

    const handleLogin = () => {
      listElement.current.classList.remove('bounceLeft');
      listElement.current.classList.add('bounceRight');
    };

    const setRegisterText = () => {
      config_data.user_config.forEach(item => {
        if (item.user_type === userType) {
          return item.register_text;
        }
      });
      return config_data.user_config[0].register_text;
    }

    const setLoginText = () => {
      config_data.user_config.forEach(item => {
        if (item.user_type === userType) {
          return item.login_text;
        }
      });
      return config_data.user_config[0].login_text;
    }

    const setVideo = () => {
      config_data.user_config.forEach(item => {
        if (item.user_type === userType) {
          return item.video_src;
        }
      });
      return config_data.user_config[0].video_src;
    }
    const sumbitLoginForm = () => {
      const loginEmail = document.querySelector('#login-email').value;
      const loginPassword = document.querySelector('#login-password').value;
      setLogin(true);
      navigate('/');
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
          src={require("../assets/videos/customer.mp4")}
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
            <p className="user_unregistered-text">{setRegisterText()}</p>
            <button className="user_unregistered-signup" id="signup-button" onClick={handleSignup} type="button">Sign up</button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Have an account ?</h2>
            <p className="user_registered-text">{setLoginText()}</p>
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