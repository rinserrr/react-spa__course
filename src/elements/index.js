// src\elements\index.js
// Line 1:10:  'buttonOptions' is defined but never used
// import { buttonOptions } from "./button";
import { buttonOptions as buttonOptionsFromButton } from "./button";


export { default as Button } from "./button";
export const buttonOptions = buttonOptionsFromButton;

export { default as H1 } from "./h1";
export { default as Image } from "./image";
export { default as Li } from "./li";
export { default as P } from "./p";
export { default as Ul } from "./ul";
