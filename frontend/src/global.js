import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   html, body {
        margin: 0;
        padding: 0;
        max-width: 100vw;
        box-sizing: border-box;
        outline: none;
        user-select: none;
        -webkit-user-select: none;
        overflow-x: hidden;
     }
`
export default GlobalStyles

