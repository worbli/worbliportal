import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';


class SupportRoute extends PolymerElement {
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
          <h1>Support</h1>
          <p>Help launch EOS main net in preparation for starting WORBLI’s Network 
• Seek additional funding through private investment sources 
• Finalize strategic, marketing and operational plans • Complete White Paper & Business Plan
• Recruit and hire additional technical, business and administrative team members • Commence Network Launch and AirDrop marketing and content campaigns • Launch WORBLI, the EOS Friendly (soft) Fork • Conduct WORBLI Network AirDrop • List WORBLI’s (WBI) Token on multiple digital asset exchanges • Seek additional funding to support WORBLI’s Network and the development of the Gamma Bank MVP • Confirm Block Producers & Block Producer Back Ups
• Add additional Block Producers to Worbli Network • Add AML/KYC verification to WORBLI user accounts. • Publish WORBLI Network governance processes and engage WORBLI community in ongoing governance efforts • Pursue additional strategic partnerships with digital currency exchanges • Facilitate the launch of dApps on WORBLI • Build Gamma Bank MVP • Incorporate WORBLI Foundation in a favourable regulatory environment (Switzerland, Bermuda, Malta, Panama, Singapore) • Commence lobbying efforts and developing relationships with US governance bodies (SEC, IRS, Federal Reserve, OCC)
• Test Gamma Bank MVP • Continue recruiting and hiring for WORBLI team • Hire world class executive team to develop and launch Gamma Bank • Secure global correspondent banking relationships • Begin development and support of additional applications to be developed and deployed on WORBLI • Develop long-term strategic, financial and marketing plans • Launch Gamma Bank in global markets (Africa, Latin America, Australia and Europe) • Ramp up global marketing efforts • Develop correspondent banking relationships in the US • Alternative Product Development on WORBLI. Insurance, DEX’s and more are in the pipeline to be developed. 
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
} window.customElements.define('support-route', SupportRoute);
