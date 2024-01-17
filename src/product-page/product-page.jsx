import React from "react";
import { StyledSection } from './styled';


import Title from "../title/title";
import Vendor from "../vendor/vendor";
import Image from "../image/image";
import Price from "../price/price";
import Amount from '../amount/amount';
import Button from "../button/button";
import Description from "../description/description";
import Comments from "../comments/comments";
import Popularity from "../popularity/popularity";

import Tabs from '../tabs/tabs';


function ProductPage({product}) {
  const isSmall = false;

  const tabs = [
    {
      title: "Описание",
      content: <Description text={product.description} />
    },
    {
      title: "Комментарии",
      content: <Comments comments={product.comments} />
    }
  ];


  return (
    <React.Fragment>
      <StyledSection>
        {/* <Title title={product.name} /> */}
        <Title className='title' small={isSmall ? "small-value" : undefined}>{product.name}</Title>


        <Vendor vendor={product.code} />

        <div style={{ display: "flex" }}>
          <Image src={product.src} alt={product.name} />

          <div>
            {/*
            1
            <Price price={product.price} oldPrice={product.oldPrice} />
            */}

            <p className='price'>
              Цена:{" "} <Price oldPrice={product.oldPrice} price={product.price} />
            </p>

            <Amount />
            <p><span>Доставка:</span> {product.delivery} </p>

            <Button size={""}>Купить</Button>

            <Popularity count={product.comments.length} />
          </div>
        </div>


        <Tabs tabs={tabs} tabIndex={1} />


        <br /><br /><br /><br /><hr />


        <Description text={product.description} />
        <Comments comments={product.comments} />


      </StyledSection>
    </React.Fragment>
  );
}


export default ProductPage;
