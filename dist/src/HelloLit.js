import { __decorate } from "tslib";
import { html, css, LitElement, property } from 'lit-element';
export class HelloLit extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Hey there';
        this.personName = 'Saurabh';
        this.counter = 5;
    }
    __increment() {
        this.counter += 1;
    }
    render() {
        return html `
      <h2>${this.title} Nr. ${this.counter}! ${this.personName}</h2>
      <button @click=${this.__increment}>increment</button>
    `;
    }
}
HelloLit.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--hello-lit-text-color, #000);
    }
  `;
__decorate([
    property({ type: String })
], HelloLit.prototype, "title", void 0);
__decorate([
    property({ type: String })
], HelloLit.prototype, "personName", void 0);
__decorate([
    property({ type: Number })
], HelloLit.prototype, "counter", void 0);
//# sourceMappingURL=HelloLit.js.map