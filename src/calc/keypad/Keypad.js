import { useContext } from "react";
import { Key, Keyboard } from "../Style";
import { CalcContext } from "../CalcContext";

export const Keypad = () => {
  const { calc } = useContext(CalcContext);
  const { handleType, handleDelete, handleCalcs, reset } = calc;

  const keys = [
    { k: "7", c: "" },
    { k: "8", c: "" },
    { k: "9", c: "" },
    { k: "DEL", c: "del" },
    { k: "4", c: "" },
    { k: "5", c: "" },
    { k: "6", c: "" },
    { k: "+", c: "" },
    { k: "1", c: "" },
    { k: "2", c: "" },
    { k: "3", c: "" },
    { k: "-", c: "" },
    { k: ".", c: "" },
    { k: "0", c: "" },
    { k: "/", c: "" },
    { k: "x", c: "" },
    { k: "RESET", c: "reset" },
    { k: "=", c: "equals" },
  ];

  return (
    <Keyboard>
      {keys.map(({ k, c }, i) => (
        <Key
          key={i + 1}
          className={c !== "" ? c : undefined}
          onClick={() => {
            if (!!c) {
              if (c === "reset") {
                reset();
              }
              if (c === "equals") {
                handleCalcs();
              }
              if (c === "del") {
                handleDelete();
              }
            } else {
              handleType(k)
            }
          }}
        >
          {k}
        </Key>
      ))}
    </Keyboard>
  );
};
