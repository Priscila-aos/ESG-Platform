// import React from 'react';
// import * as s from '../pages_style';
// import Header from '../../components/Header'
// import Footer from '../../components/Footer'; 

// const Pontos = () => {
//     return (
//         <>
//             <Header /> {/* Renderize o componente Header */}
//             <div>
//                 Hanking de pontuação
//             </div>
//             <Footer /> {/* Renderize o componente Footer */}
//         </>
//     );
// }

// export default Pontos;

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as s from '../pages_style'; // Import styled components from the pages_style file

const Pontos = () => {
    return (
        <>
            <Header />
            <s.Container>
                <s.Content>
                    <h1 className="text-3xl font-bold text-center mb-8">Hanking de Pontuação</h1>
                    <s.CardList>
                        <s.Content>
                            <s.Label>Você ainda não tem pontos</s.Label>
                            <h3 className="text-9xl text-gray-950 text-center mb-4">0</h3>
                            <button className="bg-[#F27E63] hover:bg-[#F27E64] hover:scale-105 active:scale-100 transition-all text-gray-950 font-bold py-2 px-4 rounded">
                                Entrar ou cadastre-se
                            </button>
                        </s.Content>
                        <s.Content>
                            <s.Label>Sistema de pontuação</s.Label>
                            <p className="w-4/5 text-gray-950 text-center mb-4">Ganhe pontos ao participar de atividades ESG e troque por brindes</p>
                            <button className="bg-[#F27E63] hover:bg-[#F27E64] hover:scale-105 active:scale-100 transition-all text-gray-950 font-bold py-2 px-4 rounded">Veja como funciona</button>
                        </s.Content>
                        <s.Content>
                            <s.Label>Histórias dos participantes do programa</s.Label>
                            <p className="w-4/5 text-gray-950 text-center mb-4">O nosso programa conta com 1000+ participantes que já estão fazendo a diferença</p>
                            <button className="bg-[#F27E63] hover:bg-[#F27E64] hover:scale-105 active:scale-100 transition-all text-gray-950 font-bold py-2 px-4 rounded">Veja suas histórias</button>
                        </s.Content>
                    </s.CardList>
                </s.Content>
            </s.Container>
            <Footer />
        </>
    );
}

export default Pontos;


