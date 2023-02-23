import React, { useContext, useState } from 'react'
import { ForgotPassword, ForgotPasswordDiv, LogoWrap, Input, Label, LeftSide, LoginButton, LoginContainer, LoginForm, LoginWrap, Logo, RightSide, SignupButton, Svg, TextSignin, TextWelcome, ErrorContainer, ErrorMessage } from './SignInElements'
import logo from '../../../public/images/logo-big.PNG'
import svg from '../../../public/images/svg-signin.svg'
import { ImWarning } from 'react-icons/im'
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../../Firebase'
import { IconContext } from 'react-icons'
import { urlFor } from '@/lib/client'
import Link from 'next/link'
// import { AuthContext } from '../../Context/AuthContext'
// import { useNavigate } from 'react-router-dom'

const SignIn = ({data: {logo, image, smallTitle, title, buttonText}}) => {
    // const navigate = useNavigate()

    // const {setCurrentUser, setAuthCredentials} = useContext(AuthContext)
    const [error, setError] = useState(false) 
    const [errorMessage, setErrorMessage] = useState('')
    const [data, setData] = useState({
        email: '',
        password: ''
    })

   

  return (
    <LoginContainer>
      <LoginWrap> 
          <LeftSide>
              <LogoWrap to="/"><Logo src={urlFor(logo)} /></LogoWrap>
              <Svg src={urlFor(image)} />
          </LeftSide>

          <RightSide>
              <TextWelcome>{title}</TextWelcome>
              <TextSignin>{smallTitle}</TextSignin>

              <ErrorContainer error={error}>
                <IconContext.Provider value={{color: 'var(--red)'}}>
                    <ImWarning />
                </IconContext.Provider>
                <ErrorMessage>{errorMessage}</ErrorMessage>
              </ErrorContainer>

              <LoginForm>
                  <Label>Email</Label>
                  <Input type='email' required placeholder='Enter your email address' onChange={(e) => setData(prev => ({...prev, email: e.target.value}))} />
                  <Label>Password</Label>
                  <Input type='password' required minLength='6' placeholder='Enter your password' onChange={(e) => setData(prev => ({...prev, password: e.target.value}))} />
                  <ForgotPasswordDiv to="/forgot-password">
                      <ForgotPassword>Forgot Password?</ForgotPassword>
                  </ForgotPasswordDiv>
                  <LoginButton type='submit'>{buttonText}</LoginButton>
                    <Link href='sign-up'>
                        <SignupButton>
                        Don't have an account? Sign Up
                        </SignupButton>
                    </Link>
              </LoginForm>
          </RightSide>

      </LoginWrap>
  </LoginContainer>
  )
}

export default SignIn