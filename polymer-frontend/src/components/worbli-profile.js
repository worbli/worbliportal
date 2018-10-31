import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';

class WorbliProfile extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
    img {
        -moz-box-shadow: inset 0 0 10px #000000;
        -webkit-box-shadow: inset 0 0 10px #000000;
        box-shadow: inset 0 0 10px #000000;
        border-radius: 50%;
        opacity: 0.85;
    }
    img:hover {
        opacity: 1;
    }
    .container {
        position: relative;
        background: #FFF;
        border-radius: 3px;
        box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        margin-bottom: 18px;
        min-width: 260px;
        margin-right: 12px;
        text-align: center;
        padding-top: 30px;
    }
    h4 {
        font-size: 14px;
        color: var(--blue-text);
        font-weight: 600;
        text-transform: capitalize;
    }
    p {
        font-size: 11px;
        margin-bottom: 12px;
    }
    .footer{
        border-top: 1px solid #f5f5f5;
        text-align: right; 
    }
    .linked-in{
        background: url('./images/sprite.png') -81px -82px;
        background-size: 200px;
        width: 20px;
        height: 20px;
        display: inline-block;
        margin: 12px 10px 6px 6px;
    }
    .linked-in-none{
        background-size: 200px;
        width: 20px;
        height: 20px;
        display: inline-block;
        margin: 12px 10px 6px 6px;
	}
    </style>
    <div class="container">
        <a href="https://www.linkedin.com/in/[[linkedin]]/" target="_blaank">
            <img src="./images/team-photos/[[name]].png" width="120px" height="120px" alt="[[formattedName]]">
        <a>
        <h4>[[formattedName]]</h4>
        <p>[[title]]</p>
        <div class="footer">
        <template is="dom-if" if="{{linkedin}}">
            <a href="https://www.linkedin.com/in/[[linkedin]]/" target="_blaank"><div class="linked-in"></div><a>
        </template>
        <template is="dom-if" if="{{!linkedin}}">
            <div class="linked-in-none"></div>
        </template>
            
        <div>
    </div>
    `;
  }
  static get properties() {
    return {
        name: {
            type: Text,
            observer: '_format'
        },
        formattedName: {
            type: Text,
        },
        title: {
            type: Text,
        },
        linkedin: {
            type: Text,
        },
    };
  }
  _format(){
    this.formattedName = this.name.replace(new RegExp('-', 'g'), ' ');
  }

} window.customElements.define('worbli-profile', WorbliProfile);