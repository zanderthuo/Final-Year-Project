import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';

import { auth } from '../firebase'

import '../styles/SignIn_SignUp.css'

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      // it successfully created a new user with email and password
      console.log(auth);
      if (auth){
        history.push('/')
      }
    }).catch(error => alert(error.message));
    // some firebase register
  }

  return (
    <div className="signUp">
      <form className="register">
          <div className="mb-3">
            <TextField type="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} fullWidth />
          </div>
          <div className="mb-3">
            <TextField type="password" label="Password" value={password} onChange={e => setPassword(e.target.value)} fullWidth />
          </div>
          <div className="auth-submit">
              <button onClick={register} className="button__auth" type="submit" value="Register">Register</button>
          </div>
      </form>
    </div>
  )
}

export default SignUp
