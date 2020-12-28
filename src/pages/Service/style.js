import styled from 'styled-components';

import { Layout, Button } from 'antd';
const { Content } = Layout;

export const ContentBranco = styled(Content)`
        padding: 30px 30px;
        min-height: 280;
        background: #fff;
        color: #000;
        p{
          margin:24px;
          color: #000;
        }
`;

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
