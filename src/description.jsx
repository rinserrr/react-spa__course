import React from "react";
import "./description.css";


function Description({text}) {
  return (
    <React.Fragment>
      <div>
        <h2 className='descriptionTitle'>Описание</h2>
        <span className='descriptionText'>{text}</span>&nbsp;
        <button type="button" className='descriptionButton'>Подробнее</button>
      </div>
    </React.Fragment>
  );
}

export default Description;
