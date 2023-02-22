import React, { useState, useContext } from 'react'
import { ErrorContainer, ErrorMessage, Input, Label, LeftSide, LoginButton, LoginContainer, 
    LoginForm, LoginWrap, Logo, LogoWrap, RightSide, SignupButton, Svg, TextSignin, TextWelcome } from './EmployerSignUpElements'
import logo from '../../../images/logo-big.PNG'
import svg from '../../../images/svg-signup.svg'
import { useNavigate } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { ImWarning } from 'react-icons/im'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../../Firebase'
import { AuthContext } from '../../Context/AuthContext'
import { doc, setDoc } from "firebase/firestore"; 


const EmployerSignUp = () => {
    const navigate = useNavigate()

    const {setCurrentUser, setAuthCredentials} = useContext(AuthContext)
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

    const handleUploadData = async (uid) => {
        setError(false)

        try {await setDoc(doc(db, "employers", localStorage.getItem('userEmail')), {
            ...data, uid: uid
          });
        navigate('/employer')
        } catch (e) {
            setError(true)
            setErrorMessage(e.message)
        }
    } 

    const handleSignup = (e) => {
        setError(false)
        e.preventDefault()
        if (password !== confirmPassword) {
            setError(true)
            setErrorMessage('Passwords do not match!!')
        } else {
            createUserWithEmailAndPassword(auth, data.email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setCurrentUser(JSON.stringify(user))
                    localStorage.setItem('currentUser', JSON.stringify(user))
                    setAuthCredentials(user.uid, user.email)

                    handleUploadData(user.uid)
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMsg = error.message;
                    setError(true)
                    setErrorMessage('Account with this Email already exists!!')
                    // ..
            });
        }
    }

    // const goBack = () => {
    //     navigate(-1)
    // }

  return (
    <LoginContainer>
        <LoginWrap>
            
            <LeftSide>
                <LogoWrap to="/"><Logo src={logo} /></LogoWrap>
                <Svg src={svg} />
            </LeftSide>

            <RightSide>
                <TextWelcome>Employer Sign Up</TextWelcome>
                <TextSignin>Sign Up and get access to all the features.</TextSignin>

                <LoginForm onSubmit={handleSignup}>
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
                    
                    <LoginButton type='submit' >Sign Up</LoginButton>
                    <SignupButton to="/employer-sign-in">Already a member? Sign In</SignupButton>
                </LoginForm>
            </RightSide>

        </LoginWrap>
    </LoginContainer>
  )
}

export default EmployerSignUp