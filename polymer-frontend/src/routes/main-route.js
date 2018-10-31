import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/side-bar/worbli-whitepaper.js';
import '../components/side-bar/worbli-support.js';
import '../components/side-bar/worbli-profservices.js';

class MainRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        .split {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .side {
          width: 280px;
          padding-left: 30px;
        }
        .main {
          flex-grow: 1;
        }
        h1 {
          color: var(--blue-text);
          font-size: 33px;
          font-weight: 500;
        }
        .tile-holder {
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          max-width: 840px
        }
        .square {
          width: 390px;
          min-height: 400px;
          margin-right: 24px;
          margin-bottom: 24px;
        }
        .footer{
          border-top: 1px solid #f5f5f5;
          padding: 12px;
        }
        .footer span{
          margin-top: 12px;
          font-size: 12px;
          font-weight: 200;
        }
        .pic {
          height: 333px;
        }
        h4 {
          font-size: 13px;
          font-weight: 600;
          line-height: 16px;
          margin-bottom: 6px;
        }
        .description {
          font-size: 11px;
          font-weight: 200;
          line-height: 18px;
        }
        .pic4 {
          background-image: url("./images/home-page/bottom-right.png");
          background-position: center; 
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;

        }
        .pic3 {
          background-image: url("./images/home-page/bottom-left.png");
          background-position: center; 
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;

        }
        .pic2 {
          background-image: url("./images/home-page/top-right.png");
          background-position: center; 
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;

        }
        .pic1 {
          background-image: url("./images/home-page/top-left.png");
          background-position: center; 
          background-repeat: no-repeat;
          background-size: cover;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;

        }
        .box-link {
          text-decoration: none;
          color: #393E46;
        } 
        .btn-signin {
          display: block;
          text-align: center;
        } 
        .btn-join {
          display: block;
          text-align: center;
		}
		
		.mobile-signup-buttons{
			display:none;
		}


		@media only screen and (max-width: 480px){

		}

		@media only screen and (max-width: 768px){
			.mobile-signup-buttons{
				display:block;
			}
			.box-link{
				width:100%;
				display:block;
			}
			.side {
				width: 100%;
				padding-left: 0;
			}

			.square {
				width: 100%;
				min-height: 400px;
				margin-right: 24px;
				margin-bottom: 24px;
			}

		}


		@media only screen and (max-width: 992px){}
      </style>


      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <div class="split">
        <div class="main">
          <h1>Where Fintech & Blockchain Meet</h1>
          <p>The future is near and we’re ready to take you there.</p>

          <div class="mobile-signup-buttons">
            <button class="btn-critical" on-click="_signIn">Sign In</button>
            <button class="btn-critical" on-click="_joinNow">Join Now</button>
          </div>
          
          <div class="tile-holder">

          <a href="/about/" class="box-link" tabindex="7">
            <div class="container square">
              <div class="pic pic1"></div>
              <div class="footer">
              <h4>WORBLI Financial District</h4>
              <div class="description">Learn about the next generation of financial services...</div>   
              </div>
            </div>
          </a>
        
          <div class="container square" on-click="_join" tabindex="8">
            <div class="pic pic2"></div>
            <div class="footer">
            <h4>Claim your Sharedrop</h4>
            <div class="description">If you held EOS on 7th September, 1159PM UTC...</div>
            </div>
          </div>

            <a href="/team/" class="box-link" tabindex="9">
              <div class="container square">
                <div class="pic pic3"></div>
                <div class="footer">
                  <h4>WORBLI Team & Partners</h4>
                  <div class="description">Discover who’s building the WORBLI ecosystem...</div>
                </div>
              </div>
            </a>

            <a href="/network/" class="box-link" tabindex="10">
              <div class="container square">
                <div class="pic pic4"></div>
                  <div class="footer">
                    <h4>Developer Resources</h4>
                    <div class="description">Check out which BP produced the last block...</div>
                  </div>
                </div>
              </div>
            </a>

        </div>
        
        <div class="side">
          <worbli-support></worbli-support>
          <worbli-whitepaper></worbli-whitepaper>
          <worbli-profservices></worbli-profservices>
          <worbli-telegram></worbli-telegram>
          
        </div>

      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }

  _joinNow(){
    this.set('route.path', '/join');
  }
  _signIn(){
    this.set('route.path', '/signin');
  }
  _join() {
    this.dispatchEvent(new CustomEvent('overlay',{bubbles: true, composed: true, detail: {action: 'join'}}));
  }

  ready(){
	  super.ready();
	  // if user is logged in, go to dashboard
	  if(localStorage.getItem('lsjwt')){
		this.set('route.path', '/dashboard/landing');
	  }
  }

} window.customElements.define('main-route', MainRoute);
