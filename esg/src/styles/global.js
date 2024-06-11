import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
    margin: 0,
    padding: 0,
    box-sizing: border-box
    }

    body {
        width: 100vw;
        heigth: 100vh;
        background-color: #f0f2f5;
        font-family: Ubuntu, Fira Code
          background-size: cover; center fixed;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
