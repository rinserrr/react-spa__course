import React from "react";
import { StyledH2, StyledSpan, StyledButton } from './styled';


function Description({text}) {
  return (
    <React.Fragment>
      <div>
        <StyledH2 className='descriptionTitle'>Описание</StyledH2>
        <StyledSpan className='descriptionText'>{text}</StyledSpan>&nbsp;
        <StyledButton type="button" className='descriptionButton'>Подробнее</StyledButton>
      </div>
    </React.Fragment>
  );
}


export default Description;
