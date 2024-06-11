import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Home from '../pages/Home';
import Signin from '../pages/Login';
import Signup from '../pages/Cadastro';
import Atividades from '../pages/Atividades';
import Contato from '../pages/Contato';
import Pontos from '../pages/Pontos';


const Private = ({Item}) => {
    const {signed} = useAuth();
    return signed > 0 ? <Item /> : <Signin />
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path = '/home' element={<Private Item={Home} />} />
                    <Route path='/' element={<Signin />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route path='*' element={<Signin />} />
                    <Route exact path='/atividades' element={<Atividades/>}/>
                    <Route exact path='/contato' element={<Contato/>}/>
                    <Route exact path='/pontos' element={<Pontos/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp