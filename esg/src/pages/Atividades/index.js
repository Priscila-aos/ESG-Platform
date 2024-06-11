import React, { useState, useEffect} from 'react'
import * as s from '../pages_style'
import {api} from '../../axios/axios'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import useAuth from '../../hooks/useAuth'; 

const Activities = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth(); 

  useEffect(() => {
    if (!user) return; 

    if (user.email === "priscila@adm.com") {
  
      api.get('/posts')
        .then((response) => {
          setPosts(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      
      const userDomain = user.email.split('@')[1]; 
      api.get('/posts')
        .then((response) => {
          const filteredPosts = response.data.filter(post => post.email.split('@')[1] === userDomain); 
          setPosts(filteredPosts);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [user]); 



  return (
    <>
    <Header />
    <Link to="/createactivities">Criar atividade!</Link>
    <s.CardContainer>
      <s.CardList>
        {posts.map((post) => (
          <Card
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