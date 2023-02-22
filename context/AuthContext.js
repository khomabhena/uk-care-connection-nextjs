import { toast } from "react-hot-toast"
import React, { createContext, useContext, useState } from 'react'

export const Context = createContext()

export const AuthContext = ({ children }) => {
    const getLocalStorage = (name) => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(name)
        }
    }

    const [currentUser, setCurrentUser] = useState(getLocalStorage('currentUser') || null)
    const [userEmail, setUserEmail] = useState(getLocalStorage('userEmail') || '')
    const [userUid, setUserUid] = useState(getLocalStorage('userUid') || '')
   
    const logoutUser = () => {
        setCurrentUser(null)
        setUserEmail('')
        setUserUid('')
        localStorage.clear()
        toast.success('Logged Out')
    }

    const setAuthCredentials = (uid, email) => {
        setUserUid(uid)
        setUserEmail(email)
        localStorage.setItem('userUid', uid)
        localStorage.setItem('userEmail', email)
    }

    return (
        <Context.Provider value={
            {
                currentUser, setCurrentUser, userEmail, userUid,
                logoutUser, setAuthCredentials
            }
        }>
            {children}
        </Context.Provider>
    )
}

export const useAuthContext = () => useContext(Context)