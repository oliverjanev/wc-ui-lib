import { css } from 'lit';

export const itemStyles = css`
div {
  background: red;
  color: #fff;
  height: calc(100vh - 2.5rem);
  width: 100%;
}

:host(:not([selected])) {
  display: none;
}
`;
