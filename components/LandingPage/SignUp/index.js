import React, { useContext, useState } from 'react'
import { ErrorContainer, ErrorMessage, Input, Label, LeftSide, LoginButton, LoginContainer, 
    LoginForm, LoginWrap, Logo, LogoWrap, RightSide, SignupButton, Svg, TextSignIn, TextWelcome } from './SignUpElements'
import logo from '../../../public/images/logo-big.PNG'
import svg from '../../../public/images/svg-signup.svg'
import { ImWarning } from 'react-icons/im'
import { IconContext } from 'react-icons'
import Link from 'next/link'
import { urlFor } from '@/lib/client'


const SignUp = ({data: {logo, image, smallTitle, title, buttonText}}) => {

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [data, setData] = useState({
        address: '',
        country: '',
        cv: '',
        cvUrl: '',
        experience: [],
        facebook: '',
        id: '',
        idUrl: '',
        intro: '',
        languages: [],
        phone: '',
        profession: '',
        profile: '',
        profileUrl: '',
        qualifications: [],
        twitter: '',
        uid: '',
        whatsapp: '',
        firstName: '',
        lastName: '',
        email: ''
    })

  return (
    <LoginContainer>
        <LoginWrap>
            
            <LeftSide>
                <Link href='/'>
                    <LogoWrap to="/"><Logo src={urlFor(logo)} /></LogoWrap>
                </Link>
                <Svg src={urlFor(image)} />
            </LeftSide>

            <RightSide>
                <TextWelcome>{title}</TextWelcome>
                <TextSignIn>{smallTitle}</TextSignIn>


                <LoginForm onSubmit=''>
                    <Label>First Name</Label>
                    <Input required type='text' placeholder='Enter your First Name' onChange={(e) => setData(prev => ({...prev, firstName: e.target.value}))} />
                    <Label>Last Name</Label>
                    <Input required type='text' placeholder='Enter your Last Name' onChange={(e) => setData(prev => ({...prev, lastName: e.target.value}))} />
                    <Label>Email Address</Label>
                    <Input required type='email' placeholder='Enter your email address' onChange={(e) => setData(prev => ({...prev, email: e.target.value}))} />
                    <Label>Password</Label>
                    <Input required type='password' minLength='6' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                    <Label>Confirm Password</Label>
                    <Input required type='password' minLength='6' placeholder='Confirm your password' onChange={(e) => setConfirmPassword(e.target.value)} />
                    
                    <ErrorContainer error={error}>
                        <IconContext.Provider value={{color : 'var(--red)'}}>
                            <ImWarning />
                        </IconContext.Provider>
                        <ErrorMessage>{errorMessage}</ErrorMessage>
                    </ErrorContainer>

                    <LoginButton type='submit'>{buttonText}</LoginButton>
                    <Link href='/sign-in'>    
                        <SignupButton>Already a member? Sign In</SignupButton>
                    </Link>
                </LoginForm>
            </RightSide>

        </LoginWrap>
    </LoginContainer>
  )
}

export default SignUp