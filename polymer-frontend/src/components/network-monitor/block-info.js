import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class BlockInfo extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
            .container {
                position: relative;
                background: #FFF;
                border-radius: 3px;
                box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
                -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
                -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
                margin-bottom: 18px;
            }
            .title {
                color: #3a3e46;
                font-size: 11px;
                font-weight: 600;
                text-transform: uppercase;
                line-height: 16px;
                padding: 13px 12px;
                border-bottom: 1px solid #f5f5f5;
                background: none;
                text-shadow: none;
            }
            .block {
                color: #3a3e46;
                font-size: 28px;
                font-weight: 800;
                text-transform: uppercase;
                line-height: 16px;
                padding: 13px 12px;
                letter-spacing: 2px;
            }
            .small {
                color: #3a3e46;
                font-size: 12px;
                font-weight: 300;
                line-height: 16px;
                padding: 1px 12px 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
			}
			@media only screen and (max-width: 768px){
				.container{
					width:100%;
					text-align:center;
				}
			}
        </style>
        <div class="container">
            <div class="title">Current Block Info</div>
            <p class="block">[[info.head_block_num]]</p>
            <p class="small">[[info.head_block_time]]</p>
            <p class="small">Irreversible Block: <b>[[info.last_irreversible_block_num]]</b></p>
            <p class="small">Produced By: <b>[[info.head_block_producer]]</b></p>
        </div>
      `;
  }
  static get properties() {
    return {
        jsonrpc: {
            type: Object,
            observer: '_getBlockInfo',
        },
        interval: {
            type: Number,
        },
        info: {
            type: Object,
        },
        producer: {
            type: Object,
            notify: true,
            reflectToAttribute: true,
        }
    };
  }

  _getBlockInfo(){
      
    if(this.jsonrpc){
        setInterval(()=>{
            this.jsonrpc.get_info()
            .then((info) => {
                info.head_block_num = info.head_block_num.toLocaleString()
                let formatted_block_time = info.head_block_time.split('T');
                let no_seconds = formatted_block_time[1].split('.');
                info.head_block_time = `${formatted_block_time[0]} ${no_seconds[0]}`;
                this.info = info;
                this.producer = info.head_block_producer;
            })
            .catch((err) => {
                console.log(err)
            })
        }, this.interval);
    }
  }
} window.customElements.define('block-info', BlockInfo);