import { useContext } from 'react';
import { ScreenStyle } from "../Style";
import { CalcContext } from '../CalcContext';

export const Screen = () => {

  const { calc : { display } } = useContext( CalcContext );

  return (
    <Screen>
      <span>{ display }</span>
    </Screen>
  )
}
