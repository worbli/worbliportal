import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';

class WorbliDasboard extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
      div {
          display: inline-block;
          flex-grow: 1;
          color: var(--grey-text);
          font-size: 12px;
      }
      .container-dashboard{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          line-height: 60px;
          border-bottom: 1px solid var(--grey-keyline);
          margin-bottom: 40px;
      }
      ul {
        list-style: none;
        text-align: center;
      }
      li {
        display: inline;
      }
      li a {
        text-transform: uppercase;
        color: var(--blue-navigation);
        font-size: 14px;
        text-decoration: none;
        margin-right:30px;
        font-weight: 600;
      }
      button {
        color: var(--blue-navigation);
        font-size: 14px;
        font-weight: 600;
        width: 130px;
        height: 50px;
        cursor: pointer;
        border-radius: 3px;
      }
      .buttons {
        text-align: right;
      }
      .selected {
        color: white;
        background-color: var(--blue-button);
        
      }
      img{
        vertical-align: middle;
      }
      @media only screen and (max-width: 600px) {
        .navigation {
              display: none;
          }
          .logo {
            text-align: center;
          }
          .container {
            line-height: 50px;
            padding-bottom: 10px;
          }
          .buttons {
            display: none;
          }
      }
      </style>
      <div class="container-dashboard">
        <div class="logo">
          <a href="/"><img src="./images/logo.svg" alt="Worbli" height="30px"></a>
        </div>
      </div>

  
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'worbli-header',
      },
    };
  }

  _signIn() {
    this.dispatchEvent(new CustomEvent('overlay',{bubbles: true, composed: true, detail: {action: 'signin'}}));
  }

  _join() {
    this.dispatchEvent(new CustomEvent('overlay',{bubbles: true, composed: true, detail: {action: 'join'}}));
  }

} window.customElements.define('worbli-dashboard', WorbliDasboard);