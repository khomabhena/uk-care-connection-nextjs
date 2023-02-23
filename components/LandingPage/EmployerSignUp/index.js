import React, { useState, useContext } from 'react'
import { ErrorContainer, ErrorMessage, Input, Label, LeftSide, LoginButton, LoginContainer, 
    LoginForm, LoginWrap, Logo, LogoWrap, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './EmployerSignUpElements'
import { IconContext } from 'react-icons'
import { ImWarning } from 'react-icons/im'
import { urlFor } from '@/lib/client'
import Link from 'next/link'


const EmployerSignUp = ({data: {logo, image, smallTitle, title, buttonText}}) => {

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [data, setData] = useState({
        companyName: '',
        country: '',
        phone: '',
        email: ''
    })

  return (
    <LoginContainer>
        <LoginWrap>
        
            <LeftSide>
                <Link href='/'>
                    <LogoWrap><Logo src={urlFor(logo)} /></LogoWrap>
                </Link>
                <Svg src={urlFor(image)} />
            </LeftSide>

            <RightSide>
                <TextWelcome>{title}</TextWelcome>
                <TextSignin>{smallTitle}</TextSignin>

                <LoginForm>
                    <Label>Company Name</Label>
                    <Input type='text' placeholder='Enter your Company Name' onChange={(e) => setData(prev => ({...prev, companyName: e.target.value}))} />
                    <Label>Country of Registration</Label>
                    <Input type='text' placeholder='Enter your country of registration' onChange={(e) => setData(prev => ({...prev, country: e.target.value}))} />
                    <Label>Phone Number</Label>
                    <Input type='text' placeholder='Enter your phone number' onChange={(e) => setData(prev => ({...prev, phone: e.target.value}))} />
                    <Label>Email Address</Label>
                    <Input type='email' placeholder='Enter your email address' onChange={(e) => setData(prev => ({...prev, email: e.target.value}))} />
                    <Label>Password</Label>
                    <Input type='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                    <Label>Confirm Password</Label>
                    <Input type='password' placeholder='Confirm your password' onChange={(e) => setConfirmPassword(e.target.value)} />

                    <ErrorContainer error={error}>
                        <IconContext.Provider value={{color : 'var(--red)'}}>
                            <ImWarning />
                        </IconContext.Provider>
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                    </ErrorContainer>
                    
                    <LoginButton type='submit' >{buttonText}</LoginButton>
                    <Link href='employer-sign-in'>
                        <SignupButton>Already a member? Sign In</SignupButton>
                    </Link>
                </LoginForm>
            </RightSide>

        </LoginWrap>
    </LoginContainer>
  )
}

export default EmployerSignUp