import styled from 'styled-components'

export const Input = styled.input`
    outline: none;
    padding: 10px 15px;
    width: 80%;
    border-radius: 10px;
    font-size: 16px;
    background-color: rgba(240, 242, 245, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:focus {
        background-color: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(0, 123, 255, 0.5);
        box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
    }
`;