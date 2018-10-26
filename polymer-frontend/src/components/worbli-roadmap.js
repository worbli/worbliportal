import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';

class WorbliRoadmap extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
        div {
            font-size: 12px;
            display: inline-block;
            height: 30px;
        }
        .complete {
            text-decoration: line-through;
            font-style: italic;
            font-size: 11px;
        }
        img {
            position: relative;
            top: 5px;
            margin-left:24px;
            margin-right:12px;
        }
    </style>
    <div>
        <div><img src="./images/[[status]].png" width="20px" height="20px"></div>
        <div class$="[[status]]">[[title]]</div>
    </div>
    `;
  }
  static get properties() {
    return {
        title: {
            type: Text,
        },
        status: {
            type: Text,
        },
    };
  }

} window.customElements.define('worbli-roadmap', WorbliRoadmap);