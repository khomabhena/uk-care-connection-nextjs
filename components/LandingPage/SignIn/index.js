import React, { useState } from 'react'
import { ForgotPassword, ForgotPasswordDiv, LogoWrap, Input, Label, LeftSide, LoginButton, LoginContainer, LoginForm, LoginWrap, Logo, RightSide, SignupButton, Svg, TextSignin, TextWelcome, ErrorContainer, ErrorMessage } from './SignInElements'
import { ImWarning } from 'react-icons/im'
import { IconContext } from 'react-icons'
import { urlFor } from '@/lib/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/Firebase'
import { toast } from 'react-hot-toast'
import { useAuthContext } from '@/context/AuthContext'
import { InfinitySpin } from 'react-loader-spinner'

const SignIn = ({data: {logo, image, smallTitle, title, buttonText}}) => {

    const [error, setError] = useState(false) 
    const [errorMessage, setErrorMessage] = useState('')
    const { setAuthCredentials, isLoading, setIsLoading } = useAuthContext()
    const router = useRouter()

   const signIn = (e) => {
        e.preventDefault()
        const email = document.querySelector('#sign-in-email').value
        const password = document.querySelector('#sign-in-password').value
        setIsLoading(true)

        handleLogin(email, password)
   }

   const handleLogin = (email, password) => {
        setError(false)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                setAuthCredentials(email)
                toast.success('Logged in ' + email)
                router.push('/applicant')
                setIsLoading(false)

            }).catch((error) => {
                const errorCode = error.code
                setError(true)
                console.log(errorCode)
                setErrorMessage(errorCode.includes('user-not-found') 
                    ? 'User not Found' 
                    : errorCode.includes('network') 
                    ? 'Network connection error'
                    : 'Incorrect Email or Password')
                toast.error(errorCode.includes('user-not-found') 
                    ? 'User not Found' 
                    : errorCode.includes('network') 
                    ? 'Network connection error'
                    : 'Incorrect Email or Password')
                setIsLoading(false)
            })
   }

  return (
    <LoginContainer>
      <LoginWrap> 
          <LeftSide>
                <Link href='/'>
                    <LogoWrap><Logo src={urlFor(logo)} /></LogoWrap>
                </Link>
                {isLoading && <InfinitySpin width='200' color="var(--primaryDark)" />}
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

              <LoginForm onSubmit={signIn}>
                  <Label>Email</Label>
                  <Input id='sign-in-email' type='email' required placeholder='Enter your email address'  />
                  <Label>Password</Label>
                  <Input id='sign-in-password' type='password' required minLength='6' placeholder='Enter your password' />
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