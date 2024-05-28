import React from 'react'
import { useContext } from 'react'
import {AuthContext} from '../contexts/auth'

//refct e rafec
const useAuth = () => {
    const context = useContext(AuthContext)   
    return context
}

export default useAuth
