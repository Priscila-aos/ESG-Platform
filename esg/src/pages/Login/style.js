import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
    background: linear-gradient(to right, #BFD9D6, #ffffff);
`;


export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to right, #ece9e6, #ffffff);;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 20px;
    transition: all 0.3s ease;


    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.20);
    }
`;


export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #555;
`;


export const LabelSignup = styled.label`
    font-size: 14px;
    color: #333;
`;


export const LabelError = styled.label`
    font-size: 14px;
    color: #e74c3c;
`;


export const Strong = styled.strong`
    cursor: pointer;


    a {
        text-decoration: none;
        color: #007bff;
        transition: color 0.3s ease;


        &:hover {
            color: #0056b3;
        }
    }
`;



