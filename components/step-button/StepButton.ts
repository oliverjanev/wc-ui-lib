import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { buttonStyles } from './step-button.styles';

@customElement('step-button')
export class StepButton extends LitElement {
  @property({ type: String }) label = 'Step';

  render() {
    return html`
      <div>
        <button>
          <slot name="icon"><slot>
          ${this.label}
        </button>
      </div>
    `;
  }

  static styles = buttonStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    'step-button': StepButton;
  }
}
