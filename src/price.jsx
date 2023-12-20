import React from "react";
import "./price.css";


function Price({newPrice, oldPrice}) {
  return (
    <React.Fragment>
      <p>Цена: <del>{newPrice} ₽</del> <b>{oldPrice} ₽</b> </p>
    </React.Fragment>
  );
}

export default Price;
