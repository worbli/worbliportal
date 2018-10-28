/*jslint esversion: 6 */
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '../css/shared-styles.js';
import { MyURLSetter } from "../mixins/worbli-urlsetter.js";

class WorbliRegister extends MyURLSetter(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
      </style>
          <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
          <iron-ajax
            id="registrationCheck"
            method="get"
            auto
            handle-as="json"
            on-response="handleResponse"
            debounce-duration="300">
          </iron-ajax>

          stuff! <br/>
          <h1> registration! </h1>
    `;
  }
    handleResponse(event) {
        console.log("thistime?");
    }

} window.customElements.define('worbli-register', WorbliRegister);
