import styled from "styled-components";

import { Button, Avatar } from 'antd';
// Dando estilo ao Button(centralizando, mudando cor)
export const ButtonAtd = styled(Button)`

  font-size: 20px !important;
  background:#A3A3CC !important;
  text-align: center !important;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #666680 !important;
  border-color: #666680 !important;

  :hover, :focus{
    color: #404080;
    background: #A3A3CC!important;
    border-color: #A3A3CC !important;
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

// Dando estilo ao Avatar(centralizando, mudando cor)
export const AvatarMod = styled(Avatar)`
   text-align: center !important;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #666680 !important;
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 24px;
    margin-left: 6px;
    color: #fff;
  }
`;
