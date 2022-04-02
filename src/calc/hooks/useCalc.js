import { useState } from "react";

export const useCalc = () => {
  const [datos, setDatos] = useState("0");

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [calcs, setCalcs] = useState('');

  const handleDelete = () => {
    if (datos.length < 1) return "";
    let datosStg = datos.split("");
    datosStg.splice(datosStg.length - 1, 1);
    setDatos((val) => (val = datosStg.join("") || "0"));
  };

  const typeByOperator = (op) => {};

  const handleType = (key) => {
    const operators = { 1:"+", 2:"-", 3:"/", 4:"x" };
    let aux = datos.split("");
    console.log(key + ' < - > ' + datos.endsWith('+'));
    // if ( !!operators[key] && datos.length > 0) {
    //   aux[aux.length - 1] = key;
    //   setDatos((val) => (val = aux.join("")));
    // } else {
      setDatos((val) => (val === "0" ? (val = key) : (val += key)));
    // }
  };

  const reset = () => {
    setDatos((val) => (val = "0"));
  };

  const handleCalcs = (op) => {
    // const result = {
    //   '+': () => nuno+ndos,
    //   '-': () => nuno-ndos,
    //   'x': () => nuno*ndos,
    //   '/': () => nuno/ndos,
    // }
    // setNuno( value => value = result[op] );
    const result = eval(datos);
    console.log(result);
    setDatos(val => val = result );
  };

  return {
    display: datos,
    handleType,
    handleDelete,
    handleCalcs,
    reset,
  };
};
