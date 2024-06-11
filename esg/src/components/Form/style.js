import styled from 'styled-components'
import chekedImg from '../../img/logo.png'
import uncheckedImg from '../../img/img_unchecked.png'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw; 
  background-size: cover;
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: rgba(60,179,113,0.8);
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 20px;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
    }
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #555;
`;

export const Strong = styled.strong`
    margin-bottom: 20px;
    cursor: pointer;

    a {
        text-decoration: none;
        color: #173D00;
        transition: color 0.3s ease;

        &:hover {
            color: black;
        }
    }
`;

export const Line = styled.div` 
    display: flex;
    align-items: center; 
    margin-bottom: 4px;

`
export const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  position: relative;
  cursor: pointer;
  padding-left: 30px; /* Espaço para a imagem */
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Imagem para o botão de rádio não selecionado */
  span {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    background-size: cover;
    background-image: url(${uncheckedImg}); /* Imagem para o estado não selecionado */
  }

  input:checked ~ span {
    background-image: url(${chekedImg }); /* Imagem para o estado selecionado */
  }
`

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  /* Esconda o botão de rádio padrão */
`

export const IconError = styled.span`
  color: red;
  margin-left: 5px;  
`