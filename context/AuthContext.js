import { toast } from "react-hot-toast"
import React, { createContext, useContext, useState } from 'react'

export const Context = createContext()

export const AuthContext = ({ children }) => {
    const getLocalStorage = (name) => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(name)
        }
    }

    const setLocalStorage = (name, value) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(name, value)
        }
    }

    const clearLocalStorage = () => {
        if (typeof window !== 'undefined') {
            localStorage.clear()
        }
    }


    const [userEmail, setUserEmail] = useState(getLocalStorage('userEmail') || '')
    const [isLoading, setIsLoading] = useState(false)
   
    const logoutUser = () => {
        setUserEmail('')
        clearLocalStorage()
        toast.success('Logged Out')
    }

    const setAuthCredentials = (email) => {
        setUserEmail(email)
        setLocalStorage('userEmail', email)
    }

    return (
        <Context.Provider value={
            {
                userEmail, isLoading, setIsLoading,
                logoutUser, setAuthCredentials
            }
        }>
            {children}
        </Context.Provider>
    )
}

export const useAuthContext = () => useContext(Context)