import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { itemStyles } from './step-item.styles';

@customElement('step-item')
export class StepItem extends LitElement {
  @property({ type: Boolean, reflect: true })
  public selected = false;

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
