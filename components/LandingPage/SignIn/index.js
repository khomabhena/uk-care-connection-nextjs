import React, { useContext, useState } from 'react'
import { ForgotPassword, ForgotPasswordDiv, LogoWrap, Input, Label, LeftSide, LoginButton, LoginContainer, LoginForm, LoginWrap, Logo, RightSide, SignupButton, Svg, TextSignin, TextWelcome, ErrorContainer, ErrorMessage } from './SignInElements'
import logo from '../../../images/logo-big.PNG'
import svg from '../../../images/svg-signin.svg'
import { ImWarning } from 'react-icons/im'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../Firebase'
import { IconContext } from 'react-icons'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()

    const {setCurrentUser, setAuthCredentials} = useContext(AuthContext)
    const [error, setError] = useState(false) 
    const [errorMessage, setErrorMessage] = useState('')
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        setError(false)

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setCurrentUser(JSON.stringify(user))
                localStorage.setItem('currentUser', JSON.stringify(user))
                setAuthCredentials(user.uid, data.email)
                navigate('/applicant')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(true)
                setErrorMessage(errorCode.includes('user-not-found') 
                    ? 'User not Found' 
                    : errorCode.includes('network') 
                    ? 'Network connection error'
                    : 'Incorrect Email or Password')
        });
    }

  return (
    <LoginContainer>
      <LoginWrap> 
          <LeftSide>
              <LogoWrap to="/"><Logo src={logo} /></LogoWrap>
              <Svg src={svg} />
          </LeftSide>

          <RightSide>
              <TextWelcome>Welcome Back!</TextWelcome>
              <TextSignin>Sign in to continue to uk care connection.</TextSignin>

              <ErrorContainer error={error}>
                <IconContext.Provider value={{color: 'var(--red)'}}>
                    <ImWarning />
                </IconContext.Provider>
                <ErrorMessage>{errorMessage}</ErrorMessage>
              </ErrorContainer>

              <LoginForm onSubmit={handleLogin}>
                  <Label>Email</Label>
                  <Input type='email' required placeholder='Enter your email address' onChange={(e) => setData(prev => ({...prev, email: e.target.value}))} />
                  <Label>Password</Label>
                  <Input type='password' required minLength='6' placeholder='Enter your password' onChange={(e) => setData(prev => ({...prev, password: e.target.value}))} />
                  <ForgotPasswordDiv to="/forgot-password">
                      <ForgotPassword>Forgot Password?</ForgotPassword>
                  </ForgotPasswordDiv>
                  <LoginButton type='submit'>Sign In</LoginButton>
                  <SignupButton to="/sign-up">Don't have an account? Sign Up</SignupButton>
              </LoginForm>
          </RightSide>

      </LoginWrap>
  </LoginContainer>
  )
}

export default SignIn