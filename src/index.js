import React from "react";
// import ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom";

// import createRoot from 'react-dom/client';
// import createRoot from 'react-dom';
// import * as ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom/client";
import {createRoot} from 'react-dom/client';
import {product} from "./mock";


// import ProductPage from './product-page';
import ProductPage from './product-page/product-page';

// 1
// const rootElement = document.getElementById("root");
// ReactDOM.render(ProductPage(), rootElement);

// 2
const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');
if (rootElement === null) throw new Error('Root container missing in index.html')

// Свойство "createRoot" не существует в типе "typeof import("c:/_project/my-app/node_modules/@types/react-dom/index")".
// npm install @types/react-dom@latest
// @ ts-ignore
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ProductPage product={product} />
  </React.StrictMode>
);
