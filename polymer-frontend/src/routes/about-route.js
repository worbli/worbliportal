/*jslint esversion: 6 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-whitepaper.js';
import '../components/side-bar/worbli-partners.js';
import '../components/side-bar/worbli-telegram.js';
class AboutRoute extends PolymerElement {
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
          font-weight: 200;
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
          <h1>About</h1>
          <b>WORBLI is a user friendly financial services ecosystem where users, developers and businesses can access a huge range of powerful and cost-effective applications in the world.</b></br></br>
          <p>WORBLI is a secure platform where users from every continent in the world can access their favourite and most used applications from anywhere, anytime.<p></br>
          <p>Our platform is powered by EOSIO, which allows us to deliver best in class speed, transparency, and free transactions for users in a fully compliant environment.</p></br>
          <p>Remember the days where you had to pay bank and third party fees? WORBLI is going to make this a thing of the past.</p>
          <iframe width="840" height="472" src="https://www.youtube.com/embed/3tcVg279HLg?start=788" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <h2>WORBLI’s Vision</h2>
          <p>We believe blockchain technology will considerably improve financial services, cloud computing, data analysis, security and storage, supply chain logistics, social networks, voting, healthcare, income inequality, accounting, contractual arrangements and so much more, and WORBLI will be at the forefront of this technological revolution.</p></br>
          <p>Imagine many of the current obstacles between blockchain technology and real-world application removed. Developers will be able to design and build applications for users knowing the associated financial/ transactional services are preconfigured and free, and merchant processing is available for businesses to instantly convert digital and fiat currencies into any payment form they desire (GBP, USD or BTC, EOS, WBI).</p></br>
          <p>… think about that for a second. The customer (i.e. you) can pay for a product or service with whatever currency they want, and the business (i.e. Adidas) can choose to receive that payment in any currency they want!</p></br>
          <p>Developers can launch new applications knowing anyone on the WORBLI Network can access and use their product and/or service. WORBLI provides the network that makes all this possible, leaving developers free to innovate and produce the most powerful and cost-effective applications in the world.</p></br></br>
           <h2>Key Features</h2>
          <div class="features">
            <div class="left">
              <b>Decentralization</b> 
              <p>There is no central authority for transaction approval. The transactions are peer-to-peer with the Blockchain verifying transactions.</p>
              <b>Finance focused blockchain</b> 
              <p>The network governance is designed to meet the regulatory needs of global financial services and financial technology businesses.</p>
              <b>Strong community</b> 
              <p>Support With solid connections to the EOS network, we have mutual support from many EOS entities and communities such as block producers and advisors.</p>
              <b>Tamper-proof transactions</b> 
              <p>No one can alter the transaction ledger. The ledger is immutable.</p>
              <b>Account recovery</b> 
              <p>Provided for all customers. Customer accounts are recoverable when private keys are lost.</p>
              <b>Optimized for the enterprise</b> 
              <p>Businesses and corporations will benefit from predictable pricing models when planning to operate on the network.</p>
            </div>
            <div class="right">
              <b>Security</b> 
              <p>Individual accounts and customers wallets cannot be hacked or altered.</p>
              <b>Startup friendly</b> 
              <p>Startups will benefit from exchange listing and merchant processing services to quickly launch and fund their projects. </p>
              <b>Compliance</b> 
              <p>Enterprise business will benefit from full AML/KYC user account verification.</p>
              <b>Speed of transactions</b> 
              <p>Peer-to-peer token transfers and traditional financial transactions transfer in seconds.</p>
              <b>Superior infrastructure</b> 
              <p>Leveraging our independent EOS blockchain with features such as built-in developer tools and feeless transactions.</p>
            </div>
          </div>
          <iframe width="840" height="472" src="https://www.youtube.com/embed/ideiyhAlvOQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
} window.customElements.define('about-route', AboutRoute);
