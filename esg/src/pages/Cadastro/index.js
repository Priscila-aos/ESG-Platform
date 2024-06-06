import React, { useState } from 'react'
import * as s from '../pages_style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import img from '../../img/logo_.jpg'


const Signup = () => {
   
    const [email, setEmail] = useState('')
    const [emailConf, setEmailConf] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    const [emailValido, setEmailValido] = useState(true)
    const [showPass, setShowPass] = useState(false)


    const navigate = useNavigate()
    const { signup } = useAuth()


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailValido(emailRegex.test(value));
        setError('');
    }


    const handleSignup = () => {


        if (!email | !emailConf | !senha) {
            setError('Preencha todos os campos');
            return;
        }


        else if (email !== emailConf) {
            setError('Emails não são iguais!');
            return;
        }


        const res = signup(email, senha);


        if (res) {
            setError(res);
            return;
        }


        alert('Usuário cadastrado com sucesso!');
        navigate('/');
    }


    const toggleShowPassword = () => {
        setShowPass(!showPass)
    }


    return (
        <s.Container>
            <s.img src= {img} />
            <s.Content>
                <s.Label> Registre-se aqui ↓ </s.Label>
                <Input
                    type='email'
                    placeholder='Digite seu melhor email'
                    value={email}
                    onChange={handleEmailChange}
                />
                {!emailValido && <s.LabelError>Email inválido!</s.LabelError>}


                <Input
                    type='email'
                    placeholder='Digite seu email novamente'
                    value={emailConf}
                    onChange={(e) => {
                        setEmailConf(e.target.value);
                        setError('');
                    }}
                />


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


                <Button Text='Inscreva-se' onClick={handleSignup}/>


                <s.LabelSignin>
                    Já tem uma conta?
                    <s.Strong>
                        <Link to='/'>&nbsp; Entre </Link>
                    </s.Strong>
                </s.LabelSignin>
            </s.Content>
        </s.Container>
    )
}


export default Signup




