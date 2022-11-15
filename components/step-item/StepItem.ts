import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { itemStyles } from './step-item.styles';

@customElement('step-item')
export class StepItem extends LitElement {
  render() {
    return html`
      <div>
        <slot><slot>
      </div>
    `;
  }

  static styles = itemStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    'step-item': StepItem;
  }
}
