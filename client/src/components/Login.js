import React from "react";
import {TextField, Button} from '@material-ui/core';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <TextField
          required
          name='username'
          id="standard-required"
          label="Username"
        />
        <TextField
          required
          name='password'
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant='contained' color="primary">Sign In</Button>
      </form>
    </>
  );
};

export default Login;
