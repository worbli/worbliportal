import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {jsonrpc_connect} from '../libraries/eosjs-jsonrpc.js';
import '../css/shared-styles.js';

class WorbliRpc extends PolymerElement {
  static get template() {
    return html``;
  }
  static get properties() {
    return {
        connect: {
            type: Boolean,
            value: false,
            observer: '_connect',
        },
        connected: {
            type: Boolean,
            value: false,
        },
        endpoint: {
            type: String,
        },
        jsonrpc: {
            type: Object,
            notify: true,
            reflectToAttribute: true
        },
    };
  }

  _connect(){
    if(this.endpoint){
        const eosrpc = jsonrpc_connect();
        this.jsonrpc = new eosrpc.JsonRpc(this.endpoint);
    }    
  }
} window.customElements.define('worbli-rpc', WorbliRpc);