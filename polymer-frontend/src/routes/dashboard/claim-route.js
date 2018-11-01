/*jslint esversion: 6 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import { MyURLSetter } from "../../mixins/worbli-urlsetter.js";

class ClaimRoute extends MyURLSetter(PolymerElement) {
  static get template() {
    return html`
          <style include="shared-styles">
        :host {
          display: block;
        }
        iframe {
          margin-top: 50px;
          margin-bottom: 50px;
        }
        .split {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .side {
          width: 280px;
          padding-right: 30px;
        }
        .main {
          flex-grow: 1;
          max-width: 830px;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
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
        .navigation {
          color: #3a3e46;
          font-size: 11px;
          font-weight: 600;
          line-height: 16px;
          padding: 13px 12px;
          border-bottom: 1px solid #f5f5f5;
          background: none;
          text-shadow: none;
        }
        .navigation:hover {
          background-color: #F6F6F7;
        }
        .selected {
          color: black;
          background-color: #F6F6F7;
        }
        .footer {
          margin-top: 24px;
          display: block;
          height: 63px;
          border-top: 1px solid #f5f5f5;
          text-align: right;
        }
        h1 {
          color: var(--blue-text);
          font-weight: 600;
          margin-bottom: 12px;
          font-size: 13px;
          border-bottom: 1px solid #f5f5f5;
          padding: 12px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-top: 12px;
          margin-bottom: 12px;
        }
        .container a {
          text-decoration: none;
        }
        button {
          display: inline-block;
          vertical-align: middle;
          background: #4f7eb8;
          border: 1px solid #4b77ad;
          border-radius: 3px;
          box-shadow: none;
          text-shadow: none;
          color: #fff;
          font-weight: bold;
          font-size: 12px;
          padding: 0 13px;
          line-height: 29px;
          text-align: center;
          margin: 16px;
        }
        .input-area {
          display: flex;
        }
        .section-name {
          display: inline-block;
          min-width: 200px;
          padding: 12px;
          font-size: 15px;
          color: #6f727d;
          font-weight: normal;
        }
        .form-inputs {
          display: inline-block;
          padding: 12px;
        }
        label {
          display: block;
          font-size: 12px;
          color: #393d4d;
          font-weight: 600;
          padding: 17px 0 7px;
          width: 340px;
        }
        input {
          width: 307px;
          background: #f8f8f8;
          border: 1px solid #d1d5d7;
          border-radius: 2px;
          margin: 0;
          padding: 5px 7px;
          line-height: 19px;
          border: 1px solid #D9DBDE;
          border-radius: 3px;
          font-size: 13px;
          color: #393D4D;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(255, 255, 255, 0.075);
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(255, 255, 255, 0.075);
          -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02),0 1px 0 rgba(255, 255, 255, 0.075);
        }
        .comment {
          display: block;
          line-height: 18px;
          color: #9da1ab;
          padding: 9px 0 0;
          margin: 0 0 -2px 0;
          font-size: 12px;
        }
        hr {
          display: block;
          border-top: 1px solid #f5f5f5;
		}
		
		@media only screen and (max-width: 768px){
			.section-name{
				display:none;
			}
			.side {
				width: 100%;
				padding-left: 0;
			}
			.main{
				max-width:100%;
			}
			.section-name{
				width:auto;
				min-width:auto;
			}

		}
      </style>
      
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGVQG5T"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->

      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117118714-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-117118714-1');
      </script>
        <iron-localstorage name="token-storage" value="{{jwt}}"></iron-localstorage>

      <div class="split">
        <div class="side">
          <div class="container">
              <a href="/dashboard/profile"><div class="navigation">My Profile</div></a>
              <a href="/dashboard/verify"><div class="navigation">Identity Verification</div></a>
              <a href="/dashboard/claim"><div class="navigation selected">Claim Sharedrop</div></a>
              <a href="/" on-click="_logout"><div class="navigation">Logout</div></a>
          </div>
        </div>
        <div class="main">
          <h1>Claim Sharedrop</h1>
          <div class="input-area">
            <div class="section-name">Verify Account</div>
            <div class="form-inputs">
              <label>Mainnet Account Name </label>
              <input id="first-name" name="first-name" type="text" class="text">
              <small class="comment">Typically 12 charectors in length.</small>
            </div>
          </div>
          <div class="footer">
           <button type="button">Verify with Scatter</button>
           </div>
          <hr>
          <div class="input-area">
            <div class="section-name">Create Worbli Account</div>
            <div class="form-inputs">
            <label>Worbli Account Name</label>
              <input id="password" name="password" type="password" class="text">
              <small class="comment">Must be 6 - 12 charectors in length.</small>
            <label>Owner Public Key</label>
              <input id="password" name="password" type="password" class="text">
              <label>Active Public Key</label>
              <input id="confirm-password" name="confirm-password" type="password" class="text">
            </div>
          </div>
           <div class="footer">
            <button type="button">Create Worbli Account</button>
           </div>
           <hr>
          <div class="input-area">
            <div class="section-name">Success!</div>
            <div class="form-inputs">
              <small class="comment">Your WORBLI account has been succesfully created.</small>
              <small class="comment">Your new WORBLI account has been credited with 1000 WBI</small>
            </div>
          </div>
          <hr>
        <div class="input-area">
            <div class="section-name">Snapshot Failure</div>
            <div class="form-inputs">
              <small class="comment">Your Mainnet Account Name was not in the snap shot</small>
            </div>
          </div>
          <hr>
          <div class="input-area">
            <div class="section-name">Account Name Failure</div>
            <div class="form-inputs">
              <small class="comment">Your chosen WORBLI account name is not available</small>
            </div>
        </div>
        <hr>
          <div class="input-area">
            <div class="section-name">Please Wait</div>
            <div class="form-inputs">
              <small class="comment">We are now verifying your main net account</small>
            </div>
          </div>
          <hr>
          <div class="input-area">
            <div class="section-name">You are a VIP!</div>
            <div class="form-inputs">
              <small class="comment">Dear Worbli User. Because you're receiving a large amount of WBI from our Sharedrop, we want to invite you to attend an exclusive seminar and AMA with me and our team. We also want to invite you to learn more about what were building, and what you would like to see built on WORBLI that will benefit you. please email vip@worbli.io</small>
            </div>
          </div>



        </div>
        </div>
        </div>



      </div>
      
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
    static get properties() {
        return {
            jwt: {
                type: String
            },
        };
    }
    ready() {
        super.ready();
        console.log('in claim');
        let lsjwt = localStorage.getItem('lsjwt');
        this.jwt = lsjwt;
    }
    _logout(){
        localStorage.removeItem("lsjwt");
        localStorage.removeItem('worbli-firstname' );
        localStorage.removeItem('worbli-lastname');
        localStorage.removeItem('worbli-email');
        console.log("logging out?");
    }


} window.customElements.define('claim-route', ClaimRoute);
