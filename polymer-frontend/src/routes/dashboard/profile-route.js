/*jslint esversion: 6 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import '../../components/side-bar/worbli-snapshot.js';
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
                <div class="navigation">Identity Verification</div>
                <div class="navigation">Claim Sharedrop</div>
              <a href="/" on-click="_logout"><div class="navigation">Logout</div></a>
          </div>
          <worbli-snapshot></worbli-snapshot>
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
                        <select class="dropdown" id="location" disabled>
                            <option>Select</option>
                                <option value="4">Afghanistan</option>
                                <option value="248">Åland Islands</option>
                                <option value="8">Albania</option>
                                <option value="12">Algeria</option>
                                <option value="16">American Samoa</option>
                                <option value="20">Andorra</option>
                                <option value="24">Angola</option>
                                <option value="660">Anguilla</option>
                                <option value="10">Antarctica</option>
                                <option value="28">Antigua and Barbuda</option>
                                <option value="32">Argentina</option>
                                <option value="51">Armenia</option>
                                <option value="533">Aruba</option>
                                <option value="36">Australia</option>
                                <option value="40">Austria</option>
                                <option value="31">Azerbaijan</option>
                                <option value="44">Bahamas</option>
                                <option value="48">Bahrain</option>
                                <option value="50">Bangladesh</option>
                                <option value="52">Barbados</option>
                                <option value="112">Belarus</option>
                                <option value="56">Belgium</option>
                                <option value="84">Belize</option>
                                <option value="204">Benin</option>
                                <option value="60">Bermuda</option>
                                <option value="64">Bhutan</option>
                                <option value="68">Bolivia, Plurinational State of</option>
                                <option value="535">Bonaire, Sint Eustatius and Saba</option>
                                <option value="70">Bosnia and Herzegovina</option>
                                <option value="72">Botswana</option>
                                <option value="74">Bouvet Island</option>
                                <option value="76">Brazil</option>
                                <option value="86">British Indian Ocean Territory</option>
                                <option value="96">Brunei Darussalam</option>
                                <option value="100">Bulgaria</option>
                                <option value="854">Burkina Faso</option>
                                <option value="108">Burundi</option>
                                <option value="116">Cambodia</option>
                                <option value="120">Cameroon</option>
                                <option value="124">Canada</option>
                                <option value="132">Cape Verde</option>
                                <option value="136">Cayman Islands</option>
                                <option value="140">Central African Republic</option>
                                <option value="148">Chad</option>
                                <option value="152">Chile</option>
                                <option value="156">China</option>
                                <option value="162">Christmas Island</option>
                                <option value="166">Cocos (Keeling) Islands</option>
                                <option value="170">Colombia</option>
                                <option value="174">Comoros</option>
                                <option value="178">Congo</option>
                                <option value="180">Congo, the Democratic Republic of the</option>
                                <option value="184">Cook Islands</option>
                                <option value="188">Costa Rica</option>
                                <option value="384">Côte d'Ivoire</option>
                                <option value="191">Croatia</option>
                                <option value="192">Cuba</option>
                                <option value="531">Curaçao</option>
                                <option value="196">Cyprus</option>
                                <option value="203">Czech Republic</option>
                                <option value="208">Denmark</option>
                                <option value="262">Djibouti</option>
                                <option value="212">Dominica</option>
                                <option value="214">Dominican Republic</option>
                                <option value="218">Ecuador</option>
                                <option value="818">Egypt</option>
                                <option value="222">El Salvador</option>
                                <option value="226">Equatorial Guinea</option>
                                <option value="232">Eritrea</option>
                                <option value="233">Estonia</option>
                                <option value="231">Ethiopia</option>
                                <option value="238">Falkland Islands (Malvinas)</option>
                                <option value="234">Faroe Islands</option>
                                <option value="242">Fiji</option>
                                <option value="246">Finland</option>
                                <option value="250">France</option>
                                <option value="254">French Guiana</option>
                                <option value="258">French Polynesia</option>
                                <option value="260">French Southern Territories</option>
                                <option value="266">Gabon</option>
                                <option value="270">Gambia</option>
                                <option value="268">Georgia</option>
                                <option value="276">Germany</option>
                                <option value="288">Ghana</option>
                                <option value="292">Gibraltar</option>
                                <option value="300">Greece</option>
                                <option value="304">Greenland</option>
                                <option value="308">Grenada</option>
                                <option value="312">Guadeloupe</option>
                                <option value="316">Guam</option>
                                <option value="320">Guatemala</option>
                                <option value="831">Guernsey</option>
                                <option value="324">Guinea</option>
                                <option value="624">Guinea-Bissau</option>
                                <option value="328">Guyana</option>
                                <option value="332">Haiti</option>
                                <option value="334">Heard Island and McDonald Islands</option>
                                <option value="336">Holy See (Vatican City State)</option>
                                <option value="340">Honduras</option>
                                <option value="344">Hong Kong</option>
                                <option value="348">Hungary</option>
                                <option value="352">Iceland</option>
                                <option value="356">India</option>
                                <option value="360">Indonesia</option>
                                <option value="364">Iran, Islamic Republic of</option>
                                <option value="368">Iraq</option>
                                <option value="372">Ireland</option>
                                <option value="833">Isle of Man</option>
                                <option value="376">Israel</option>
                                <option value="380">Italy</option>
                                <option value="388">Jamaica</option>
                                <option value="392">Japan</option>
                                <option value="832">Jersey</option>
                                <option value="400">Jordan</option>
                                <option value="398">Kazakhstan</option>
                                <option value="404">Kenya</option>
                                <option value="296">Kiribati</option>
                                <option value="408">Korea, Democratic People's Republic of</option>
                                <option value="410">Korea, Republic of</option>
                                <option value="414">Kuwait</option>
                                <option value="417">Kyrgyzstan</option>
                                <option value="418">Lao People's Democratic Republic</option>
                                <option value="428">Latvia</option>
                                <option value="422">Lebanon</option>
                                <option value="426">Lesotho</option>
                                <option value="430">Liberia</option>
                                <option value="434">Libya</option>
                                <option value="438">Liechtenstein</option>
                                <option value="440">Lithuania</option>
                                <option value="442">Luxembourg</option>
                                <option value="446">Macao</option>
                                <option value="807">Macedonia, the former Yugoslav Republic of</option>
                                <option value="450">Madagascar</option>
                                <option value="454">Malawi</option>
                                <option value="458">Malaysia</option>
                                <option value="462">Maldives</option>
                                <option value="466">Mali</option>
                                <option value="470">Malta</option>
                                <option value="584">Marshall Islands</option>
                                <option value="474">Martinique</option>
                                <option value="478">Mauritania</option>
                                <option value="480">Mauritius</option>
                                <option value="175">Mayotte</option>
                                <option value="484">Mexico</option>
                                <option value="583">Micronesia, Federated States of</option>
                                <option value="498">Moldova, Republic of</option>
                                <option value="492">Monaco</option>
                                <option value="496">Mongolia</option>
                                <option value="499">Montenegro</option>
                                <option value="500">Montserrat</option>
                                <option value="504">Morocco</option>
                                <option value="508">Mozambique</option>
                                <option value="104">Myanmar</option>
                                <option value="516">Namibia</option>
                                <option value="520">Nauru</option>
                                <option value="524">Nepal</option>
                                <option value="528">Netherlands</option>
                                <option value="540">New Caledonia</option>
                                <option value="554">New Zealand</option>
                                <option value="558">Nicaragua</option>
                                <option value="562">Niger</option>
                                <option value="566">Nigeria</option>
                                <option value="570">Niue</option>
                                <option value="574">Norfolk Island</option>
                                <option value="580">Northern Mariana Islands</option>
                                <option value="578">Norway</option>
                                <option value="512">Oman</option>
                                <option value="586">Pakistan</option>
                                <option value="585">Palau</option>
                                <option value="275">Palestinian Territory, Occupied</option>
                                <option value="591">Panama</option>
                                <option value="598">Papua New Guinea</option>
                                <option value="600">Paraguay</option>
                                <option value="604">Peru</option>
                                <option value="608">Philippines</option>
                                <option value="612">Pitcairn</option>
                                <option value="616">Poland</option>
                                <option value="620">Portugal</option>
                                <option value="630">Puerto Rico</option>
                                <option value="634">Qatar</option>
                                <option value="638">Réunion</option>
                                <option value="642">Romania</option>
                                <option value="643">Russian Federation</option>
                                <option value="646">Rwanda</option>
                                <option value="652">Saint Barthélemy</option>
                                <option value="654">Saint Helena, Ascension and Tristan da Cunha</option>
                                <option value="659">Saint Kitts and Nevis</option>
                                <option value="662">Saint Lucia</option>
                                <option value="663">Saint Martin (French part)</option>
                                <option value="666">Saint Pierre and Miquelon</option>
                                <option value="670">Saint Vincent and the Grenadines</option>
                                <option value="882">Samoa</option>
                                <option value="674">San Marino</option>
                                <option value="678">Sao Tome and Principe</option>
                                <option value="682">Saudi Arabia</option>
                                <option value="686">Senegal</option>
                                <option value="688">Serbia</option>
                                <option value="690">Seychelles</option>
                                <option value="694">Sierra Leone</option>
                                <option value="702">Singapore</option>
                                <option value="534">Sint Maarten (Dutch part)</option>
                                <option value="703">Slovakia</option>
                                <option value="705">Slovenia</option>
                                <option value="90">Solomon Islands</option>
                                <option value="706">Somalia</option>
                                <option value="710">South Africa</option>
                                <option value="239">South Georgia and the South Sandwich Islands</option>
                                <option value="728">South Sudan</option>
                                <option value="724">Spain</option>
                                <option value="144">Sri Lanka</option>
                                <option value="729">Sudan</option>
                                <option value="740">Suriname</option>
                                <option value="744">Svalbard and Jan Mayen</option>
                                <option value="748">Swaziland</option>
                                <option value="752">Sweden</option>
                                <option value="756">Switzerland</option>
                                <option value="760">Syrian Arab Republic</option>
                                <option value="158">Taiwan, Province of China</option>
                                <option value="762">Tajikistan</option>
                                <option value="834">Tanzania, United Republic of</option>
                                <option value="764">Thailand</option>
                                <option value="626">Timor-Leste</option>
                                <option value="768">Togo</option>
                                <option value="772">Tokelau</option>
                                <option value="776">Tonga</option>
                                <option value="780">Trinidad and Tobago</option>
                                <option value="788">Tunisia</option>
                                <option value="792">Turkey</option>
                                <option value="795">Turkmenistan</option>
                                <option value="796">Turks and Caicos Islands</option>
                                <option value="798">Tuvalu</option>
                                <option value="800">Uganda</option>
                                <option value="804">Ukraine</option>
                                <option value="784">United Arab Emirates</option>
                                <option value="826">United Kingdom</option>
                                <option value="840">United States</option>
                                <option value="581">United States Minor Outlying Islands</option>
                                <option value="858">Uruguay</option>
                                <option value="860">Uzbekistan</option>
                                <option value="548">Vanuatu</option>
                                <option value="862">Venezuela, Bolivarian Republic of</option>
                                <option value="704">Viet Nam</option>
                                <option value="92">Virgin Islands, British</option>
                                <option value="850">Virgin Islands, U.S.</option>
                                <option value="876">Wallis and Futuna</option>
                                <option value="732">Western Sahara</option>
                                <option value="887">Yemen</option>
                                <option value="894">Zambia</option>
                                <option value="716">Zimbabwe</option>
                            </select>
          </div>
          </div>
          <hr>
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
            location:{
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
            url = url + "/api/changePassword/";
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
        localStorage.removeItem('worbli-location');
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
        localStorage.setItem('worbli-location', response.location);
        this.firstname = response.firstname;
        this.lastname = response.lastname;
        this.email = response.email;
        this.$.location.value = this.location;
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
                this.location = localStorage.getItem('worbli-location');
                this.$.location.value = this.location;
            }
        }
    }

} window.customElements.define('profile-route', ProfileRoute);

