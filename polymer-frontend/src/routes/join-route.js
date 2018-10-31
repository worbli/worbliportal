/*jslint esversion: 6 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/worbli-join.js';


class JoinRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>

      <worbli-join></worbli-join>

      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('join-route', JoinRoute);
