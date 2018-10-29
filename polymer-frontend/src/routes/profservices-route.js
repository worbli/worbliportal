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
          margin-top: 24px;
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
          <b>WORBLI Professional Services brings blockchain expertise and innovation into the heart of every industry.</b></br></br>
          <h2>Fintech</h2>
          <p>Fintech, (or financial technology), is revolutionizing how businesses move money. Whether it is consumer transactions, investments or paying for business expenses, more and more organizations are doing all of these things from their smartphones and computers. Utilizing the Blockchain, Worbli is helping developers work from a compliant, secure platform to create applications that improve and automate the use of financial services. ​​​</p>
          <p>Worbli’s, focus on Fintech development will help organizations, and consumers improve their financial practices and also their lives by creating a space for developers to launch dApps that create secure, streamlined financial gateways for all types of businesses. </p>

          <h2>Delivery Platforms</h2>
          <p>Web, Mobile, Desktop & Games Platforms. Whatever platform you want to utilize if you are looking to challenge the status quo and upend the industry with something that is fast, clever and provides better service, than Worbli can provide you with the foundation to make that happen.</p>

          <h2>Consultation & Flexible Integration</h2>
          <p>Do you have a challenge with your idea and need help bringing it to life on the blockchain? We love a challenge. If you want us to help with your product build or launch because there are parts you are unfamiliar with, our tech and marketing wizards will help you turn your idea into a reality. </p>
          <p>We provide guidance as well as the hands-on support to assist your team with both the marketing and technology side of your build.  Whether it’s tech architecture consultation, project management or Marketing best-practices, we have the people you might need. The team at Worbli is a task-force of extremely talented individuals with wide-ranging skills that can help you overcome your challenges and bring your application to life.</p>

          <h2>Product Lifecycle</h2>
          <p>Ideation & Specification: If you haven’t figured out all the specifics for your application or product, Worbli will help you unpack that process. We look at what you have and where you want to go and then together, we look at the steps we need to take to make it a reality.</p>
          <p>Wireframe UX/UI, Graphic Design: Once the plan is approved, we start to build. Is the end goal a charity application, a new game, an investment tool? Whatever it is, we develop and design the idea to meet your goals.</p>
          <p>Implementation, Audit, Launch, Review: When your application is ready, we test on-chain to make sure it can do what you want it to do.</p>
          <p>Marketing: This can happen along the entire process of a build. Having the right words and images is a vital part of making sure your application reaches the right people. If needed we can help you get your idea in front of as many people as possible.</p>

          <h2>Smart Contracts</h2>
          <p>Our seasoned CPP Developers facilitate contracts that bridge the chain and dApp. We can create customized secure and stable smart contracts designed for your needs that will enable you to launch your application using the very latest in software and hardware solutions.</p>

          <h2>Security Audits</h2>
          <p>The cybersecurity landscape is constantly changing. Our team of security professionals are passionate about staying informed and educated on every new threat and all the best practices on how to assess and overcome any potential threats to the security of the Worbli chain, and our client’s (partner’s) applications. </p>
          <p>We want you to feel secure in knowing what you are releasing can only be used as it’s intended.</p>
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
