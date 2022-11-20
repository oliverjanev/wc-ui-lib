import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { buttonStyles } from './step-button.styles';

@customElement('step-button')
export class StepButton extends LitElement {
  @property({ type: String }) label = 'Step';
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean, reflect: true }) horizontal = true;

  render() {
    const classes = {
      columns: this.horizontal,
      rows: this.horizontal === false,
    };
    const divClass = {
      active: this.selected,
    };
    return html`
      <div class=${classMap(divClass)}>
        <button class=${classMap(classes)} @click=${this.createRipple}>
          <span>${this.label}</span>
          <slot class="num" name="num"><slot>
        </button>
        <span class="border"></span>
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
