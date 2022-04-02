import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyles, Themes } from "./Style";
import { CalcContext } from "./CalcContext";
import { useCalc } from "./hooks/useCalc";

import { Keypad } from "./keypad/Keypad";
import { Header } from "./header/Header";
import { Screen } from "./screen/Screen";

export const Calc = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "one");

  const calc = useCalc();

  return (
    <CalcContext.Provider value={{ theme, setTheme, calc }}>
      <ThemeProvider theme={Themes[theme]}>
        <GlobalStyles />
        <Main>
          <Header />
          <Screen />
          <Keypad />
          <Footer>
            <div>
              <span>Challenge by </span>
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                rel="noreferrer"
              >
                Frontend Mentor
              </a>
            </div>
            <div>
              <span>Coded by </span>
              <a 
                href="https://haroldmoreno.com"
                target="_blank"
                rel="noreferrer"
              >
                Harold Moreno
              </a>
            </div>
          </Footer>
        </Main>
      </ThemeProvider>
    </CalcContext.Provider>
  );
};

const Main = styled.main`
  min-height: 100%;
  width: 100%;
  padding: 2rem 1rem;
  display: grid;
  grid-template-rows: 2.5rem 6rem 27rem 2rem;
  grid-template-columns: 1fr;
  align-content: center;
  gap: 1.5rem;

  @media ( min-width: 470px ){
    width: 420px;
    margin-inline: auto;
  }
  @media ( min-width: 768px ){
    width: 580px;
    /* grid-template-rows: 2.5rem 6rem 31rem 2rem; */
  }
  @media ( min-width: 992px ){
    width: 620px;
  }
`;

const Footer = styled.footer`
  grid-row: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;