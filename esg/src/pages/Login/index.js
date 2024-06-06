import React, { useState } from 'react'
import * as s from '../pages_style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import img from '../../img/logo_.jpg'


const Signin = () => {


    const { signin } = useAuth()
    const navigate = useNavigate()


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    const [emailValido, setEmailValido] = useState(true)
    const [showPass, setShowPass] = useState(false)


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const handleLogin = () => {
        if (!email || !senha) {
            setError('Preencha todos os campos.')
            return
        }

        const res = signin(email, senha)
        if (res) {
            setError(res)
            return
        }

        navigate("/home")
    }


    const toggleShowPassword = () => {
        setShowPass(!showPass)
    }


    return (
        <s.Container>
            <s.img src= {img} />
            <s.Content>
                <s.Label>Conecte-se aqui ↓</s.Label>
                <Input
                    type='email' placeholder='Digite seu email'
                    value={email}
                    onChange={(e) => {
                        const value = e.target.value;
                        setEmail(value);
                        setEmailValido(emailRegex.test(value));
                        setError('');
                    }}
                />
                {!emailValido && <s.LabelError>Email inválido!</s.LabelError>}


                <s.DivSenha>
                    <Input
                        type={showPass ? 'text' : 'password'}
                        placeholder='Digite sua senha'
                        value={senha}
                        onChange={(e) => {
                            setSenha(e.target.value);
                            setError('');
                        }}
                    />
                    <s.SpanSenha
                        onClick={toggleShowPassword}
                    >
                        {showPass ? <FaEyeSlash /> : <FaEye />}
                    </ s.SpanSenha>
                </s.DivSenha>
               
                {error && <s.LabelError>{error}</s.LabelError>}
                <Button Text='Conectar' onClick={handleLogin} />
               
                <s.LabelSignup>
                    Ainda não tem uma conta?
                    <s.Strong>
                        <Link to='/signup'>&nbsp; Registre-se!</Link>
                    </s.Strong>
                </s.LabelSignup>
            </s.Content>
        </s.Container>
    )
}


export default Signin




