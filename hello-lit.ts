import { HelloLit } from './src/HelloLit.js';

window.customElements.define('hello-lit', HelloLit);

declare global {
    interface HTMLElementTagNameMap {
        "hello-lit": HelloLit
    }
}
