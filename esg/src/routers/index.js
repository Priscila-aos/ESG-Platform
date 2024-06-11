import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Home from '../pages/Home';
import Signin from '../pages/Login';
import Signup from '../pages/Cadastro';
import Atividades from '../pages/Atividades';
import Contato from '../pages/Contato';
import Pontos from '../pages/Pontos';
import CreateActivities from "../pages/CriarAtividade";
import Ranking from '../pages/Classificacao';


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
                    <Route exact path='/classificacao' element={<Ranking />}/>
                    <Route exact path='/atividades' element={<Atividades />}/>
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/createactivities' element={<CreateActivities />} />
                    <Route exact path='/pontos' element={<Pontos />}/>
                    <Route exact path='/contato' element={<Contato />}/>
                    <Route path='/' element={<Signin />} />
                    <Route path='*' element={<Signin />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp