import React, { useState, useEffect} from 'react'
import * as s from '../pages_style'
import { api } from '../../axios/axios'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import useAuth from '../../hooks/useAuth'; 

const Activities = () => {
  const [posts, setPosts] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const { user } = useAuth(); 

  useEffect(() => {
    if (!user) return;

    // Faz uma requisição à API para obter as postagens pelo email completo do usuário
    api.get(`/posts?email=${user.email}`)
      .then((response) => {
        setPosts(response.data);

        // Calcula o total de pontos somando as pontuações de todas as postagens
        const total = response.data.reduce((acc, post) => acc + post.pontuacao, 0);
        setTotalPoints(total);
      })
      .catch((error) => {
        console.error('Erro ao obter postagens:', error);
      });
  }, [user]); 

  return (
    <>
      <Header />
      <s.TotalPoints>Total de pontos: {totalPoints}</s.TotalPoints>
      <s.CardContainer>
        <s.CardList>
          {posts.map((post) => (
            <Card
              key={post.id}
              email={post.email}
              categoria={post.categoria}
              atividade={post.atividade}
              pontos={post.pontuacao}
            />
          ))}
        </s.CardList>
      </s.CardContainer>
      
      <Footer />  
    </>
  )
}

export default Activities
