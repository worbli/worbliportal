import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/worbli-profile.js';

class RegisterRoute extends PolymerElement {
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
          <h1>Register</h1>
          <worbli-profile name="domenic-thomas" title="CEO" linkedin="domenic-thomas-5403676"></worbli-profile>
          <worbli-profile name="craig-kellogg" title="COO" linkedin="ckellogg"></worbli-profile>
          <worbli-profile name="robert-dewilder" title="CTO" linkedin="robert-dewilder-6b83311/"></worbli-profile>
          <worbli-profile name="sam-russell" title="EVP Marketing & Innovation" linkedin="samueljamesrussell"></worbli-profile>
          <worbli-profile name="laura-magnano" title="Head of Marketing" linkedin="lauramagnano"></worbli-profile>
          <worbli-profile name="charlie-wapshott" title="VP Investor Relations" linkedin="charlie-wapshott-65a7a737"></worbli-profile>
          <worbli-profile name="brooke-munson" title="Partnerships & Commercial Manager" linkedin="brooke-munson"></worbli-profile>
          <worbli-profile name="andrew-woodman" title="PR & Communications Manager" linkedin="adwoodman"></worbli-profile>
          <worbli-profile name="peregrine-buckler" title="UI/UX Manager" linkedin="peregrine-buckler"></worbli-profile>
          <worbli-profile name="chethan-rangaswamy" title="Product Marketing Manager" linkedin="chethanrangaswamy"></worbli-profile>
          <worbli-profile name="enrique-murua" title="Customer Service & Community Manager" linkedin="enrique-m"></worbli-profile>
          <worbli-profile name="mitchell-mahaffey" title="Partnerships Manager" linkedin="mitchell-mahaffey"></worbli-profile>
          <worbli-profile name="ramoncito-abella" title="Marketing & Design Executive" linkedin="ramoncito-abella-37424ba4"></worbli-profile>
          <worbli-profile name="martin-quiambao" title="Graphic Designer" linkedin="martin-quiambao-404588153"></worbli-profile>
          <worbli-profile name="fuzzy" title="Strategic Advisor" linkedin=""></worbli-profile>
          <worbli-profile name="timothy-brown" title="Blockchain Applications Adviser" linkedin="timothy-brown-41875013"></worbli-profile>
          <worbli-profile name="david-packham" title="EOS and Board Advisor" linkedin="davidpackham"></worbli-profile>
          <worbli-profile name="gideon-hornung" title="Marketing & Product Advisor" linkedin="gideon-hornung"></worbli-profile>
          <worbli-profile name="naeem-al-obaidi" title="Marketing Advisor" linkedin="naeem-al-obaidi"></worbli-profile>
          <worbli-profile name="tom-bicknell" title="Fintech Legal Advisor" linkedin="tom-bicknell-25629b47"></worbli-profile>
          <worbli-profile name="michael-cowan" title="Analytics & Commercial Advisor" linkedin="michaelcowan88"></worbli-profile>
 	        <worbli-profile name="joshua-earp" title="Marketing Advisor" linkedin=""></worbli-profile>
 	        <worbli-profile name="jeff-anderson" title="Operations Advisor" linkedin="jeff-anderson-3777aa13"></worbli-profile>
        </div>
        <div class="side">
        <div class="container">
            <div class="title">White Paper</div>
        </div>
        <div class="container">
            <div class="title">Our Partners</div>
        </div>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('register-route', RegisterRoute);
