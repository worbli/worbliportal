/*jslint esversion: 6 */
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';

import '../css/shared-styles.js';

class WorbliHeader extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      div {
          display: inline-block;
          flex-grow: 1;
          color: var(--grey-text);
          font-size: 12px;
      }
      .container-header{
		position:relative;
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
      img {
        vertical-align: middle;
	    }
      .menu-toggle{
        background:url('./images/noun_hamburger_menu.png');
        background-size:contain;
        background-repeat:no-repeat;
        width:25px;
        display:none;
        position: relative;
        top: 14px;
        right: 13px;
      }
      .navigation.open{
        display:block;
        position:absolute;
        top:100%;
        width:100%;
        background-color:#fff;
        z-index:100;
      }
      .navigation.open li{
        display:block;
      }
      @media only screen and (max-width: 600px) {
        .navigation {
          display: none;
        }
        .menu-toggle{
          display:block;
        }
        .logo {
          text-align: center;
        }
        .container-header {
          line-height: 50px;
          padding-bottom: 10px;
        }
        .buttons {
          display: none;
        }
      }
    </style>
        <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>

      <div class="container-header">
      <div class="logo"><a href="/" tabindex="0"><img src="./images/logo.svg" alt="Worbli" height="30px"></a></div>
          <button class="menu-toggle" on-click="_toggleMenu"></button>
      <div class="navigation">
          <ul>
            <li><a href="/about/" tabindex="1">ABOUT</a></li>
            <li><a href="/team/" tabindex="2">TEAM</a></li>
            <li><a href="/roadmap/" tabindex="3">ROADMAP</a></li>
            <li><a href="/network/" tabindex="4">NETWORK</a></li>
          </ul>
        </div>
        <div class="buttons">
          <button type="button" on-click="_signIn" tabindex="5">SIGN IN</button>
          <button type="button" class="selected" on-click="_join" tabindex="6">JOIN NOW</button>
          </span>
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
            route: {
                type: String,
                observer: '_onRouteChanged'
            },
        };
    }

    _signIn() {
        this.dispatchEvent(new CustomEvent('overlay',{bubbles: true, composed: true, detail: {action: 'signin'}}));
    }

    _join() {
        this.dispatchEvent(new CustomEvent('overlay',{bubbles: true, composed: true, detail: {action: 'join'}}));
    }

    _toggleMenu(){
        var menuEl = this.shadowRoot.querySelector('.navigation');
        menuEl.classList.toggle('open');
    }
    _onRouteChanged(bd,bc) {
        console.log("Route changed: "  );
    }
    _deleteJWT(){
        localStorage.removeItem("lsjwt");
    }

    ready() {
        super.ready();
        let localJWT = localStorage.getItem("lsjwt");
        console.log("jwt?");
        console.log(localJWT);
        if (localJWT != null) {
            console.log("JWT has a value?");
        }
    }

} window.customElements.define('worbli-header', WorbliHeader);
