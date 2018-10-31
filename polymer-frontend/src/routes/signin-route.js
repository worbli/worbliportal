/*jslint esversion: 6 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/worbli-signin.js';

class SigninRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>

      
      <worbli-signin></worbli-signin>

      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('signin-route', SigninRoute);
