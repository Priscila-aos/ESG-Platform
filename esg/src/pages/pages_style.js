
import styled from 'styled-components'
// import background from '../img/bg_.jpg' (background: url(${background}) no-repeat center center fixed;)

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
    gap: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: rgba(190, 196, 194,0.3);
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
    color: #1D4E59;
    font-family: Ubuntu;
`;

export const LabelSignup = styled.label`
    font-size: 14px;
    color: black;
    
`;

export const LabelError = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #e74c3c;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #0000FF;
        transition: color 0.3s ease;

        &:hover {
            color: black;
        }
    }
`;

export const img = styled.img`
    width: 500px
`

export const LabelSignin = styled.label`
    font-size: 14px;
    color: #333;
    text-align: center;
`;

export const SpanSenha = styled.span`
    position: absolute;
    right: 19px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;

export const DivSenha = styled.div`
    position: relative;
    width: 83%;
`;


