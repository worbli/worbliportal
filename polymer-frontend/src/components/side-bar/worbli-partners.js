import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliPartners extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        div {
            flex-grow: 1;
            color: var(--grey-text);
            font-size: 12px;
        }
        .bp {
          width: 60px;
          height: 60px;
          padding: 16px;
        }
        .bps{
          display: flex;
          flex-wrap: wrap
		}
		@media only screen and (max-width: 768px){
			.container{
				width:100%;
				text-align:center;
			}
		}
      </style>



        <div class="container">
            <div class="title">Strategic Partners</div>
            <div class="bps">
              <div class="bp"><a href="http://www.pinsentmasons.com"><img width="60px" src="./images/strategic-partners/pinsent-masons.png"></a></div>
              <div class="bp"><a href="http://hklaw.com/"><img width="60px" src="./images/strategic-partners/holland-knight.png"></a></div>
              <div class="bp"><a href="http://onfido.com/"><img width="60px" src="./images/strategic-partners/on-fido.png"></a></div>
              <div class="bp"><a href="http://interblockchain.io/"><img width="60px" src="./images/strategic-partners/interblockchain-io.png"></a></div>
              <div class="bp"><a href="http://webprofits.com.au/"><img width="60px" src="./images/strategic-partners/webprofits.png"></a></div>
              <div class="bp"><a href="http://www.trybe.one"><img width="60px" src="./images/strategic-partners/trybe.png"></a></div>
              <div class="bp"><a href="http://eosdetroit.io/"><img width="60px" src="./images/strategic-partners/eos-detroit.png"></a></div>
              <div class="bp"><a href="http://www.eosgermany.one"><img width="60px" src="./images/strategic-partners/eos-germany.png"></a></div>
              <div class="bp"><a href="http://genereos.io/"><img width="60px" src="./images/strategic-partners/genereos.png"></a></div>
              <div class="bp"><a href="https://www.chintai.io/"><img width="60px" src="./images/strategic-partners/chintai.png"></a></div>
            </div>
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

} window.customElements.define('worbli-partners', WorbliPartners);