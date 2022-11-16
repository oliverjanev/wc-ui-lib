import { LitElement, css, html } from 'lit';
import { customElement, queryAll } from 'lit/decorators.js';
import { StepButton } from '../step-button/StepButton';
import { StepItem } from '../step-item/StepItem';
import { StepNavigator } from '../step-navigator/StepNavigator';

@customElement('step-element')
export class StepElement extends LitElement {
  selectedIdx: boolean = false;

  @queryAll('step-item')
  stepItems!: NodeListOf<StepItem>;

  @queryAll('step-button')
  stepButtons!: NodeListOf<StepButton>;

  render() {
    return html`
      <step-navigator @click=${this.selectStep}>
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

  selectStep(event: MouseEvent) {
    const stepButton: StepButton = event.target;
    this.stepButtons.forEach((elem: StepButton, idx: number) => {
      elem.selected = false;
      if (this.stepItems[idx]) this.stepItems[idx].selected = false;
      if (stepButton === elem) {
        elem.selected = true;
        this.stepItems[idx].selected = true;
      }
    });
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
