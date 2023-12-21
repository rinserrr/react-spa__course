import React from "react";
import "./product-page.css";


import Title from "./title";
import Vendor from "./vendor";
import Image from "./image";
import Price from "./price";
import Amount from "./amount";
import Button from "./button";
import Description from "./description";
import Comments from "./comments";
import Popularity from "./popularity";


function ProductPage({product}) {
  return (
    <React.Fragment>
      <section>
        <Title title={product.name} />
        <Vendor vendor={product.code} />

        <div className='div' style={{ display: "flex" }}>
          <Image src={product.src} />

          <div>
            <Price price={product.price} oldPrice={product.oldPrice} />
            <Amount />
            <p><span>Доставка:</span> {product.delivery} </p>
            <Button />
            <Popularity count={product.comments.length} />
          </div>
        </div>

        <Description text={product.description} />

        <Comments comments={product.comments} />
      </section>
    </React.Fragment>
  );
}

export default ProductPage;
