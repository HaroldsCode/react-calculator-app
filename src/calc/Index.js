import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, Themes, Main, Footer } from "./Style";
import { CalcContext } from "./CalcContext";
import { useCalc } from "./hooks/useCalc";

import { Keypad } from "./keypad/Keypad";
import { Header } from "./header/Header";
import { Screen } from "./screen/Screen";

export const Index = () => {

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
