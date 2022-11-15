import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { navigatorStyles } from './step-navigator.styles';

@customElement('step-navigator')
export class StepNavigator extends LitElement {
  render() {
    return html`
      <div>
        <slot><slot>
      </div>
    `;
  }

  static styles = navigatorStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    'step-navigator': StepNavigator;
  }
}
