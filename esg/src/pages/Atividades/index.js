import React, { useState, useEffect} from 'react'
import * as s from '../pages_style'
import {api} from '../../axios/axios'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

const Activities = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    api.get('/posts')
    .then((response) => {
      setPosts(response.data)
    })
    .catch((e) => {
      console.log(e)
    })
  }, [])

  return (
    <>
    <Header />
    <Link to="/createactivities">Criar atividade!</Link>
    <s.Container>
      <s.CardList>
        {posts.map((post) => (
          <Card
            key={post.id}
            nome={post.nome}
            email={post.email}
            categoria={post.categoria}
            atividade={post.Atividade}
            pontos={post.Pontos}
          />
        ))}
      </s.CardList>
    </s.Container>
    <Footer />  
  </>
  )
}

export default Activities