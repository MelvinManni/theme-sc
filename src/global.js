import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    transition: 0.2s ease-in-out;
}

body{
    background-color: ${({ theme }) => theme.color.background};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


code {
     font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

app {
    min-height: 100vh;
    width: 100%;
}
`;

export default GlobalStyle;
