import { useContext } from 'react';

import { Options } from "../Style";
import { CalcContext } from '../CalcContext';

export const Theme = () => {

  const { theme , setTheme } = useContext( CalcContext );

  const handleThemeChange = ( change ) => {
    setTheme( th => th = change );
    localStorage.setItem('theme', change);
  }

  return (
    <Options onSubmit={ (e) => e.preventDefault() } aria-hidden="true">
      <div>
        <label htmlFor="one">1</label>
        <label htmlFor="two">2</label>
        <label htmlFor="three">3</label>
      </div>
      <input type="button" id='one' className={ theme === 'one' ? 'active' : undefined } onClick={ () => handleThemeChange( 'one' ) } value=''/>
      <input type="button" id='two' className={ theme === 'two' ? 'active' : undefined } onClick={ () => handleThemeChange( 'two' ) } value=''/>
      <input type="button" id='three' className={ theme === 'three' ? 'active' : undefined } onClick={ () => handleThemeChange( 'three' ) } value=''/>
    </Options>
  )
}
