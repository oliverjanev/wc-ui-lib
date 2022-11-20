import { css, CSSResult } from 'lit';

export const itemStyles: CSSResult = css`
div {
  background: #1e90ff;
  color: #fff;
  height: calc(100vh - 3.5rem);
  width: 100%;
}

:host(:not([selected])) {
  display: none;
}
`;
