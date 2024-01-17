import styled from "styled-components";
import { Li, P } from "./../elements";
import Title from "../title/title";
import {Button} from "./../elements";


export const CoomentsTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const CoomentsLi = styled(Li)`
  margin-bottom: 10px;
`;

export const CoomentsButton = styled(Button)`
  padding: 5px;
  margin-top: 20px;
  padding: 0;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: yellow;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  -webkit-transition: background-color 0.3s,box-shadow 03s;
  transition: background-color 0.3s,box-shadow 03s;
  height: 30px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 18px;
  border-radius: 5px;
`;

export const Name = styled.span`
  display: block;
  font-weight: bold;
  font-size: 18px;
  color: #888;
  margin-bottom: 5px;
`;

export const Text = styled(P)`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;
