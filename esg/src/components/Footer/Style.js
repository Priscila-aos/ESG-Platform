import styled from 'styled-components'

export const Container = styled.footer`
    background-color: #1D4500;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
`

export const SocialIcons = styled.div`
    margin: 2px 0;


    a {
        color: #fff;
        margin: 0 15px;
        font-size: 20px;
        transition: color 0.3s;


        &:hover {
            color: #7A9F2B;
        }
    }
`

export const DeveloperInfo = styled.div`
    font-size: 12px;
    margin: 2px 0;
`
