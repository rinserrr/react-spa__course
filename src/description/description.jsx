import React from "react";
import styled from "styled-components";


import { StyledH2, StyledSpan } from './styled';
import {Button as ElementButton, buttonOptions} from "./../elements";


const StyledElementButton = styled(ElementButton)`
  // buttonOptions - это объект, который содержит опции стилей для разных размеров кнопок.
  // Если свойство size не было передано, то используется значение по умолчанию - "medium".
  ${(props) => {
    const theme = buttonOptions[props.size || "medium"];

    return `
      padding-left: ${theme.padding};
      padding-right: ${theme.padding};
      height: ${theme.height};
      font-size: ${theme.fontSize};
      color: ${theme.color};
      border-radius: ${theme.radius};
      `;
  }}

  width: auto;
  border: none;
  cursor: pointer;
  display: block;
  background-color: yellow;

  &:active {
    opacity: 0.4;
  }
`;



function Description({text}) {
  return (
    <React.Fragment>
      <div>
        <StyledH2 className='descriptionTitle'>Описание</StyledH2>
        <StyledSpan className='descriptionText'>{text}</StyledSpan>&nbsp;
        <StyledElementButton type="button" className='descriptionButton' size={"large"}>Подробнее</StyledElementButton>
      </div>
    </React.Fragment>
  );
}


export default Description;
