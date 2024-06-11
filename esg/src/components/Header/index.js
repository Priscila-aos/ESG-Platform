import React from 'react'
import * as s from './style'

const Header = () => {
  return (
    <s.Container>
            <s.ListMenu to="/home">Página Inicial</s.ListMenu>
            <s.ListMenu to="/atividades">Atividades</s.ListMenu>
            <s.ListMenu to="/pontos">Meus Pontos</s.ListMenu>
            <s.ListMenu to="/contato">Contato</s.ListMenu>
    </s.Container>
 
 )
}

export default Header




