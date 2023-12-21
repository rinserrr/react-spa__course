import React from "react";
import "./price.css";


function Price({price, oldPrice}) {
  return (
    <React.Fragment>
      {/*
      Если oldPrice отсутствует, равен нулю или меньше, чем Price, то не выводить старую цену.

      1 - Если oldPrice (старая цена) не равна undefined, null или 0, и если price (новая цена) меньше oldPrice, то выводится блок с перечеркнутой старой ценой и новая цена
      2 - Если условие не выполняется, то выводится price (новая цена).
      */}
      {oldPrice && oldPrice > 0 && price < oldPrice ? <p>Цена: <del>{oldPrice} ₽</del> <b>{price} ₽</b></p> : <p>Цена: <b>{price} ₽</b></p>}
    </React.Fragment>
  );
}

export default Price;
