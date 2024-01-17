import styled from "styled-components";


export const buttonOptions = {
  large: {
    // width: "auto",
    height: "40px",
    padding: "40px",
    fontSize: "24px",
    radius: "10px",
    color: "green"
  },
  medium: {
    // width: "58.16px",
    // width: "auto",
    height: "21px",
    padding: "5px",
    fontSize: "14px",
    radius: "5px",
    color: "blue"
  },
  small: {
    // width: "auto",
    height: "20px",
    padding: "8px",
    fontSize: "16px",
    radius: "3px",
    color: "yellow"
  }
};


const Button = styled.button`
  // width: 56.8333px;
  // width: auto;
  height: 19.3333px;
  padding: 0;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: inline-block;
  background: none;
  outline: none;

  box-sizing: border-box;

  border: 1px solid black;

  font-family: Arial;
  font-weight: 400;
  font-size: 13.3333px;

  &:active,
  &:hover {
    background-color: orange;
  }

  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    opacity: 0.6;
  }
`;


export default Button;
