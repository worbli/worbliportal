import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';


class SharedropRoute extends PolymerElement {
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
          <h1>5 Steps to claim your Share Drop</h1>
          <p>

            1. Click Join Now and Enter an email<br>
            2. Verify your email<br>
            3. Complete Registration by following the link in your email <br>
            4. Complete Itentity Verification<br>
            5. Select a Worbli Username and provide a public key to recieve the share drop<br>
 
</p>
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
} window.customElements.define('sharedrop-route', SharedropRoute);
