// import { StyledH1 } from './styled';
//
// function Title({title}) {
//   return (
//     <StyledH1 className='title'>{title}</StyledH1>
//   );
// }


import styled from "styled-components";


const Title = styled.h1`
  padding: 0;
  margin: 0;

  // Если передать small="true", то размер шрифта будет равен 20px.
  // если свойство small равно false или не задано, то размер шрифта будет равен 34px
  font-size: ${(props) => (props.small ? 20 : 34)}px;
`;


export default Title;
