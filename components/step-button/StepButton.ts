import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { buttonStyles } from './step-button.styles';

@customElement('step-button')
export class StepButton extends LitElement {
  @property({ type: String }) label = 'Step';
  @property({ type: Boolean }) selected = false;

  render() {
    return html`
      <div>
        <button @click=${this.createRipple}>
          <span>${this.label}</span>
          <slot class="num" name="num"><slot>
        </button>
      </div>
    `;
  }

  static styles = buttonStyles;

  createRipple(event: MouseEvent) {
    const button: HTMLButtonElement = event.currentTarget as HTMLButtonElement;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'step-button': StepButton;
  }
}
