import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliWhitepaper extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        div {
            flex-grow: 1;
            color: var(--grey-text);
            font-size: 12px;
        }

        .white-paper {
          margin-left: 25px;
          margin-top: 30px;
          margin-bottom: 12px;
        }
        .bottom a:hover {
          display: block;
          color: var(--green-text);
          text-decoration: underline;
        }
        .bottom {
          color: var(--blue-text);
          display: block;
          padding-top: 20px;
          padding-bottom: 20px;
          font-size: 11px;
          margin-left: 25px;
          text-decoration: none;
          font-style: italic;
        }
        .pointer{
          cursor:default;
          display: block;
          width: 100%;
          height: 10px;
        }
      </style>
        <div class="container">
            <div class="title">White Paper</div>
            <img src="./images/white-paper.png" alt="white paper" class="white-paper">
            <a href="https://drive.google.com/a/worbli.io/uc?authuser=1&id=1YTFLUf1h_XsjTHCDdiClBYS74STt_n5J&export=download" class="button">Download Short Paper</a>
            <p class="pointer"></p>
            <a href="https://drive.google.com/a/worbli.io/uc?authuser=1&id=1a0Ec-2glbFXTgvr-7PnAdye0aPcHhmGd&export=download" class="bottom">Or download our full White Paper</a>
        </div>
    `;
  }
  static get properties() {
    return {
      init: {
        type: String,
      },
    };
  }

} window.customElements.define('worbli-whitepaper', WorbliWhitepaper);