import React, {useState} from "react";
import axios from 'axios';

import '../login.css'
import { TextField, Button, CircularProgress } from "@material-ui/core";

const Login = (props) => {
  const [login, setLogin] = useState({
      credential: {
        username: '',
        password: ''
      }
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    setLogin({
      credential: {
        ...login.credential,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', login.credential)
    .then(res => {
      console.log(res)
      setIsLoading(true)
      window.localStorage.setItem('token', res.data.payload)
      setIsLoading(false)
      props.history.push('/colors')
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  return (
    <>
      <h1 className='login-title'>Welcome to the Bubble App!</h1>
      <div className='login-form'>
        <form onSubmit={handleLogin}>
          <TextField
            required
            name="username"
            id="standard-required"
            label="Username"
            onChange={handleChange}
            value={login.credential.username}
          />
          <TextField
            required
            name="password"
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={login.credential.password}
          />
          {isLoading ? (
            <CircularProgress disableShrink />
          ) : (
            <div className='login-btn'>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
