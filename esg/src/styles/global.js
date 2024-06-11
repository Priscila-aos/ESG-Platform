import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    }

    body {
        width: 100%;
        heigth: 100%;
        font-family: Ubuntu, Fira Code;
        background-size: cover; center fixed;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    }
`;

export default GlobalStyle;

