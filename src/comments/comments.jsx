import styled from "styled-components";


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
      border-radius: ${theme.radius};
      `;
  }}

  width: auto;
  border: none;
  cursor: pointer;
  display: block;
  background-color: yellow;
  color: blue;

  &:active {
    opacity: 0.4;
  }
`;


function Comments({ comments }) {
  return (
    <div>
      <h2>Комментарии</h2>
      {/* Отобразить комментарии к товару. */}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <b>{comment.author}</b>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>

      <StyledElementButton type="button" className='descriptionButton' size={"large"}>Показать ещё</StyledElementButton>
    </div>
  );
}


export default Comments;
