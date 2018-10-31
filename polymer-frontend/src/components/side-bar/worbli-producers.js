import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliProducers extends PolymerElement {
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
          opacity: 0.5;
          -webkit-filter: grayscale(0.5);
          filter: grayscale(0.5);
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
    <div class="title">Block Producers</div>
        <div class="bps">
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/dune.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-blocksmith.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-cafe-block.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-cannon.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-costa-rica.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-dac.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-detroit.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-dublin.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-fish.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-germany.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-nairobi.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-new-york.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-real.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-rio.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-sg.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-sphere.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-titan.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-tribe.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eosys.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/genereos.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/gravity-pool.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/hkeos.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/infinity-bloc.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/chain-rift.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/eos-gravity-pool.png"></div>
            <div class="bp"><img width="60px" src="./images/bp-logos/blue/octagon-labs.png"></div>
        </div>
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

} window.customElements.define('worbli-producers', WorbliProducers);