import { createGlobalStyle } from 'styled-components';

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