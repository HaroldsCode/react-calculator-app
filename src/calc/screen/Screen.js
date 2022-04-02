import { useContext } from 'react';
import styled from "styled-components";

import { CalcContext } from '../CalcContext';

export const Screen = () => {

  const { calc : { screen } } = useContext( CalcContext );
  const { firstNumber, secondNumber, operator } = screen;

  return (
    <Styled>
      {/* <span>{ !!secondNumber ? secondNumber : !!operator ? operator : firstNumber }</span> */}
      <span>{firstNumber}{operator}{secondNumber}</span>
    </Styled>
  )
}

const Styled = styled.section`
  position: relative;
  overflow: hidden;
  grid-row: 2;
  font-weight: 700;
  font-size: 3rem;
  padding: 1.5rem 1rem 0.5rem 1rem;
  border-radius: .7rem;
  background-color: ${ ({ theme }) => theme.displayBg };
  display: flex;
  justify-content: end;
  
  & > span{
    width: auto;
    overflow: hidden;
    cursor:text;
  }
`;