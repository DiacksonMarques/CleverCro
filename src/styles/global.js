import "antd/dist/antd.css";
import background from '../assets/images/background.svg';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
 * {
  outline: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
}

body {
  background: #191920 url(${background}) no-repeat center top;
  color: #fff;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
button {
  cursor: pointer;
}

body, input, button {
  font: 14px Roboto, sans-serif;
}

#root{
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
}
`;
