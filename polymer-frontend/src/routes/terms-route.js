import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/side-bar/worbli-whitepaper.js';
import '../components/side-bar/worbli-support.js';

class TermsRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        iframe {
          margin-top: 50px;
          margin-bottom: 50px;
          width: 100%;
          height: 8200px;
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
          max-width: 770px;
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
        h1 {
          color: var(--blue-text);
          font-weight: 600;
          margin-bottom: 12px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-bottom: 12px;
          margin-top: 12px;
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
      
      <div class="split">
        <div class="main">
        <h2><strong>WORBLI USER TERMS</strong></h2></br>
        <p>As a user of the WORBLI ecosystem, you will be subject to certain terms of use based on your status and activities. These are:</p></br>
        <ul>
          <li><strong>Platform User</strong> – all users will sign up to the WORBLI Platform. This is essentially the first step in your WORBLI journey. This is where you find out about the WORBLI Network, WORBLI Developer Support and WORBLI Tokens, etc. Here you can read and post content, interact with other WORBLI users and ask questions of WORBLI directly. In order to be a Platform User, you are only required to provide us with your name and contact details. Your use of the WORBLI Platform is governed by the <strong>Platform Terms</strong>, which <em>only</em> set out standard rights and obligations around your use of the WORBLI Platform. At this stage, apart from your name and email, we are not seeking to collect any further identification information nor will we use it for any purpose other than the limited purpose stated in our <strong>Platform Terms</strong> and <strong>Privacy Policy</strong> (both set out below).</li></br>
          <li><strong>Network User</strong> – the WORBLI Network is the platform upon which users interact with and develop their own dApps. It is the heart of the WORBLI ecosystem. Users gain access to the WORBLI Network upon completion of WORBLI's 'know your customer' verification process. This verification process is integral to WORBLI's goal of being the world's first compliant blockchain network. However, rest assured, we will not be using the information we collect for any reason other than to complete verification, operate the WORBLI Network and meet our own requirements under applicable law. Please read through our <strong>Privacy Policy</strong> set out below for more details. Once you are verified as a Network User you will be able to fully access the WORBLI Network including the dApps available on it. Your use of the WORBLI Network will then be subject to the <strong>Network Terms</strong> set out below.</li></br>
          <li><strong>dApp Developer</strong> – we view the WORBLI Network as the world's leading platform to develop distributed applications (dApps) that require a robust compliance framework. It is very important to us that we attract and support the world's best dApps developers. We have therefore built a clear rules-based framework to support and nurture developers and ensure they are aligned with our compliance-focused culture. As such, we ask that you agree to our <strong>Network Terms</strong>, as a user of the WORBLI Network, but also our <strong>Developer Terms</strong> which are set out below as a schedule to the <strong>Network Terms</strong>.</li>
      </ul>
      <br/>
      <br/><p>In time, we may adapt and update aspects of the <strong>Platform Terms, Network Terms, Developer Terms</strong> and/or our <strong>Privacy Policy</strong> in order to deal with changes to our operations or as required by law. These changes will always be posted to the WORBLI Portal and we will do our best to notify you of the same. Rest assured, no changes will be applicable to you until they have been made available on the WORBLI Portal.</p>
        </div>
        <div class="side">
          <worbli-support></worbli-support>
          <worbli-whitepaper></worbli-whitepaper>
          <worbli-telegram></worbli-telegram>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('terms-route', TermsRoute);
