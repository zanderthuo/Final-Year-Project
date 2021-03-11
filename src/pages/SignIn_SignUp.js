import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';

import { auth } from '../firebase'

import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

import '../styles/SignIn_SignUp.css'

const SignIn_SignUp = () => {

  return (
    <div className="signIn_signUp__container">
    <h1 className="main-ttl"><span>Sign Up / Sign In</span></h1>
      <div className="auth-wrap">
          <div className="auth-col">
              <h2>Sign In</h2>
              <SignIn />
          </div>
          <div className="auth-col">
              <h2>Sign Up</h2>
              <SignUp />
          </div>
      </div>
    </div>
  )
}

export default SignIn_SignUp
