import { css, CSSResult } from 'lit';

export const buttonStyles: CSSResult = css`
:host {
  // max-width: 11.75rem;
}
div {
  border: 1px solid #c2c2c2;
  height: 3.5rem;
  position: relative;
}
button {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  padding: 1rem 2rem;
  outline: 0;
  border: 0;
  cursor: pointer;
  
  

  display: grid;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}

.columns {
  grid-template-columns: repeat(2, auto);
}

.rows {
  gap: 0.3rem;
  height: 4.3rem;
  font-size: 1rem
}

.border {
  position: absolute;
  bottom: -1px;
  z-index: 99;
}

.active .border {
  display: grid;
  background-color: #000;
  width: 100%;
  height: 2px;
  
  animation: drawBorder 0.2s linear 1;
}

@keyframes drawBorder {
  0% {
    transform:scaleX(0);
    transform-origin: left;
  }
  33%
  {
    transform:scaleX(0.33);
    transform-origin: left;
  }
  66.1%
  {
    transform:scaleX(0.66);
    transform-origin: left;
  }
  100%
  {
    transform:scaleX(1);
    transform-origin: left;
  }
} 

button > span {
  order: 1;
  pointer-events: none;
}

.num {
  pointer-events: none;
}

::slotted(span) {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  line-height: 1.7;
}

.rows ::slotted(span) {
  margin: 0 auto;
}

:host([selected]) ::slotted(span) {
  color: #fff;
  background-color: #000;
}

:host(:not([selected])) ::slotted(span) {
  border: 1px solid #000;
}

span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
  background-color: rgba(254, 254, 254, 0.7);
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

`;
