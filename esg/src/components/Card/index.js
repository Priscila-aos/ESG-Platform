import * as s from './style'

const Card = ({ nome, email, categoria, atividade, pontos }) => {
    return (
      <s.CardContainer>
        <s.CardHeader>{nome}</s.CardHeader>
        <s.CardSubHeader>{categoria}</s.CardSubHeader>
        <s.CardBody>Email: {email}</s.CardBody>
        <s.CardBody>Atividade: {atividade}</s.CardBody>
        <s.CardBody>Pontos: {pontos}</s.CardBody>
      </s.CardContainer>
    )
  }
  
  export default Card