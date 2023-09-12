import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset},
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
        
    }
    body {
        margin: 0 auto;
    }
    a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
    }
    button, 
    input, 
    textarea, 
    select, 
    option {
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        border: 0;
        outline: 0;
        background-color: transparent;
    }
    button:focus, 
    input:focus, 
    textarea:focus, 
    select:focus{
        outline: none;
    }
`;

export default GlobalStyles;
