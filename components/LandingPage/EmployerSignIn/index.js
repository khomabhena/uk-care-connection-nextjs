import React, { useState } from 'react'
import { ForgotPassword, ForgotPasswordDiv, LogoWrap, Input, Label, LeftSide, LoginButton, LoginContainer, LoginForm, LoginWrap, Logo, RightSide, SignupButton, Svg, TextSignin, TextWelcome, ErrorContainer, ErrorMessage } from './EmployerSignInElements'
import { IconContext } from 'react-icons'
import { ImWarning } from 'react-icons/im'
import { urlFor } from '@/lib/client'
import Link from 'next/link'

const EmployerSignIn = ({data: {logo, image, smallTitle, title, buttonText}}) => {

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
            <LogoWrap>
                <Logo src={urlFor(logo)} />
            </LogoWrap>
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
                <Link href='forgot-password'>
                    <ForgotPasswordDiv>
                        <ForgotPassword>Forgot Password?</ForgotPassword>
                    </ForgotPasswordDiv>
                </Link>
                <LoginButton type='submit'>{buttonText}</LoginButton>
                <Link href='employer-sign-up'>
                    <SignupButton>Don't have an account? Sign Up</SignupButton>
                </Link>
            </LoginForm>
        </RightSide>

    </LoginWrap>
</LoginContainer>
  )
}

export default EmployerSignIn