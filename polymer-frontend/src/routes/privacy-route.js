import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/side-bar/worbli-whitepaper.js';
import '../components/side-bar/worbli-support.js';


class PrivacyRoute extends PolymerElement {
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
          height: 4000px;
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
        .c9 {
          display:none;
        }
        ol {
				  list-style-type: none;
				  counter-reset: item;
				  margin: 0;
				  padding: 0;
				}
				
				ol > li {
				  display: table;
				  counter-increment: item;
				  margin-bottom: 0.6em;
				}
				
				ol > li:before {
				  content: counters(item, ".") ". ";
				  display: table-cell;
				  padding-right: 0.6em;    
				}
				
				li ol > li {
				  margin: 0;
				}
				
				li ol > li:before {
				  content: counters(item, ".") " ";
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
          <h1>Privacy Policy</h1>
						<ol>
							<li><strong>Introduction</strong>
							<ol>
								<li>This privacy notice ("Privacy Notice") applies to all personal information process activities undertaken by World Blockchain Initiative, LLC or any other entity that directly or indirectly controls, is controlled by, or is under common control with World Blockchain Initiative, LLC (“WORBLI”, "we", "us").</li>
								<li>WORBLI is a data controller for personal information that we process in connection with the WORBLI network, WORBLI website at https://portal.worbli.io, issuance of WORBLI Tokens and/or any services we provide from time to time that necessitates the collection of personal information.</li>
								<li>This policy sets out how we collect, use and store your personal data as well as explaining your rights in respect of the personal data we hold about you.</li>
								<li>Please contact us at support@worbli.io should you require more information on our privacy policy.</li>
							</ol>
							</li>
							
							<li><strong>The information we process</strong>
							<ol>
								<li>We collect and process various categories of personal information at the start of, and for the duration of, your relationship with us. We will limit the collection and processing of information to information necessary to achieve one or more legitimate purposes as identified in this notice.</li>
								<li>We will only collect your information in line with relevant regulations and law.</li>
								<li>The information we collect may include:
								<ol>	
									<li>personal details, e.g. name, previous names, gender, date and place of birth;</li>
									<li>contact details, e.g. address, email address, landline and mobile numbers;</li>
									<li>information concerning your identity e.g. photo ID, passport information, social security number, National ID card and nationality;</li>
									<li>market research, e.g. information and opinions expressed when participating in market research;</li>
									<li>user login and subscription data;</li>
									<li>other information about you that you give us by filling in forms or by communicating with us, whether face-to-face, by phone, email, online, or otherwise;</li>
									<li>your financial and credit information and information about your relationship with us, including the products and services you hold, the channels you use and your ways of interacting with us;</li>
									<li>information we use to identify and authenticate you, e.g. your signature and your biometric information, such as your voice for voice ID, or additional information that we receive from external sources that we need for compliance purposes;</li>
									<li>geographic information, eg your location when signing up to any products or services that are only available in certain jurisdictions;</li>
									<li>marketing and sales information, e.g. details of the services you receive and your preferences;</li>
									<li>cookies and similar technologies we use to recognise you, remember your preferences and tailor the content we provide to you (see paragraph ‎3 for more information on cookies);</li>
									<li>investigations data, e.g. due diligence checks, sanctions and anti-money laundering checks, external intelligence reports, content and metadata related to relevant exchanges of information between and among individuals and/or organisations, including emails, voicemail, live chat, etc.;</li>
									<li>records of correspondence and other communications between us, including email, live chat, instant messages and social media communications;</li>
									<li>information that we need to support our regulatory obligations, e.g. information about transaction details, detection of any suspicious and unusual activity and information about parties connected to you or these activities;</li>
									<li>information you’ve asked us to collect for you, e.g. information about your accounts or holdings with other companies including transaction information;</li>
									<li>information from third party providers, e.g. information that helps us to combat fraud or that relates to your social interactions (including your communications via social media, between individuals, organisations, prospects and other stakeholders acquired from companies that collect combined information);</li>
								</ol></li>
							</ol></li>
						
							<li><strong>Cookies</strong>
							<ol>
								<li>Cookies are text files containing small amounts of information which are downloaded to your device when you visit a website. Cookies are useful because they allow a website to recognise your device, preferences and can be used to improve your online experience.</li>
								<li>All recent versions of popular browsers give you a level of control over cookies. You can set your browser to accept or reject all, or certain, cookies.</li>
								<li>Please be aware that some areas of our website may not function after you have changed your cookie settings.</li>
							</ol></li>
						
							<li><strong>How we collect your information</strong>
							<ol>
								<li>We may collect your personal information from a variety of sources including:
								<ol>
									<li>information you give to us;</li>
									<li>information that we receive from third parties including third parties who provide services to you or us, fraud prevention or government agencies;</li>
									<li>information that we learn about you through our relationship with you and the way you operate your accounts and/or services, such as the payments made to and from your accounts;</li>
									<li>information that we gather from the technology which you use to access our services (for example location data from your mobile phone, or an IP address or telephone number) and how you use it (for example pattern recognition); and</li>
									<li>information that we gather from publicly available sources, such as the press, the electoral register, company registers and online search engines.</li>
								</ol></li>
							</ol></li>
						
							<li><strong>How we will use your information</strong>
							<ol>
								<li>We will only use your information with your consent to do so or else if we have a lawful reason for using it.  These lawful reasons include where we:
								<ol>
									<li>need to pursue our legitimate interests;</li>
									<li>need to process the information to carry out an agreement we have with you;</li>
									<li>need to process the information to comply with a legal obligation;</li>
									<li>believe the use of your information as described is in the public interest, e.g. for the purpose of preventing or detecting crime;</li>
									<li>need to establish, exercise or defend our legal rights;</li>
									<li>need to use your information for our insurance purposes.</li>
								</ol></li>
								<li>The reasons we use your information include to:
								<ol>
									<li>deliver our products and services;</li>
									<li>carry out your instructions;</li>
									<li>carry out checks in relation to anti-money laundering;</li>
									<li>manage our relationship with you, including (unless you tell us otherwise) telling you about products and services we think may be relevant for you;</li>
									<li>understand how you use our services;</li>
									<li>support our network operations;</li>
									<li>prevent or detect crime including fraud and financial crime, e.g. financing for terrorism and human trafficking;</li>
									<li>ensure security and business continuity;</li>
									<li>manage risk;</li>
									<li>provide DApps and other online product platforms;</li>
									<li>improve our products and services;</li>
									<li>analyse data to better understand your circumstances and preferences so we can make sure we can improve our service offering;</li>
									<li>protect our legal rights and comply with our legal obligations;</li>
								</ol></li>
							</ol></li>
						
							<li><strong>Your rights</strong>
							<ol>
								<li>You have a number of rights in relation to the information that we hold about you. These rights include:
								<ol>
									<li>the right to access information we hold about you and to obtain information about how we process it;</li>
									<li>in some circumstances, the right to withdraw your consent to our processing of your information, which you can do at any time. We may continue to process your information if we have another legitimate reason for doing so;</li>
									<li>in some circumstances, the right to receive certain information you have provided to us in an electronic format and/or request that we transmit it to a third party;</li>
									<li>the right to request that we rectify your information if it’s inaccurate or incomplete;</li>
									<li>in some circumstances, the right to request that we erase your information. We may continue to retain your information if we’re entitled or required to retain it;</li>
									<li>the right to object to, and to request that we restrict, our processing of your information in some circumstances. Again, there may be situations where you object to, or ask us to restrict, our processing of your information but we’re entitled to continue processing your information and/or to refuse that request.</li>
								</ol></li>
								<li>You can exercise your rights by contacting us. You also have a right to complain to the data protection regulator in the country where you live or work.
							</ol></li>
						
							<li><strong>Who we may share your information with</strong>
							<ol>
								<li>We will not share your information with anyone outside WORBLI except:
								<ol>
									<li>where we have your permission;</li>
									<li>where required for your product or service;</li>
									<li>where we are required by law and by law enforcement agencies, judicial bodies, government entities, tax authorities or regulatory bodies around the world;</li>
									<li>with third parties where required by law to help recover funds that have entered your account as a result of a misdirected payment by such a third party;</li>
									<li>with sub-contractors such as who we have engaged from time to time to undertake our KYC/AML verification process;</li>
									<li>with developers of distributed applications on the WORBLI Network subject to our obtaining your prior approval before doing so;</li>
									<li>where you have agreed for us to do so, or where we suspect funds have entered your account as a result of a financial crime;</li>
									<li>where permitted by law, it is necessary for our legitimate interests and it is not inconsistent with the purposes listed above.</li>
								</ol></li>
							</ol></li>
						
							<li><strong>How long do we keep your information for?</strong>
							<ol>
								<li>We will retain your personal data in accordance with applicable law and our own data storage time limits.  Whilst we will never retain your information for longer than necessary, we will take the following factors into account:
								<ol>
									<li>how long we need to keep the data for in the event of any claims or litigation;</li>
									<li>guidance from government or regulatory bodies;</li>
									<li>how long we need to keep the data to fulfil the original purpose for which it was collected;</li>
									<li>the nature and sensitivity of personal data; and</li>
									<li>compliance with legal obligations</li>
								</ol></li>
							</ol></li>
						
							<li><strong>How do we protect your data?</strong>
							<ol>
								<li>The protection and security of your personal data is a high priority for us. We have a dedicated team who enforce and assure good industry security practices. This enables us to secure and protect personal data from loss or unauthorised disclosure or damage in a consistent and appropriate manner.</li>
							</ol></li>
						
							<li><strong>How to change your marketing preferences</strong>
							<ol>
								<li>You will receive an email from us when your contact details are added to our contacts database. If you no longer want to receive any marketing from us, please send an email to support@worbli.io and we will action your request. Please note it can take up to [72] hours for your request to take effect.</li>
							</ol></li>
						
							<li><strong>How to make a complaint</strong>
							<ol>
								<li>You should direct any complaint relating to how we have processed your personal data to support@worbli.io.</li>
								<li>We hope that we can resolve any query or concern you raise about our use of your personal data.</li>
								<li>Under applicable law, you also have the right to lodge a complaint with a supervisory authority, in particular in the European Union (or European Economic Area) state where you work, normally live or where any alleged infringement of data protection laws has occurred.</li>
							</ol></li>
						
							<li><strong>Links to other websites</strong>
							<ol>
								<li>We sometimes provide you with links to other websites, but these websites are not under our control. We will not be liable to you for any issues arising in connection with their use of your information, the website content or the services offered to you by these websites.</li>
								<li>We recommend that you check the privacy policy and terms and conditions on each website to see how each third party will process your information.</li>
							</ol></li>
						
							<li><strong>Transfer of data between jurisdictions</strong>
							<ol>
								<li>As an international business, personal data may be transferred to our subsidiaries and affiliates worldwide due to, for example, our shared IT systems and/or cross border working.</li>
								<li>When contracting with suppliers and/or transferring personal data to a different jurisdiction, we will take appropriate steps to ensure that your data is treated securely and the means of transfer provide adequate safeguards in accordance with applicable law.</li>
							</ol></li>
						
							<li><strong>Contact information</strong>
							<ol>
								<li>Please contact us at support@worbli.io should you require any assistance or further clarification on this privacy policy.</li>
							</ol></li>
						</ol>
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
} window.customElements.define('privacy-route', PrivacyRoute);
