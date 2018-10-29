import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/side-bar/worbli-whitepaper.js';
import '../components/side-bar/worbli-support.js';


class DeveloperTermsRoute extends PolymerElement {
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
          <h1>Schedule - Developer Terms</h1>
			<ol>
				<li><strong>DEFINITIONS</strong>
				<ol>
					<li>The following capitalized terms used in the Developer Terms will have the following meanings:
					<ol>
						<li>“Authorized Developers” means Your employees and contractors, members of Your organization who (a) each have an active and valid Account with WORBLI, (b) have a demonstrable need to use the Network in order to develop and test Your dApp, and (c) to the extent such individuals will have access to Confidential Information, each have written and binding agreements with You to protect the unauthorized use and disclosure of such Confidential Information.</li>
						<li>"Documentation” means any technical or other specifications or documentation that WORBLI may provide to You for use in connection with the development of dApps on the Network.</li>
						<li>“WORBLI Development Support” means the WORBLI development support that WORBLI may provide or make available through the Network, Foundation or WORBLI Platform for use with the development and maintenance of your dApp, including any Updates thereto (if any) that may be provided to You by WORBLI.</li>
					</ol></li>
				</ol></li>
				<li><strong>LICENCE; ACCOUNT OPENING</strong>
				<ol>
					<li>Subject to the terms and conditions of the Network Terms and in addition to the licence granted to you pursuant to clause 4 of the Network Terms, WORBLI hereby grants You during the Term, a limited, non-exclusive, personal, revocable, non-sublicensable and non-transferable license to:
					<ol>
						<li>access and use to the Network and WORBLI Development Support to be used by You or Your Authorized Developers for the purpose of developing or testing Your dApp designed to operate on the Network;</li>
						<li>the Documentation for Your internal use only and for the sole purpose of developing or testing the dApp, except as otherwise expressly permitted in the Network Terms.</li>
					</ol></li>
					<li>You agree not to create or attempt to create a substitute or similar service through use of or access to the WORBLI Development Support provided by or through the WORBLI Portal.</li>
					<li>Except as otherwise expressly permitted herein, You agree not to share, sell, resell, rent, lease, lend, or otherwise provide access to any WORBLI Development Support provided therewith, in whole or in part, to anyone who is not an Authorized Developer on Your team, and acknowledge that WORBLI may require each team member must have their own WORBLI ID to access Your account.</li>
				</ol></li>
				<li><strong>OWNERSHIP</strong>
				<ol>
					<li>WORBLI retains all rights, title, and interest in the WORBLI Development Support, and any Updates it may make available to You under the Network Terms. You agree to cooperate with WORBLI to maintain WORBLI's ownership of the WORBLI Development Support, and, to the extent that You become aware of any claims relating to the WORBLI Development Support, You agree to use reasonable efforts to promptly provide notice of any such claims to WORBLI.</li>
					<li>The parties acknowledge that the Network Terms does not give WORBLI any ownership interest in Your dApp.</li>
				</ol></li>
				<li><strong>NO OTHER PERMITTED USES</strong>
				<ol>
					<li>Except as otherwise set forth in the Network Terms, You agree not to rent, lease, lend, upload to or host on any website or server, sell, redistribute, or sublicense the WORBLI Development Support, in whole or in part, or to enable others to do so. You may not use the WORBLI Development Support provided hereunder for any purpose not expressly permitted by the Network Terms.</li>
					<li>You agree not to exploit any WORBLI Development Support provided hereunder in any unauthorized way whatsoever. Any attempt to do so is a violation of the rights of WORBLI and its licensors of the WORBLI Development Support. If You breach any of the foregoing restrictions, You may be subject to prosecution and damages.</li>
					<li>You may not use the WORBLI Development Support in any manner that is inconsistent with the terms of the Network Terms or that infringes any intellectual property rights of a third party or WORBLI, or that violates any applicable laws or regulations. You agree that the WORBLI Development Support contain proprietary content, information and material owned by WORBLI and its licensors, and protected by applicable intellectual property and other laws. You may not use such proprietary content, information or materials in any way whatsoever, except for the permitted uses of the WORBLI Development Support under the Network Terms, or as otherwise agreed by WORBLI in writing.</li>
					<li>You understand there may be storage capacity, transmission, and/or transactional limits for the Network and WORBLI Development Support both for You as a developer and for Your end-users. If You reach or Your enduser reaches such limits, then You or Your end-user may be unable to use the Network or WORBLI Development Support or may be unable to access or retrieve data from such WORBLI Development Support through Your dApp or through the applicable end-user accounts.</li>
					<li>You agree not to fraudulently create any end-user accounts or induce any end-user to violate the terms of their applicable end-user terms or service agreement with WORBLI or to violate any WORBLI usage policies for such end-user WORBLI Development Support.</li>
					<li>WORBLI reserves the right to change, suspend, deprecate, limit, or disable access to the WORBLI Development Support, or any part thereof, at any time without notice. In no event will WORBLI be liable for the removal of or disabling of access to any of the foregoing. WORBLI may also impose limits and restrictions on the use of or access to the WORBLI Development Support, may remove the WORBLI Development Support for indefinite time periods, may revoke Your access to the WORBLI Development Support, or may cancel the WORBLI Development Support (or any part thereof) at any time without notice or liability to You and in its sole discretion.</li>
					<li>WORBLI does not guarantee the availability, accuracy, completeness, reliability, or timeliness of any data or information displayed by any WORBLI Development Support. To the extent You choose to use the WORBLI Development Support with Your dApp, You are responsible for Your reliance on any such data or information. You are responsible for Your use of the Network and WORBLI Development Support, and if You use such WORBLI Development Support, then it is Your responsibility to maintain appropriate alternate backup of all Your content, information and data, including but not limited to any content that You may provide to WORBLI for hosting as part of Your use of the WORBLI Development Support.</li>
				</ol></li>
				<li><strong>THIRD-PARTY SERVICE PROVIDERS</strong>
				<ol>
					<li>Unless otherwise prohibited by WORBLI in the Documentation, You are permitted to employ or retain a third party (“ Service Provider”) to assist You in using the Network and WORBLI Development Support provided pursuant to the Network Terms, including, but not limited to, engaging any such Service Provider to maintain and administer Your dApp/s’ servers on Your behalf, provided that any such Service Provider’s use of the Network and WORBLI Development Support or any materials associated therewith is done solely on Your behalf and only in accordance with these terms. In the event of any actions or inactions by the Service Provider that would constitute a violation of the Network Terms or otherwise cause any harm, WORBLI reserves the right to require You to cease using such Service Provider.</li>
				</ol></li>
				<li><strong>WARRANTIES AND REPRESENTATIONS</strong>
				<ol>
					<li>You warrant and represent to WORBLI that:
					<ol>
						<li>All information provided by You to WORBLI or Your end-users in connection with the Network Terms or Your dApp  will be current, true, accurate, supportable and complete and, with regard to  information You provide to WORBLI, You will promptly notify WORBLI of any changes to such information.</li>
						<li>You will comply with the terms of and fulfill Your obligations under the Network Terms, including obtaining any required consents for Your Authorized Developers’ use of the Network and WORBLI Development Support, and You agree to monitor and be fully responsible for all such use by Your Authorized Developers and their compliance with the terms of the Network Terms;</li>
						<li>You will be solely responsible for all costs, expenses, losses and liabilities incurred, and activities undertaken by You and Your Authorized Developers in connection with the Network and WORBLI Development Support, Your dApp and Your related development and distribution efforts, including, but not limited to, any related development efforts, network and server equipment or any other hardware, software or WORBLI Development Support used by You in connection with Your use of any WORBLI Development Support; and</li>
					</ol></li>
				</ol></li>
				<li><strong>USE OF THE NETWORK AND DEVELOPMENT SUPPORT</strong>
				<ol>
					<li>As a condition precedent to using the Network and any WORBLI Development Support, You agree that:
					<ol>
						<li>You will use the WORBLI Development Support only for the purposes and in the manner expressly permitted by the Network Terms and in accordance with all applicable laws and regulations;</li>
						<li>You will not use the WORBLI Development Support for any unlawful or illegal activity which would commit or facilitate the commission of a crime, or other tortious, unlawful or illegal act;</li>
						<li>To the best of Your knowledge and belief Your dApp does not and will not violate, misappropriate, or infringe any WORBLI or third party copyrights, trademarks, rights of privacy and publicity, trade secrets, patents, or other proprietary or legal rights (e.g., musical composition or performance rights, video rights, photography or image rights, logo rights, third party data rights);</li>
						<li>You will not, through use of the Network, create any dApp or other code or program that would disable, hack or otherwise interfere with the Network, or any security, digital signing, digital rights management, verification or authentication mechanisms implemented in or by the Network (except to the extent expressly permitted by WORBLI in writing);</li>
						<li>You will not, directly or indirectly, commit any act intended to interfere with the WORBLI Development Support;</li>
						<li>If Your dApp/s makes recordings, a reasonably conspicuous audio, visual or other indicator must be displayed to the user as part of the dApp/s to indicate that a recording is taking place. In addition, any form of data, content or information collection, processing, maintenance, uploading, syncing, storage, transmission, sharing, disclosure or use performed by, through or in connection with Your dApp/s must comply with all applicable privacy laws and regulations including but not limited to any notice or consent requirements.</li>
						<li>You and Your dApp/s may not collect user or device data without prior user consent, whether such data is obtained directly from the user or through the use of the Network, and then only to provide a service or function that is directly relevant to the use of the dApp/s.</li>
						<li>You must provide clear and complete information to users regarding Your collection, use and disclosure of user or device data including having a comprehensive data management in place that is available to customers either through the dApp or upon their request.</li>
						<li>dApp/s must comply with all applicable criminal, civil and statutory laws and regulations, including those in any jurisdictions in which Your dApp/s may be offered or made available. In addition:
						<ol>
							<li>You and the dApp/s must comply with all applicable privacy and data collection laws and regulations with respect to any collection, use or disclosure of user or device data;</li>
							<li>dApps may not be designed or marketed for the purpose of harassing, abusing, spamming, stalking, threatening or otherwise violating the legal rights (such as the rights of privacy and publicity) of others;</li>
							<li>Neither You nor Your dApp/s may perform any functions or link to any content, WORBLI Development Support, information or data or use any robot, spider, site search or other retrieval application or device to scrape, mine, retrieve, cache, analyze or index software, data or WORBLI Development Support provided by WORBLI or its licensors, or obtain (or try to obtain) any such data, except the data that WORBLI expressly provides or makes available to You in connection with such WORBLI Development Support. You agree that You will not collect, disseminate or use any such data for any unauthorized purpose; and</li>
						</ol></li>
						<li>If Your dApp/s includes or will include any other content, You must either own all such content or have permission from the content owner to use it in Your dApp/s.</li>
						<li>dApp/s may be rejected if they contain content or materials of any kind (text, graphics, images, photographs, sounds, etc.) that in WORBLI’s reasonable judgment may be found objectionable or inappropriate, for example, materials that may be considered obscene, pornographic, or defamatory.</li>
						<li>dApp/s must not contain any malware, malicious or harmful code, program, or other internal component which could damage, destroy, or adversely affect the Network, WORBLI Development Support.</li>
					</ol></li>
				</ol></li>
				<li><strong>REGULATORY COMPLIANCE</strong>
				<ol>
					<li>You will fulfill any applicable regulatory requirements, including full compliance with all applicable laws, regulations, and policies related to the manufacturing, marketing, sale and distribution of Your dApp/s in any countries in which it is made available in, and in particular the requirements of applicable regulatory bodies in any countries or territories where You use or make Your dApp/s available.</li>
					<li>You agree that You will not seek any regulatory marketing permissions or make any determinations that may result in WORBLI being deemed regulated or that may impose any obligations or limitations on WORBLI.</li>
					<li>You also represent and warrant that You will market Your dApp/s only for its cleared or approved intended use/indication for use, and only in strict compliance with applicable regulatory requirements. Upon WORBLI’s request, You agree to promptly provide any such clearance documentation to support the marketing of Your dApp/s.</li>
					<li>You agree to promptly notify WORBLI in accordance of any complaints or threats of complaints regarding Your dApp/s in relation to any such regulatory requirements, in which case WORBLI may remove Your dApp/s from distribution.</li>
					<li>You acknowledge and agree that WORBLI is not a party to any payment transactions facilitated through the use of the Network and is not responsible for any such transactions, including but not limited to the unavailability of any end-user payment cards or payment fraud. Such payment transactions are between You and Your bank, acquirer, card networks, or other parties You utilize for transaction processing, and You are responsible for complying with any agreements You have with such third parties. In some cases, such agreements may contain terms specifying specific rights, obligations or limitations that You accept and assume in connection with Your decision to utilize the functionality of the Network.</li>
				</ol></li>
				<li><strong>COPYRIGHT</strong>
				<ol>
					<li>The WORBLI Development Support and the Documentation is the copyrighted work of WORBLI. Unauthorized copying, distribution, modification, public display, or public performance of copyrighted works is an infringement of the copyright holders rights. You agree that You will not use the WORBLI Development Support to infringe the Intellectual Property Rights of WORBLI or others in any way. You must not remove, overprint or deface any notice of copyright, trademark, logo, legend, or other notice of ownership from any originals or copies of the Documentation or the WORBLI Development Support.</li>
					<li>As used herein, ‘Intellectual Property Rights’ means patents of any type, design rights, utility models or other similar invention rights, copyrights, trademarks, service marks, trade secret or confidentiality rights, and any other intangible property rights including applications for any of the foregoing, in any country, arising under statutory or common law or by contract and whether or not perfected, now existing or hereafter filed, issued, or acquired.</li>
				</ol></li>
				<li><strong>CONFIDENTIALITY</strong>
				<ol>
					<li>You agree not to reproduce any Confidential Information to which you are provided access through the WORBLI Development Support in any form except as authorized at the time of disclosure. Any reproduction of Confidential Information shall remain the property of WORBLI and shall contain any and all confidential or proprietary notices or legends which appear on the original. You agree to (a) take all reasonable steps (defined below) to keep all Confidential Information strictly confidential; (b) to use Confidential Information solely as authorized at the time of disclosure and (d) not to disclose any Confidential Information to any party without the prior written consent of WORBLI. You do not acquire any rights in Confidential Information except the limited rights as described herein. In no event shall You use Confidential Information to create, enhance, modify, rent, lease, loan, sell, distribute or create derivative works based on the WORBLI Development Support, or compete with the WORBLI Development Support in whole or in part. As used herein, ‘Confidential Information’ shall mean all WORBLI technical product Documentation, trade secrets and other information or Services which WORBLI or third parties protect against unrestricted disclosure to others which is either labelled Confidential, pursuant to software downloads, or reasonably identifiable as confidential based on the type of information and the manner of its disclosure, and ‘reasonable steps’ means those steps You and/or Your Company take to protect Your own similar confidential information, which shall not be less than a reasonable standard of care.</li>
				</ol></li>
											<li><strong>INDEMNIFICATION</strong>
				<ol>
					<li>You agree to indemnify and hold WORBLI, its affiliates, subsidiaries, officers, agents, partners, employees, and licensors harmless from any claim or demand, including reasonable attorneys fees, made by any third party due to or arising out of Your usage of the WORBLI Development Support and/or Your dApp/s.</li>
				</ol></li>
				<li><strong>TERMINATION</strong>
				<ol>
					<li>The Network Terms and all rights and licenses granted by WORBLI hereunder will terminate, effective immediately upon notice from WORBLI if You are found to have misrepresented the nature of Your submitted dApp/s.</li>
				</ol></li>
				<li><strong>EFFECT OF TERMINATION</strong>
				<ol>
					<li>Upon the termination of the Network Terms for any reason, You agree to immediately cease all use of the WORBLI Development Support and erase and destroy all copies, full or partial, of any information pertaining to the WORBLI Development Support and all copies of Confidential Information in Your and Your Authorized Developers' possession or control. At WORBLI’s request, You agree to provide written certification of such destruction to WORBLI.</li>
				</ol></li>
				<li><strong>EXCLUSION OF SOFTWARE WARRANTIES</strong>
				<ol>
					<li>The WORBLI Development Support is being provided to You AS IS. To the fullest extent allowable by law, WORBLI does not guarantee or warrant any features or qualities of the WORBLI Development Support or give any undertaking with regard to any other quality. Statements and explanations to the WORBLI Development Support and/or Documentation are made for explanatory purposes only; they are not meant to constitute any guarantee or warranty of certain features.</li>
				</ol></li>
				<li><strong>INDEPENDENT DEVELOPMENT</strong>
				<ol>
					<li>Nothing in the Developer Terms will impair WORBLI's right to develop, acquire, license, market, promote, or distribute products or technologies that perform the same or similar functions as, or otherwise compete with, Your dApp/s or any other products or technologies that You may develop, produce, market, or distribute.</li>
					<li>The parties acknowledge and agree that WORBLI shall not acquire any ownership interest in or to any of the dApp/s or dApp/s Information, and title, risk of loss, responsibility for, and control over the dApp/s shall, at all times, remain with You. WORBLI may not use any of the dApp/s or dApp/s Information for any purpose, or in any manner, except as specifically authorized in the Network Terms or this Schedule 1.</li>
					<li>You acknowledge and agree that Your own end user licence agreement ("EULA") for any dApp/s will comply with all applicable laws in all countries where You wish WORBLI to allow end-users to download that dApp/s.</li>
					<li>You hereby acknowledge that the EULA for each of the dApp/s is solely between You and the end-user and conforms to applicable law, and WORBLI shall not be responsible for, and shall not have any liability whatsoever under, any EULA or any breach by You or any end-user of any of the terms and conditions of any EULA.</li>
					<li>A dApp/s may read or play content (magazines, newspapers, books, audio, music, video) that is offered outside of the dApp/s (such as, by way of example, through Your website) provided that You do not link to or market external offers for such content within the dApp/s. You are responsible for authentication access to content acquired outside of the dApp/s.</li>
				</ol></li>
				<li><strong>WARRANTIES IN RESPECT OF DAPPS</strong>
				<ol>
					<li>You represent and warrant that:
					<ol>
						<li>none of the dApp/s violate or infringe any patent, copyright, trademark, trade secret or other intellectual property or contractual rights of any other person, firm, corporation or other entity and that You are not making the dApp/s available on behalf of one or more third parties;</li>
						<li>each of the dApp/s is authorized for distribution, sale and use in, export to, and import into each of the countries You will make it available in, in accordance with the laws and regulations of those countries and all applicable export/import regulations;</li>
						<li>none of the dApp/s contains any obscene, offensive or other materials that are prohibited or restricted under the laws or regulations of any of the countries You will make the dApp/s available in;</li>
						<li>all information You provide in relation to the dApp/s, is accurate and that, if any such information ceases to be accurate, You will promptly update it to be accurate.</li>
						<li>In the event that any country You make the dApp/s available in requires the approval of, or rating of, any dApp/s by any government or industry regulatory agency as a condition for the distribution and/or use of that dApp/s, You acknowledge and agree that WORBLI may elect not to make that dApp/s available on the Network to end-users in that country until such times as it is satisfied that the approval/rating is validly in place.</li>
						<li>WORBLI shall have no responsibility for the installation and/or use of any of the dApp/s by any end-user. You shall be solely responsible for any and all product warranties, end-user assistance and product support with respect to each of the dApp/s.</li>
						<li>You shall be solely responsible for, and WORBLI shall have no responsibility or liability whatsoever with respect to, any and all claims, suits, liabilities, losses, damages, costs and expenses arising from, or attributable to, the dApp/s and/or the use of those dApp/s by any end-user, including, but not limited to: (i) claims of breach of warranty, whether specified in the EULA or established under applicable law; (ii) product liability claims; and (iii) claims that any of the dApp/s and/or the end-user’s possession or use of those dApp/s infringes the copyright or other intellectual property rights of any third party.</li>
					</ol></li>
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
} window.customElements.define('developer-terms-route', DeveloperTermsRoute);
