import { useContext } from 'react';
import styled from "styled-components";

import { CalcContext } from '../CalcContext';

const Styled = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 1.5rem;
  background-color: ${ ({ theme }) => theme.toggleKeyboradBg };
  padding: 0.5rem;

  & > nav{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    top:-1.2rem;
    left:50%;
    transform: translateX(-50%);
    
    label {
      font-weight: 700;
    }
  }

  & input[type="button"]{
    height: 1rem;
    width: 1rem;
    border: none;
    border-radius: 1rem;
    opacity: 0;
    background-color: ${ ({ theme }) => theme.delResetColor };
    
    &.active{
      opacity: 1;
    }
    
  }

`;

export const Theme = () => {

  const { theme , setTheme } = useContext( CalcContext );

  const handleThemeChange = ( change ) => {
    setTheme( th => th = change );
    localStorage.setItem('theme', change);
  }

  return (
    <Styled onSubmit={ (e) => e.preventDefault() } aria-hidden="true">
      <nav>
        <label htmlFor="one">1</label>
        <label htmlFor="two">2</label>
        <label htmlFor="three">3</label>
      </nav>
      <input type="button" id='one' className={ theme === 'one' ? 'active' : undefined } onClick={ () => handleThemeChange( 'one' ) } value=''/>
      <input type="button" id='two' className={ theme === 'two' ? 'active' : undefined } onClick={ () => handleThemeChange( 'two' ) } value=''/>
      <input type="button" id='three' className={ theme === 'three' ? 'active' : undefined } onClick={ () => handleThemeChange( 'three' ) } value=''/>
    </Styled>
  )
}
