import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./global";
import theme from "./theme";
import quotes from "./constants/quotes.json";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  useEffect(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);

    const interval = setInterval(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <div className="App">
        <Nav>
          <BrandText>Theme With Styled-Components</BrandText>
          <ToggleButton
            currentTheme={currentTheme}
            onClick={() => {
              if (currentTheme === "light") {
                setCurrentTheme("dark");
              } else {
                setCurrentTheme("light");
              }
            }}
          >
            <span></span>
          </ToggleButton>
        </Nav>
        <Main>
          <Quote>{quote.text}</Quote>
          <Author>~{quote.author}</Author>
        </Main>
      </div>
    </ThemeProvider>
  );
}

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  z-index: 1;
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;

const BrandText = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.primary};
  font-weight: bold;
`;

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: 2px;
  width: 35px;
  height: 20px;
  font-weight: solid;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  position: relative;
  display: flex;
  align-items: center;

  > span {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.color.indicator};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    position: absolute;
    left: ${({ currentTheme }) => (currentTheme === "light" ? "0" : "unset")};
    right: ${({ currentTheme }) => (currentTheme === "dark" ? "0" : "unset")};
  }
`;

const Quote = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: medium;
  margin: 0;
  text-align: center;
`;

const Author = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: center;
  display: block;
  margin-top: 10px;
`;

export default App;
