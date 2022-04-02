import { useContext } from "react";
import styled from "styled-components";

import { CalcContext } from "../CalcContext";

export const Key = ({ky, clss}) => {

  const { calc } = useContext(CalcContext);
  const { handlerType, handlerCalc, handlerReset, handlerDelete } = calc;

  const handleKeyClick = (k, c) => {
    if ( !!c ) {
      if (c === "reset") {
        handlerReset();
      }
      if (c === "equals") {
        handlerCalc();
      }
      if (c === "del") {
        handlerDelete();
      }
    } else {
      handlerType(k)
    }
  }

  return ( 
    <Styled 
      className={ !!clss ? clss : undefined }
      onClick={() => handleKeyClick( ky, clss )}
    >{ky}</Styled>
  )
}

const Styled = styled.button`
  position: relative;
  padding-block: 1rem;
  font-weight: 700;
  font-size: 2rem;
  border: none;
  border-radius: 5px;
  background-color: ${ ({ theme }) => theme.keyBg };
  color: ${ ({ theme }) => theme.fontKeyColor }; 
  box-shadow: inset 0px -4px 0px 0px ${ ({ theme }) => theme.keyShadow };
  cursor: pointer;
  
  &.reset {
    grid-column: 1 / span 2;
    font-size: 1.2rem;
    background-color: ${ ({ theme }) => theme.delResetBg };
    box-shadow: inset 0px -4px 0px 0px ${ ({ theme }) => theme.delRestShadow };
    color: hsl(0, 0%, 100%)
  }
  
  &.del {
    font-size: 1.2rem;
    background-color: ${ ({ theme }) => theme.delResetBg };
    box-shadow: inset 0px -4px 0px 0px ${ ({ theme }) => theme.delRestShadow };
    color: hsl(0, 0%, 100%)
  }
  
  &.equals {
    grid-column: 3 / 5;
    font-size: 1.2rem;
    background-color: ${ ({ theme }) => theme.equalsToggleColor };
    box-shadow: inset 0px -4px 0px 0px ${ ({ theme }) => theme.equalsShadow };
    color: ${ ({ theme }) => theme.equalsColor };
  }
  
  /* @media ( min-width: 470px ){
    width: 420px;
    margin-inline: auto;
  } */
  @media ( min-width: 768px ){
    padding-block: 0;
    font-size: 2.3rem;
    border-radius: 8px;

    &.equals, &.reset {
      padding-block: 0.5rem;
    }
  }
  /* @media ( min-width: 992px ){
    width: 620px;
  } */
`;