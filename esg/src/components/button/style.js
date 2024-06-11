import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 20px;
    outline: none;
    border: none;
    border-radius: 10px;
    width: 35%;
    max-width: 35%;
    background-color: rgba(4, 110, 229, 0.8);
    color: white;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(4, 110, 229, 1);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        color: black;
    }


    &:active {
        background-color: rgba(4, 110, 229, 0.9);
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
        transform: translateY(1px);
    }


    &:focus {
        outline: 2px solid rgba(4, 110, 229, 0.5);
    }
`;

