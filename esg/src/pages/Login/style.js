import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`

export const Content = styled.div`
    display: flex;    
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    gap: 15px;
    box-shadow: 0 1px 2px gray;
    background-color: white;
    width: 100%; 
    max-width: 30%;
    padding: 10px;
    border-radius: 1rem;
`;
    
export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: gray;`