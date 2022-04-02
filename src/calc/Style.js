import styled, { createGlobalStyle } from 'styled-components';

export const Themes = {
  one: {
    mainBg: 'hsl(222, 26%, 31%)',
    toggleKeyboradBg: 'hsl(223, 31%, 20%)',
    displayBg: 'hsl(224, 36%, 15%)',
    keyboardBg: 'hsl(223, 31%, 20%)',
    delResetBg: 'hsl(225, 21%, 49%)',
    keyBg: 'hsl(30, 25%, 89%)',
    keyShadow: 'hsl(28, 16%, 65%)',
    delRestShadow: 'hsl(224, 28%, 35%)',
    equalsShadow: 'hsl(6, 70%, 34%)',
    textColor: 'hsl(0, 0%, 100%)',
    delResetColor: 'hsl(6, 63%, 50%)',
    equalsToggleColor: 'hsl(6, 63%, 50%)',
    fontKeyColor: 'hsl(221, 14%, 31%)',
    equalsColor: 'hsl(0, 0%, 100%)',
  },
  two: {
    mainBg: 'hsl(0, 0%, 90%)',
    toggleKeyboradBg: 'hsl(0, 5%, 81%)',
    displayBg: 'hsl(0, 0%, 93%)',
    keyboardBg: 'hsl(0, 5%, 81%)',
    delResetBg: 'hsl(185, 42%, 37%)',
    keyBg: 'hsl(45, 7%, 89%)',
    keyShadow: 'hsl(35, 11%, 61%)',
    delRestShadow: 'hsl(185, 58%, 25%)',
    equalsShadow: 'hsl(25, 99%, 27%)',
    textColor: 'hsl(60, 10%, 19%)',
    delResetColor: 'hsl(25, 98%, 40%)',
    equalsToggleColor: 'hsl(25, 98%, 40%)',
    fontKeyColor: 'hsl(60, 10%, 19%)',
    equalsColor: 'hsl(0, 0%, 100%)',
  },
  three: {
    mainBg: 'hsl(268, 75%, 9%)',
    toggleKeyboradBg: 'hsl(268, 71%, 12%)',
    displayBg: 'hsl(268, 71%, 12%)',
    keyboardBg: 'hsl(268, 71%, 12%)',
    delResetBg: 'hsl(281, 89%, 26%)',
    keyBg: 'hsl(268, 47%, 21%)',
    keyShadow: 'hsl(290, 70%, 36%)',
    delRestShadow: 'hsl(290, 70%, 36%)',
    equalsShadow: 'hsl(177, 92%, 70%)',
    textColor: 'hsl(52, 100%, 62%)',
    delResetColor: 'hsl(176, 100%, 44%)',
    equalsToggleColor: 'hsl(176, 100%, 44%)',
    fontKeyColor: 'hsl(52, 100%, 62%)',
    equalsColor: 'hsl(198, 20%, 13%)',
  }
}

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: ${ ({ theme }) => theme.textColor };
    font-family: 'Josefin Sans', sans-serif;
  }
  html{
    min-height: 85vh;
    height: 100%;
  }
  body, #root{
    font-size: 16px;
    height: 100%;
    background-color: ${ ({ theme }) => theme.mainBg };
  }
`;

export const Main = styled.main`
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

export const CustomHeader = styled.div`
  height: 4rem;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.2rem;
  }
  
  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > p {
      text-transform: uppercase;
      font-size: .85rem;
      font-weight: 700;
      letter-spacing: 1px
    }
  }

  @media ( min-width: 768px ){
    font-size: 18px;
  }
`;

export const Options = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 1.5rem;
  background-color: ${ ({ theme }) => theme.toggleKeyboradBg };
  padding: 0.5rem;

  & > div{
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

export const ScreenStyle = styled.div`
  position: relative;
  overflow: hidden;
  grid-row: 2;
  font-weight: 700;
  font-size: 3rem;
  padding: 1.5rem 1rem 0.5rem 1rem;
  border-radius: .7rem;
  background-color: ${ ({ theme }) => theme.displayBg };
  display: flex;
  justify-content: center;
  
  & > span{
    direction: rtl;
    width: calc( 100% - 1rem );
    overflow: hidden;
    cursor:text;
  }
`;

export const Keyboard = styled.div`
  grid-row: 3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
  padding: 1.2rem;
  border-radius: .7rem;
  background-color: ${ ({ theme }) => theme.keyboardBg };
  height: 27rem;
  
  /* @media ( min-width: 470px ){
    width: 420px;
    margin-inline: auto;
  } */
  @media ( min-width: 768px ){
    padding: 2rem;
    gap: 1.3rem;
  }
  /* @media ( min-width: 992px ){
    width: 620px;
  } */
`;

export const Key = styled.button`
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

export const Footer = styled.div`
  grid-row: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;