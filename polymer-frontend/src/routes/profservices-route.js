import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-producers.js';
import '../components/side-bar/worbli-partners.js';
import '../components/side-bar/worbli-telegram.js';
class ProfservicesRoute extends PolymerElement {
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
        .main {
          flex-grow: 1;
          max-width: 850px;
        }
        h1 {
          color: var(--blue-text);
          font-weight: 600;
          margin-bottom: 12px;
        }
        b {
          padding-top: 24px;
          display: block;
          font-size: 20px;
          font-weight: 600;
        }
        iframe {
          margin-top: 50px;
		  margin-bottom: 50px;
		  width:100%;
        }
        .side {
          width: 280px;
          padding-left: 30px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .features {
          display: flex;
          flex-wrap: wrap; 
        }
        .left {
          flex-grow:1;
          max-width: 50%;
        }
        .right{
          flex-grow:1;
          max-width: 50%;
        }
        .features p {
          padding-right: 24px;
        }
        .features b {
          font-size: 16px;
          font-weight: 600;
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
          <h1>Professional Services</h1>
          <b>WORBLI Professional Servives brings blockchain expertise and innovation into the heart of every industry.</b></br></br>
          <h2>Delivery Platforms</h2>
          <p>Web, Mobile, Games Platforms</p>
          <h2>Flexible Integration</h2>
          <p>If you want us to take on the entire product or hand of to us for the parts you are unfamiliar with</p>
          <h2>Smart Contracts</h2>
          <p>Seasoned cpp devs to facilitate contracts that bridge the chain and dApp</p>
          <h2>Security Audits</h2>
          <p>Knowing what you are releasing can only be used as its intended</p>
          <h2>Funding</h2>
          <p>Raising funds</p></br>
          <h2>Product Lifecycle</h2>
          <p>Ideation & Specification, Wireframe UX/UI, Graphic Design, Implementation, Audit, Launch, Review</p></br>

        </div>
        <div class="side">
            <worbli-partners></worbli-partners>
            <worbli-producers></worbli-producers>
            <worbli-telegram></worbli-telegram>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('profservices-route', ProfservicesRoute);
