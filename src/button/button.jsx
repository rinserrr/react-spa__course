import React from "react";
import styled from "styled-components";
import {Button as ElementButton, buttonOptions} from "./../elements";


// ElementButton - это псевдоним для компонента Button, который импортируется из /src/elements.
// Этот компонент используется внутри компонента Button, чтобы создать стилизованную кнопку с
// помощью элемента button.

// Компонент Button принимает в качестве свойств children и rest. children - это содержимое кнопки,
// которое передается внутрь ElementButton. rest - это объект, содержащий все остальные свойства,
// переданные в компонент Button.
// Он передается далее в ElementButton с помощью оператора spread ({...rest}).

// Таким образом, компонент Button является оберткой для ElementButton, которая добавляет дополнительную
// функциональность и стилизацию к стандартной кнопке.


const StyledElementButton = styled(ElementButton)`
  font-weight: 700;
  background-color: #cecece;

  // buttonOptions - это объект, который содержит опции стилей для разных размеров кнопок.
  // Если свойство size не было передано, то используется значение по умолчанию - "medium".
  ${(props) => {
    const theme = buttonOptions[props.size || "medium"];

    return `
      padding-left: ${theme.padding};
      padding-right: ${theme.padding};
      width: ${theme.width};
      height: ${theme.height};
      font-size: ${theme.fontSize};
      color: ${theme.color};
      border-radius: ${theme.radius};
    `;
  }}

`;


function Button({children, ...rest}) {
  return (
    <React.Fragment>
      <StyledElementButton {...rest}>{children}</StyledElementButton>
    </React.Fragment>
  );
}


export default Button;
