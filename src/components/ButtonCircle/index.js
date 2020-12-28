import styled from "styled-components";

import { Button } from 'antd';
// Dando estilo ao Button(mudando cor, efeito ao clicar)
export const ButtonCircle = styled(Button)`
  font-size: 20px !important;
  .ant-btn-primary{
    background:#A3A3CC !important;
  }

  :hover, :focus{
    color: #404080;
    border-color: #A3A3CC;
  }

  &.ant-btn-clicked:after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    border-radius: inherit;
    border: 0 solid palevioletred;
    opacity: 0.4;
    -webkit-animation: buttonEffect 0.4s;
    animation: buttonEffect 0.4s;
    display: block;
  }
`;
