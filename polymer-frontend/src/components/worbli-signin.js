/*jslint esversion: 6 */
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-localstorage/iron-localstorage.js';
import { MyURLSetter } from "../mixins/worbli-urlsetter.js";
import '../css/shared-styles.js';

class WorbliSignin extends MyURLSetter(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        h2 {
            font-size: 22px;
            line-height: 26px;
            margin-bottom:12px;
            margin-top:0px;
            color: var(--blue-text);
            font-weight: 600;
            margin-bottom: 12px;
        }
        p {
        margin: 24px 0 24px 0;
        }
        input.text {
            padding: 8px;
            background: #F0F1F3;
            display: block;
            width: 100%;
            box-shadow: inset 0 1px 1px rgba(0,0,0,.02);
            border: 1px solid;
            border-color: #C9CCD0 #CFD2D6 #CFD2D6;
            border-radius: 3px;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            font-size: 14px;
            height: auto;
            margin-bottom:10px;
        }
        input:focus, select:focus, textarea:focus, button:focus {
            outline: none;
        }
  
        input.text:focus {
            background: #fff;
            border: 1px solid #8bd2d0 !important;
            box-shadow: 0 0 0 2px rgba(133,176,212,0.4);
        }
      
        input.text.error {
            color: #db6265;
            border-color: #d2928c;
            box-shadow: 0 0 0 2px #f0d1ce;
        }
  
        button {
            cursor: pointer;
            vertical-align: middle;
            outline: none;
        }
  
        label{
            font-size: 11px;
        }
        .center {
            padding: 20px 0 0;
            text-align: center;
            color: #8d919a;
            font-size: 12px;
            line-height: 20px;
        }
        .center span {
            color: #4079B0;
            cursor: pointer;
            font-weight: 600;
        }

      </style>

        <iron-localstorage name="token-storage" value="{{jwt}}"></iron-localstorage>
        <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
          <iron-ajax
                id="loginHandler"
                handle-as="json"
                on-response="handleLogin"
                on-error="handleUserError"
                debounce-duration="300">
          </iron-ajax>
            <h2>Sign In</h2>
			<p>Welcome back to WORBLI.....</p>
			<iron-form>
				<form>
					<input type="text" class="text" name="email" placeholder="Email" id="email" required>
					<input type="text" class="text" name="password" placeholder="Password" id="password" required>
					<button class="btn-critical" on-click="_checkPassword">Sign In</button>
				</form>
			</iron-form>
            <div class="center">New to Worbli? <span on-click="_join">Join WORBLI</span></div>
    `;
  }
    static get properties() {
        return {
            join: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true,
            },
            hide: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true,
            },
            jwt: {
                type: String
            },
        };
    }
    _checkPassword() {
        let params = {};
        params.email = this.$.email.value;
        params.password = this.$.password.value;
        console.log(params);
        let url = this.baseAPIurl;
        url = url + "api/login/";
        this.$.loginHandler.url = url;
        this.$.loginHandler.method="post";
        this.$.loginHandler.headers['content-type']="application/json";
        this.$.loginHandler.body = params;
        this.$.loginHandler.generateRequest();
    }
    _join(){
        this.join = true;
    }


    handleLogin(event, request) {
        var response = request.response;
        //console.log(response);
        if (response.success == true){
            console.log("legit response");
            this.jwt = response.jwt;

            localStorage.setItem('lsjwt', response.jwt);
            console.log("hm?");
            console.log(this.jwt);
            let lsjwt = localStorage.getItem('lsjwt');
            console.log(lsjwt);

            this.hide = true;
            this.set('route.path', '/dashboard/claim');
        }
    }
    handleUserError(event, request) {
        console.log('errored');
    }

} window.customElements.define('worbli-signin', WorbliSignin);
