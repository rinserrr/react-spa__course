import React from "react";
import "./product-page.css";


import Title from "./title";
import Vendor from "./vendor";
import Image from "./image";
import Price from "./price";
import Amount from "./amount";
import Button from "./button";
import Description from "./description";


function ProductPage({product}) {
  return (
    <React.Fragment>
      <section>
        <Title title={product.name} />
        <Vendor vendor={product.code} />

        <div className='div'>
          <Image src={product.src} />

          <div>
            <Price newPrice={product.price} oldPrice={product.oldPrice} />
            <Amount />
            <p><span>Доставка:</span> {product.delivery} </p>
            <Button />
          </div>
        </div>

        <Description text={product.description} />
      </section>
    </React.Fragment>
  );
}

export default ProductPage;
