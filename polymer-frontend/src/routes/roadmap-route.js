import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/worbli-roadmap.js';
import '../components/side-bar/worbli-whitepaper.js';
import '../components/side-bar/worbli-partners.js';
import '../components/side-bar/worbli-telegram.js';

class RoadmapRoute extends PolymerElement {
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
          font-weight: 200;
          margin-bottom: 12px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-top: 12px;
          margin-bottom: 12px;
		}
		@media only screen and (max-width: 768px){
			.side {
				width: 100%;
				padding-left: 0;
			}
		}
      </style>


      <div class="split">
      <div class="main">
        <h1>Roadmap</h1>
          <p>Help launch EOS main net in preparation for starting WORBLI's Network</p>
          <h2>dApps</h2>
          <worbli-roadmap title="AML/KYC verification to WORBLI user accounts" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Facilitate the launch of dApps on WORBLI" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="dApp 1 - Recruit Worbli Block Producers to Lead Development" status="complete"></worbli-roadmap>
          <worbli-roadmap title="dApp 2 - Recruit Worbli Block Producers to Lead Development" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="dApp 1 - Specification for Development" status="complete"></worbli-roadmap>
          <worbli-roadmap title="dApp 2 - Specification for Development" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Portal - Launch and Integrate Block Explorer" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Portal - Reduce and refine the sign up process for new users" status="testing"></worbli-roadmap>
          <worbli-roadmap title="Portal - Launch WBI bounty for additional customer infomation" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Portal - Dashboard News Feed" status="testing"></worbli-roadmap>
          <worbli-roadmap title="Portal - Community chat box" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Portal - Launch Version 2" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Portal - Launch Friend get Friend campaign" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="WORBLI Wallet - Custodian Multi Crypto Wallet" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="WORBLI Toolkit" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="WORBLI Network Monitor" status="complete"></worbli-roadmap>
          <worbli-roadmap title="WORBLI Blockexplorer" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Interblockchain - Integrate Payment Gateway, Multi Crypto" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Gamma Bank MVP" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Test Gamma Bank MVP" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Alternative Product Development on WORBLI. Insurance, DEX's and more in the pipeline are to be developed." status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Hire world class executive team to develop and launch Gamma Bank" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Launch Gamma Bank in global markets (Africa, Latin America, Australia and Europe)" status="inprogress"></worbli-roadmap>
          <h2>Network</h2>
          <worbli-roadmap title="Help launch EOS main net in preparation for starting WORBLI's Network" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Confirm Block Producers & Block Producer Back Ups" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Conduct WORBLI Network AirGrab" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Launch WORBLI, the EOS Friendly (soft) Fork" status="complete"></worbli-roadmap>
          <worbli-roadmap title="List WORBLI's (WBI) Token on multiple digital asset exchanges" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Begin development and support of additional applications to be developed and deployed on WORBLI" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Develop long-term strategic, financial and marketing plans" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Commence Network Launch and AirGrab marketing and content campaigns" status="testing"></worbli-roadmap>
          <worbli-roadmap title="Develop correspondent banking relationships in the US" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Ramp up global marketing efforts" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Pursue additional strategic partnerships with digital currency exchanges " status="testing"></worbli-roadmap>
          <worbli-roadmap title="Add additional Block Producers to Worbli Network" status="inprogress"></worbli-roadmap>          
          <h2>Governance</h2>
          <worbli-roadmap title="Publish WORBLI Network governance processes and engage WORBLI community in ongoing governance efforts" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Complete White Paper & Business Plan" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Commence lobbying efforts and developing relationships with US governance bodies (SEC, IRS, Federal Reserve, OCC)" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Incorporate WORBLI Foundation in a favourable regulatory environment (Switzerland, Bermuda, Malta, Panama, Singapore)" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Recruit and hire additional technical, business and administrative team members" status="complete"></worbli-roadmap>
          <worbli-roadmap title="Develop correspondent banking relationships in the US" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Secure global correspondent banking relationships" status="testing"></worbli-roadmap>
          <worbli-roadmap title="Seek additional funding through private investment sources" status="inprogress"></worbli-roadmap>
          <worbli-roadmap title="Finalize strategic, marketing and operational plans" status="testing"></worbli-roadmap>
          <worbli-roadmap title="Continue recruiting and hiring for WORBLI team" status="inprogress"></worbli-roadmap>
        </div>
        <div class="side">
          <worbli-whitepaper></worbli-whitepaper>
          <worbli-partners></worbli-partners>
          <worbli-telegram></worbli-telegram>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('roadmap-route', RoadmapRoute);
