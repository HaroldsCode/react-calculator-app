import { useState } from "react";

export const useCalc = () => {

  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');

  function handlerType ( key = '' ) {
    const type = ( val ) => val === "0" ? val = ""+key : val = ""+val+key;
    if ( key === '+' || key === '-' || key === 'x' || key === '/' ) {
      handlerOperator( key );
      return;
    }
    if ( key !== '.' ) key = parseInt( key );
    if ( key === 0 && firstNumber === '0' && secondNumber === '') return;
    if ( key === 0 && firstNumber !== '0' && secondNumber === '0') return;
    !!operator ? setSecondNumber( val => type(val) ) : setFirstNumber( val => type(val) );
  }

  function handlerOperator ( op ) {
    if ( !!secondNumber ) handlerCalc();
    setOperator( val => val = op );
  }

  function handlerCalc () {
    if ( !!firstNumber && !!secondNumber && !!operator ){
      const calcs = {
        '+': parseFloat( firstNumber ) + parseFloat( secondNumber ),
        '-': parseFloat( firstNumber ) - parseFloat( secondNumber ),
        'x': parseFloat( firstNumber ) * parseFloat( secondNumber ),
        '/': parseFloat( firstNumber ) / parseFloat( secondNumber ),
      }
      handlerReset( calcs[operator] );
    }
  }

  function handlerReset ( resetVal = '0' ) {
    setFirstNumber( val => val = resetVal );
    setSecondNumber( val => val = '' );
    setOperator( op => op = '' );
  }

  function handlerDelete () {

    const Delete = ( num = '', dflVal ) => {
      if ( num.length === 1 ) {
        return dflVal;
      }
      let arrTemp = num.split("");
      arrTemp.pop();
      console.log(arrTemp);
      return arrTemp.length > 0 ? arrTemp.join("") : dflVal;
    }

    if ( !!secondNumber ) {
      setSecondNumber( val => val = Delete( val, '' ) );
      return;
    }
    if ( !!operator ) {
      setOperator( val => val = '' );
      return;
    }
    setFirstNumber( val => val = Delete( val, '0' ) );
  }
  
  return {
    screen : {
      firstNumber,
      secondNumber,
      operator
    },
    handlerType,
    handlerCalc,
    handlerReset,
    handlerDelete
  };
};
