/*jslint esversion: 6 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import { MyURLSetter } from "../../mixins/worbli-urlsetter.js";

class ProfileRoute extends MyURLSetter(PolymerElement) {
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

      <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <div class="split">
        <div class="side">
          <div class="container">
              <a href="/dashboard/profile"><div class="navigation selected">My Profile</div></a>
              <a href="/dashboard/verify"><div class="navigation">Identity Verification</div></a>
              <a href="/dashboard/claim"><div class="navigation">Claim Sharedrop</div></a>
              <a href="/" on-click="_logout"><div class="navigation">Logout</div></a>
          </div>
        </div>
        <div class="main">
          <h1>My Profile</h1>
          <span id="success" style="display:none"> Thank you your profile has been saved </span>
          <div class="input-area">
          <div class="section-name">Profile</div>
          <iron-ajax
                id="userAccess"
                handle-as="json"
                on-response="handleResponse"
                debounce-duration="300">
          </iron-ajax>

          <iron-form id="registration">
          <form>
          <div class="form-inputs">
          <label>Given Name </label>
          <input id="firstname" name="firstname" type="text" class="text" value="{{firstname}}" readonly>
          <small class="comment">Your real name, as found on your ID.</small>
          <label>Family Name </label>
          <input id="lastname" name="lastname" type="text" class="text" value="{{lastname}}" readonly>
          <small class="comment">Your family name, as found on your ID.</small>
          <label>Email Address</label>
          <input id="email" name="email" type="text" class="text" value="{{email}}" readonly>
          <small class="comment">Your email address, as used to request registration.</small>
          <label>Country of Residence</label>
          <input value="test" type="text">
          </div>
          </div>
          <div class="input-area">
          <div class="section-name">Password</div>

          <div class="form-inputs">
          <label>Password</label>

          <div id="misMatchedPass" style="display:none;"> <font color="red"> Passwords don't match </font></div>
          <div id="shortPass" style="display:none;"> <font color="red"> Password is too short </font></div>
          <div id="insufficientlyStrong" style="display:none;"> <font color="red"> Password requires one upper case, one lower case, one symbol and one number </font></div>
          <input id="pass" name="password" type="password" class="text" required>
          <label>Confirm Password</label>
          <input id="confirmPass" name="confirmPass" type="password" class="text" required>
          </div>
          </div>
          <div class="footer">
          <button on-click="_updatePassword">Save Profile</button>
          </div>
          </form>
          </iron-form>

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
            firstname:{
                type:String
            },
            lastname:{
                type:String
            },
            email:{
                type:String
            },
            requestType: {
                type: String
            },
            success: {
                type: Boolean,
                observer: '_regSuccess',
            },
        };
    }

    _regSuccess() { 
        if (this.success) {
            this.$.success.style.display = "block";
        }
    }

    _validatePassword(){
        //const strongRegex = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&*])(?=.{8,})");
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        console.log("attempting to validate password");
        let pass = this.$.pass.value;
        if (pass.length < 8) {
            this.$.insufficientlyStrong.style.display = 'None';
            this.$.misMatchedPass.style.display = 'none';
            this.$.shortPass.style.display = 'block';
            return false;
        }
        console.log("password long enough");
        if (!strongRegex.test(pass) ) {
            this.$.insufficientlyStrong.style.display = 'block';
            this.$.misMatchedPass.style.display = 'none';
            this.$.shortPass.style.display = 'none';
            return false;
        }
        console.log("password sufficiently complex");
        if (this.$.pass.value == this.$.confirmPass.value) {
            this.$.insufficientlyStrong.style.display = 'None';
            this.$.misMatchedPass.style.display = 'none';
            this.$.shortPass.style.display = 'none';
            return true;
        } else {
            this.$.insufficientlyStrong.style.display = 'None';
            this.$.shortPass.style.display = 'none';
            this.$.misMatchedPass.style.display = 'block';
            return false;
        }
    }

    _updatePassword() {
        if (this._validatePassword()){
            let params = {};
            params.password = this.$.pass.value;
            let url = this.baseAPIurl;
            url = url + "/api/register/";
            this.$.userAccess.url = url;
            this.$.userAccess.method="put";
            this.$.userAccess.headers['content-type']="application/json";
            this.$.userAccess.body = params;
            this.$.userAccess.generateRequest();
        }
    }

    _logout(){
        localStorage.removeItem("lsjwt");
        localStorage.removeItem('worbli-firstname' );
        localStorage.removeItem('worbli-lastname');
        localStorage.removeItem('worbli-email');
        console.log("logging out?");
    }

    _getUserDetails() {
        let url = this.baseAPIurl;
        url = url + "/api/userDetails/";
        //let jwt = localStorage.getItem('lsjwt');
        //let auth = "Bearer:" + jwt;
        let auth = "Bearer:" + this.jwt;
        this.requestType = "userDetails";
        this.$.userAccess.url = url;
        this.$.userAccess.headers.Authorization = auth;
        this.$.userAccess.generateRequest();
    }

    _handleUserDetailsResponse(response) { 
        localStorage.setItem('worbli-firstname', response.firstname);
        localStorage.setItem('worbli-lastname', response.lastname);
        localStorage.setItem('worbli-email', response.email);
        this.firstname = response.firstname;
        this.lastname = response.lastname;
        this.email = response.email;
    }

    _handlePasswordUpdate(response) {
        console.log("handling password update!");
    }

    handleResponse(event, request) {
        var response = request.response;
        console.log(response);
        if (this.requestType == "userDetails") {
            this._handleUserDetailsResponse(response);
        } else if (this.requestType == "passwordUpdate") {
            this._handlePasswordUpdate(response);
        }
    }

    ready() {
        super.ready();
        let lsjwt = localStorage.getItem('lsjwt');
        this.jwt = lsjwt;
        this.success = localStorage.getItem('worbli-regSuccess');
        let fn = localStorage.getItem('worbli-firstname');
        if (fn == null) { 
            this._getUserDetails();
        } else {
            if (this.firstname == null) {
                this.firstname = fn;
                this.lastname = localStorage.getItem('worbli-lastname');
                this.email = localStorage.getItem('worbli-email');
            }
        }
    }

} window.customElements.define('profile-route', ProfileRoute);

