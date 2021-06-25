/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.list {
  margin: 0 auto;
  display: grid;
  justify-content: center;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, 400px);
  /*columnas de 300px c/u*/
}
`;