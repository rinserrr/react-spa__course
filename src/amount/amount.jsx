import React from "react";
import styled from "styled-components";


const AmountWrapper = styled.div`
  height: 21px;
  display: block;
  font-family: monospace;
`;

const Button = styled.button`
  align-items: flex-start;
  appearance: auto;
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: outset;
`;

const Count = styled.span`
  margin-right: 8px;
`;


function Amount() {
  return (
    <React.Fragment>
      <AmountWrapper>
        Количество:
        <Button type="button">-</Button>
        <Count>1</Count>
        <Button type="button">+</Button>
      </AmountWrapper>
    </React.Fragment>
  );
}


export default Amount;
