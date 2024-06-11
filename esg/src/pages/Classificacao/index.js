import React, { useState, useEffect } from 'react';
import * as s from '../pages_style';
import { api } from '../../axios/axios';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import useAuth from '../../hooks/useAuth';

const Ranking = () => {
  const [classificacoes, setClassificacoes] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    // Função para calcular o total de pontos de cada empresa
    const calcularClassificacoes = (postagens) => {
      const agrupadoPorDominio = agruparPorDominio(postagens);
      const classificacoes = Object.entries(agrupadoPorDominio).map(([dominio, postagens]) => {
        const totalPontos = postagens.reduce((acc, postagem) => acc + postagem.pontuacao, 0);
        return { dominio, totalPontos };
      });

      // Ordena as empresas pelo total de pontos em ordem decrescente
      classificacoes.sort((a, b) => b.totalPontos - a.totalPontos);

      // Destaca as três melhores empresas
      if (classificacoes.length >= 3) {
        classificacoes[0].destacado = true;
        classificacoes[1].destacado = true;
        classificacoes[2].destacado = true;
      }

      return classificacoes;
    };

    // Função para agrupar as postagens pelo domínio do email
    const agruparPorDominio = (postagens) => {
      return postagens.reduce((acc, postagem) => {
        const dominio = postagem.email.split('@')[1];
        if (!acc[dominio]) {
          acc[dominio] = [];
        }
        acc[dominio].push(postagem);
        return acc;
      }, {});
    };

    // Faz uma requisição à API para obter todas as postagens
    api.get('/posts')
      .then((response) => {
        const postagens = response.data;
        const classificacoes = calcularClassificacoes(postagens);
        setClassificacoes(classificacoes);
      })
      .catch((error) => {
        console.error('Erro ao obter postagens:', error);
      });
  }, [user]);

  return (
    <>
      <Header />
      <s.ClassificacaoContainer>
        <s.Podio>
          {classificacoes.slice(0, 3).map((empresa, index) => (
            <s.Empresa key={index} destacado={empresa.destacado && user.email.includes(empresa.dominio)}>
              {empresa.dominio}: {empresa.totalPontos} pontos
            </s.Empresa>
          ))}
        </s.Podio>
        <s.OutrasEmpresas>
          {classificacoes.slice(3).map((empresa, index) => (
            <s.Empresa key={index} destacado={empresa.destacado && user.email.includes(empresa.dominio)}>
              {empresa.dominio}: {empresa.totalPontos} pontos
            </s.Empresa>
          ))}
        </s.OutrasEmpresas>
      </s.ClassificacaoContainer>
      <Footer />
    </>
  );
};

export default Ranking;
