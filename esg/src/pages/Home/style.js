import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 20px;
  font-family: 'Ubuntu';
  background-size: cover;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  position: relative;
`;

export const Texto = styled.div`
  text-align: justify;
`;

export const Title = styled.h3`
  color: #1D4500;
  text-align: center;
`

export const Strong = styled.strong`
  fontweight: 500
`

export const Img = styled.img`
width: 80px;
display: block;
margin: 0 auto;
margin-bottom: 20px;
`

