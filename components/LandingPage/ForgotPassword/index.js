import { urlFor } from '@/lib/client'
import Link from 'next/link'
import React from 'react'
import { Input, Label, LeftSide, LoginButton, LoginContainer, 
  LoginForm, LoginWrap, Logo, LogoWrap, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './ForgotPasswordElements'


const ForgotPassword = ({data: {logo, image, smallTitle, title, buttonText}}) => {
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

              <LoginForm>
                  <Label>Email</Label>
                  <Input placeholder='Enter your email address' />
                  <LoginButton to="">{buttonText}</LoginButton>
                  <Link href='sign-in'>
                    <SignupButton>Remembered It? Go to Login</SignupButton>
                  </Link>
              </LoginForm>
          </RightSide>

      </LoginWrap>
  </LoginContainer>
  )
}

export default ForgotPassword