import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';

import { auth } from '../firebase'

import '../styles/SignIn_SignUp.css'

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
          history.push('/')
        }).catch((error) => alert(error.message))
  }

  return (
    <div className="signIn">
      <form className="login">
          <div className="mb-3">
              <TextField type="email" value={email} onChange={e => setEmail(e.target.value)} label="Email" fullWidth />
          </div>
          <div className="mb-3">
              <TextField type="password" value={password} onChange={e => setPassword(e.target.value)} label="Password" fullWidth />
          </div>
          <div className="auth-submit">
              <button onClick={signIn} className="button__auth" type="submit">Login</button>
              <input type="checkbox" id="rememberme" value="forever" />
              <label for="rememberme">Remember me</label>
          </div>
          <p className="auth-lost_password">
              <Link>Lost your password?</Link>
          </p>
      </form>
    </div>
  )
}

export default SignIn
