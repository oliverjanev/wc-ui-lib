import { css } from 'lit';

export const buttonStyles = css`
  button {
    width: 100%;
    height: 2.5rem;
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    padding: 1rem 2rem;
    outline: 0;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    cursor: pointer;

    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
  }

  button > span {
    order: 1;
  }

  .num {
    --border-radius: 50%;
    --width: 35px;
    --height: 35px;
    --background: #000 !important;
    --color: #fff;
  }
  
  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
