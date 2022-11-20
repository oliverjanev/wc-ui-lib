import { LitElement, css, html } from 'lit';
import { customElement, queryAll } from 'lit/decorators.js';
import { StepButton } from '../step-button/StepButton';
import { StepItem } from '../step-item/StepItem';

@customElement('step-element')
export class StepElement extends LitElement {
  @queryAll('step-item')
  stepItems!: NodeListOf<StepItem>;

  @queryAll('step-button')
  stepButtons!: NodeListOf<StepButton>;

  render() {
    return html`
      <step-navigator @click=${this.selectStep} direction="vertical">
        <step-button selected=${true} label="Basket">
          <span name="num">1</span>
        </step-button>
        <step-button label="Address">
          <span name="num">2</span>
        </step-button>
        <step-button label="Options">
          <span name="num">3</span>
        </step-button>
        <step-button label="Shipping">
          <span name="num">4</span>
        </step-button>
        <step-button label="Payment">
          <span name="num">5</span>
        </step-button>

        <step-item selected="${true}">Basket Content</step-item>
        <step-item>Address Content</step-item>
        <step-item>Options Content</step-item>
        <step-item>Shipping Content</step-item>
        <step-item>Payment Content</step-item>
      </step-navigator>      
    `;
  }

  selectStep(event: MouseEvent) {
    const stepButton: StepButton = event.target as StepButton;
    if (stepButton.tagName !== 'STEP-BUTTON') return;

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
  :host {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column: span 7;
  }
  step-navigator[direction="horizontal"] {
    width: 100%;
    display: grid;
    
    grid-column: span 7;
    grid-column-start: 2;
    grid-column-end: 7;
  }

  step-navigator[direction="horizontal"] step-item[selected] {
    grid-column: span 5;
  }

  step-navigator[direction="vertical"] {
    width: 100%;
    display: grid;
    
    grid-column: span 7;
    grid-column-start: 1;
    grid-column-end: 8;
  }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'step-element': StepElement;
  }
}
