import styled from "styled-components";

import { Theme } from './Theme';

const Styled = styled.div`
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

export const Header = () => {

  return (
    <Styled>
      <h1>calc</h1>
      <div>
        <p>Theme</p>
        <Theme/>
      </div>
    </Styled>
  )
}
