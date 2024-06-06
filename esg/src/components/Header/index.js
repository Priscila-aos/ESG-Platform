import React from 'react'
import * as s from './style'

const Header = () => {
  return (
    <s.Container>
            <s.ListMenu to="/home">Página Inicial</s.ListMenu>
            <s.ListMenu to="/activities">Atividades</s.ListMenu>
            <s.ListMenu to="/mypoints">Meus Pontos</s.ListMenu>
            <s.ListMenu to="/talktome">Fale Comigo</s.ListMenu>
    </s.Container>
 
 )
}

export default Header




