import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as s from '../pages_style'; // Importando estilos

const Contato = () => {
    return (
        <>
            <Header />
            <s.Container> 
                <s.Content> 
                    <h1>Fale comigo</h1>
                    <div>
                        <p>
                            <strong>Ranking de Pontuação</strong>
                        </p>
                        <p>
                            Bem-vindo ao Ranking de Pontuação! Aqui, você pode acompanhar sua pontuação e descobrir como você pode ganhar pontos para se destacar.
                        </p>
                        <p>
                            <strong>Você ainda não tem pontos</strong>
                        </p>
                        <p>
                            No momento, sua pontuação é de <strong>0 pontos</strong>. Mas não se preocupe, você pode começar a ganhar pontos participando das atividades relacionadas ao ESG!
                        </p>
                        <p>
                            Para começar, você pode se cadastrar ou fazer login para acessar todas as funcionalidades e começar a acumular pontos.
                        </p>
                        <p>
                            <strong>Sistema de Pontuação</strong>
                        </p>
                        <p>
                            Nosso sistema de pontuação é simples: quanto mais você se envolve em atividades ESG, mais pontos você ganha. Esses pontos podem ser trocados por brindes incríveis!
                        </p>
                        <p>
                            Deseja saber mais sobre como funciona o sistema de pontuação? Clique no botão abaixo para obter mais informações.
                        </p>
                        <p>
                            <strong>Histórias dos Participantes do Programa</strong>
                        </p>
                        <p>
                            Nossa comunidade já está crescendo! Temos mais de 1000 participantes como você que estão fazendo a diferença por meio de suas atividades ESG.
                        </p>
                        <p>
                            Descubra as histórias inspiradoras dos nossos participantes e veja como você também pode fazer parte dessa mudança.
                        </p>
                    </div>
                </s.Content>
            </s.Container>
            <Footer />
        </>
    );
}

export default Contato;
