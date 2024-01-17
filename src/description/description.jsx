import styled from "styled-components";
import {Button as ElementButton, buttonOptions} from "./../elements";


const StyledElementButton = styled(ElementButton)`
  // buttonOptions - это объект, который содержит опции стилей для разных размеров кнопок.
  // Если свойство size не было передано, то используется значение по умолчанию - "medium".
  ${(props) => {
    const theme = buttonOptions[props.size || "medium"];

    return `
      padding: ${theme.padding};
    `;
  }}

  margin-top: 20px;
  padding: 0;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: yellow;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  -webkit-transition: background-color 0.3s,box-shadow 03s;
  transition: background-color 0.3s,box-shadow 03s;
  height: 30px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 18px;
  border-radius: 5px;
`;

function Description({ text }) {
  return (
    <>
      {text}
      <StyledElementButton>Подробнее</StyledElementButton>
    </>
  );
}


export default Description;
