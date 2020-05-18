import React, { useState } from 'react';
import { Link} from "react-router-dom";
import axios from 'axios';
import { setUserSession } from '../Utils/Common';
import Button from '@material-ui/core/Button';


function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);


  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('https://pfalfa-api.pfalfa.io/api/auth/login', {
        email: username.value,
        passphare: password.value
      }).then(response => {
      setLoading(false);
      setUserSession(response.data.data.pub, response.data.data.email);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 400) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });


  }



  const handleOnBlur = event => {

    const getElement = event.target;

    if(getElement.value !==''){
      document.querySelector('input[name="'+getElement.name+'"]').className = 'input100 has-val';
    }else{
      document.querySelector('input[name="'+getElement.name+'"]').className = 'input100';
    }

  };

  return (

     <div className="limiter">

        <div className="container-login100">
            <div className="wrap-login100">
                <form className="login100-form validate-form">
                    <span className="login100-form-title p-b-26">
                      <img src='/static/logo-small.png' alt="pfalfa logo" className="logo" />
                    </span>
                    <span className="login100-form-title p-b-48">
                      Sign In
                    </span>
                    <div className="wrap-input100 validate-input">

                        <input required
                               className="input100"
                               type="text" {...username}
                               name="email"
                               onBlur={handleOnBlur}/>

                        <span className="focus-input100" data-placeholder="Email"></span>
                    </div>
                    <div className="wrap-input100 validate-input">
                        
                        <input required
                               className="input100"
                               type="password" {...password}
                               name="pass"
                               onBlur={handleOnBlur}/>
                        <span className="focus-input100" data-placeholder="Password"></span>
                    </div>
                    {error && <div className="w-100 text-center"><small style={{ color: 'red' }}>{error}</small><br /></div>}
                    <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                            <div className="login100-form-bgbtn"></div>

                            
                            <button className="login100-form-btn" onClick={handleLogin} disabled={loading}>
                              {loading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                        <a className="link-forgot" href="/forget">
                          <u>Forgot password?</u>
                        </a>
                    </div>
                    <div className="text-center p-t-115">
                        <span className="txt1">
                          Don’t have an account?
                          </span>
                        <a className="txt2" href="/register">
                          <u>Sign Up</u>
                        </a>
                    </div>
                </form>
            </div>
        </div>

        

    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;
