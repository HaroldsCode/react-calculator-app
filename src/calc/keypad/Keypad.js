import styled from "styled-components";

import { Key } from "./Key";

export const Keypad = () => {
  
  return (
    <Styled>
      {keys.map(({ ky, clss }, i) => (
        <Key key={i + 1} clss={clss} ky={ky}/>
      ))}
    </Styled>
  );
};

const Styled = styled.div`
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

const keys = [
  { ky: "7", clss: "" },
  { ky: "8", clss: "" },
  { ky: "9", clss: "" },
  { ky: "DEL", clss: "del" },
  { ky: "4", clss: "" },
  { ky: "5", clss: "" },
  { ky: "6", clss: "" },
  { ky: "+", clss: "" },
  { ky: "1", clss: "" },
  { ky: "2", clss: "" },
  { ky: "3", clss: "" },
  { ky: "-", clss: "" },
  { ky: ".", clss: "" },
  { ky: "0", clss: "" },
  { ky: "/", clss: "" },
  { ky: "x", clss: "" },
  { ky: "RESET", clss: "reset" },
  { ky: "=", clss: "equals" },
];