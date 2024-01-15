import React from "react";
import { StyledPrice, StyledOldPrice } from "./styled";


function Price({price, oldPrice}) {
  return (
    <React.Fragment>
      {/*
      Если oldPrice отсутствует, равен нулю или меньше, чем Price, то не выводить старую цену.

      1 - Если oldPrice (старая цена) не равна undefined, null или 0, и если price (новая цена) меньше oldPrice, то выводится блок с перечеркнутой старой ценой и новая цена
      2 - Если условие не выполняется, то выводится price (новая цена).

      {oldPrice && oldPrice > 0 && price < oldPrice ? <p className='price'>Цена: <del>{oldPrice} ₽</del> <b>{price} ₽</b></p> : <p className='price'>Цена: <b>{price} ₽</b></p>} */}

      {
        oldPrice && oldPrice > 0 && price < oldPrice
        ? <>
            <StyledOldPrice>{oldPrice} ₽</StyledOldPrice> <StyledPrice>{price} ₽</StyledPrice>
          </>

        : <>
            <StyledPrice>{price} ₽</StyledPrice>
          </>
      }
    </React.Fragment>
  );
}


export default Price;
