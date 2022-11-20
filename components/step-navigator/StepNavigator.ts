import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { navigatorStyles } from './step-navigator.styles';

@customElement('step-navigator')
export class StepNavigator extends LitElement {
  static styles = navigatorStyles;

  @property({ type: String, reflect: true })
  direction: 'vertical' | 'horizontal' = 'horizontal';

  render() {
    return html`
      <div class=${this.direction}>
        <slot><slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'step-navigator': StepNavigator;
  }
}
