import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliProfservices extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        div {
            flex-grow: 1;
            color: var(--grey-text);
            font-size: 12px;
        }
        .faq-text {
          font-size: 13px;
          font-weight: 200;
          line-height: 16px;
          padding: 12px;
        }
        .bottom-space {
          padding-bottom: 20px;
        }
        .support-icon{
          padding-left: 20px;
		}
		@media only screen and (max-width: 768px){
			.container{
				width:100%;
				text-align:center;
			}
			.container a {
				margin:0 auto;
			}
		}
      </style>
        <div class="container">
            <div class="title">Professional Services</div>
            <p class="faq-text">Leveraging our deep talent pool, launch your dApp in safe hands</p>
            <a href="/profservices/" class="button" target="_blank">Enquire Now</a>
            <p class="bottom-space"></p>
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

} window.customElements.define('worbli-profservices', WorbliProfservices);