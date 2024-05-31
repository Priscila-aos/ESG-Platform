import React, {useState} from 'react'
import * as s from '../Cadastro/style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'

import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const[email, setEmail] = useState('')
    const[emailConf, sentEmailConf] = useState('')
    const[senha,setSenha] = useState('') 
    const[erro,setErro] = useState('')
    const[emailValido, setEmailValido] = useState(true)

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const handleEmailChange=(e) => {
        const value=e.target.value
        setEmail(value)
        setEmailValido(emailRegex.test(value))
        setErro('')
    }

    return(
        <s.Container>
            <s.Label> Registre-se aqui </s.Label>
        </s.Container>
    )

}

export default Signup
