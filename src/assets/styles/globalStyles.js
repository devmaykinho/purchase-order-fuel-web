import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    html, body, .root {
      height: 100%;
    }

    /* html {
        overflow: initial;
        scroll-behavior: smooth;
    }

    body {
        overflow: initial;

        &.modal-open {
            position: relative;
        }
    } */

`;

export default GlobalStyle;
