import React, {useState} from 'react'
import * as s from '../Cadastro/style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'

import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const[email, setEmail] = useState('')
    const[emailConf, setEmailConf] = useState('')
    const[senha,setSenha] = useState('') 
    const[erro,setErro] = useState('')
    const[emailValido, setEmailValido] = useState(true)
    const navigate = useNavigate()
    const {signup} = useAuth()

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const handleEmailChange=(e) => {
        const value=e.target.value
        setEmail(value)
        setEmailValido(emailRegex.test(value))
        setErro('')
    }
    const handleSignup=() =>{
        if(!email||!emailConf||!senha) {
            setErro('Preencha todos os campos!')
            return
        }
        if(!emailValido){
            setErro('E-mail invalido!')
            return
         }
        if(email!==emailConf){
            setErro('Verifique o e-mail de confirmação')
            return
        }
        const resp=signup(email,senha)
        if(resp){
            setErro(resp)
            return
        }
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
    }

    return(
        <s.Container>
            <s.Label> Registre-se aqui </s.Label>
            <s.Content>
                <Input 
                type='email'
                placeHolder='Digite seu e-mail'
                value={email}
                onChange={handleEmailChange}
                />
                {!emailValido && <s.LabelErro>E-mail invalido</s.LabelErro>}
               
                <Input 
                type='email'
                placeHolder='Digite seu e-mail novamente'
                value={emailConf}
                onChange={(e)=>{
                    setEmailConf(e.target.value)
                    setErro('')
                }}
                />

                <Input 
                type='password'
                placeHolder='Digite sua senha'
                value={senha}
                onChange={(e)=>{
                    setSenha(e.target.value)
                    setErro('')
                }}
                />
               <s.LabelErro>{erro}</s.LabelErro>
        
                <Button text='Cadastra-se' onClick={handleSignup}/>
                <s.LabelSignin>
                    Já tenho uma conta?
                    <s.Strong>
                        <Link to='/'>&nbsp; Entre!</Link>
                    </s.Strong>
                </s.LabelSignin>

            </s.Content>
        </s.Container>
    )

}

export default Signup
