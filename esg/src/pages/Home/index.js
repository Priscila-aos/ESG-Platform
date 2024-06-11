import React from 'react'
import * as s from './style'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import img from '../../img/logo.png'

const Home = () => {
    const navigate = useNavigate()
    const { signout } = useAuth()

    return (
        <>
        <Header/>
        <s.Container>
          <s.Title>Bem-vindo ao meu projeto sobre ESG</s.Title>
          <s.ContentWrapper>
            <s.Img src={img} />
            <s.Texto>
              <s.Strong>Olá! deixa eu te contar um pouco sobre ESG.</s.Strong>
              <p>No mundo dos negócios de hoje, os critérios ESG (Environmental, Social, and Governance) se tornaram essenciais para uma gestão responsável e sustentável. Adotar critérios ESG não só ajuda a preservar nosso planeta, mas também promove uma sociedade mais justa e equitativa, além de melhorar a governança corporativa. Empresas que seguem práticas ESG costumam ter um desempenho financeiro melhor a longo prazo, atraem investidores conscientes e constroem uma reputação positiva no mercado.</p>
 
              <br /><s.Strong>Vamos entender melhor a sigla.</s.Strong>
              <p>Em inglês, Environmental, Social and Governance, que traduzido para o português é Ambiental, Social e Governança. Esses três fatores são utilizados para medir a sustentabilidade e o impacto social de um investimento em uma empresa ou negócio. Abaixo vou resumir cada um deles para melhorar o entendimento.</p>
 
              <br /><p><s.Strong>Ambiental (E):</s.Strong> Refere-se à maneira como uma empresa gerencia os riscos e oportunidades ambientais, incluindo a utilização de recursos naturais, emissões de carbono, mudanças climáticas e políticas de resíduos.</p>
 
              <br /><p><s.Strong>Social (S):</s.Strong> Envolve a gestão das relações da empresa com funcionários, fornecedores, clientes e as comunidades onde opera. Inclui aspectos como condições de trabalho, direitos humanos, diversidade e impacto social.</p>
 
              <br /><p><s.Strong>Governança (G):</s.Strong> Diz respeito às práticas de governança corporativa da empresa, incluindo a estrutura do conselho de administração, ética empresarial, transparência e responsabilidade dos executivos.</p>
            </s.Texto>
          </s.ContentWrapper>
          <Button
            Text='Sair'
            onClick={() => [
              signout(),
              navigate('/')
            ]} />
        </s.Container>
        <Footer />
      </>
    )
}

export default Home



