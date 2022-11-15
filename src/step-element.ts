import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('step-element')
export class StepElement extends LitElement {
  render() {
    return html`
      <step-navigator>
        <step-button selected="${true}" label="Basket"></step-button>
        <step-button label="Address"></step-button>
        <step-button label="Options"></step-button>
        <step-button label="Shipping"></step-button>
        <step-button label="Payment"></step-button>
      </step-navigator>

      <step-item selected="${true}">Basket Content</step-item>
      <step-item>Address Content</step-item>
      <step-item>Options Content</step-item>
      <step-item>Shipping Content</step-item>
      <step-item>Payment Content</step-item>
    `;
  }

  static styles = css`
  step-navigator {
    display: grid;
  }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'step-element': StepElement;
  }
}
