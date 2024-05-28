import React, {useState} from 'react';
import * as s  from './style';
import Input from '../../components/Input';
import Button from '../../components/Button'; 
import useAuth from '../../hooks/useAuth';
import { Link, link, useNavigate } from 'react-router-dom';

const Signin = () => {

    const {signin}=useAuth()
    const navigate = useNavigate()

    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    const [erro, setErro]=useState('')

    const handleLogin =() => {
        if (!email|!senha) {
            setErro('Preencha todos os campos')
            return  
        } 
        const resp=signin(email,senha)
        if(resp) {
            setErro(resp)
            return 
        }
        navigate('/home')
    }

    return(
        <s.Container>
            <s.Label> Faça seu login </s.Label>     
            <s.Content>
                <Input
                    Type='email' PlaceHolder='Digite seu e-mail aqui' Value={email}
                    onChange={(e) => [
                        setEmail(e.target.value,setErro(''))
                    ]}
                />        
            </s.Content>      
        </s.Container>

    )

}
export default Signin;
