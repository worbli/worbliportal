import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/side-bar/worbli-whitepaper.js';
import '../components/side-bar/worbli-support.js';


class NetworkTermsRoute extends PolymerElement {
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
          <h1>Network Terms</h1>
          	<ol>
				<li><strong>THE NETWORK AND THE FOUNDATION</strong>
				<ol>
					<li>The WORBLI foundation was established as a not-for-profit company limited by guarantee (the "Foundation") to act as a centralised forum of governance over the WORBLI distributed ledger network (the "Network").  The Foundation will not have any proprietary rights over the Network; its role is limited to ensuring the key purposes of the Network are maintained and complied with.</li>
					<li>The Network operates as a platform for you ("You" or "Your") and other users and other interested parties (each, a "User" and collectively, "Users") to interact with, use and develop distributed software applications ("dApps") and hold, transfer and make use of the Network tokens ("Tokens").</li>
					<li>If You are accessing and/or using the Network on behalf of Your employer or as a consultant or agent of a third party (collectively "Your Company"), You represent and warrant that You have the authority to act on behalf of and bind Your Company to these Network terms and conditions (the "Network Terms"), and every reference to You or Your in these Network Terms shall also include Your Company.</li>
				</ol></li>

				<li><strong>ACCEPTANCE OF TERMS</strong>
				<ol>
					<li>Your access and use of the Network or services provided on the Network (any "Services"), are subject to these Network Terms.</li>
					<li>Your use of the Network and the Services may also be subject to disclaimers, legal notices, click-through agreements, or other legal agreements (any, "Additional Legal Terms"), which may be posted on the Platform or the Network where applicable. These Network Terms and the applicable Additional Legal Terms (together "Controlling Terms") form a legally binding agreement between You and WORBLI regarding Your access and use of the Network.</li>
					<li>Whenever there is a conflict between the terms in this Network Terms and the Additional Legal Terms, the terms in the Additional Legal Terms shall prevail. By accessing or using the Network, You accept and agree to abide by the terms of these Network Terms. If You do not agree to the terms of these Network Terms, You must not attempt to access or use Network.</li>
				</ol></li>

				<li><strong>DEFINITIONS</strong>
				<ol>
					<li>The following capitalized terms used in the Network Terms will have the following meanings:
					<ol>
						<li>"Account" means a User account to access and use the Network subject to the terms of the Network Terms, the KYC/AML Requirements and any other terms and conditions applicable from time to time.</li>
						<li>"Account Holder" means a party who (i) has received Tokens for use on the Network, has set up an Account for the purpose of fulfilling all User requirements including agreeing to the terms of the Network Terms and (iii) completing the applicable KYC/AML Requirements from time to time.</li>
						<li>"Additional Legal Terms" has the meaning set out at clause ‎2.2.</li>
						<li>"Controlling Terms" has the meaning set out at clause ‎2.2.</li>
						<li>"dApp" has the meaning set out at clause ‎1.2.</li>
						<li>"Developer" has the meaning set out at clause ‎9.</li>
						<li>"Developer Terms" has the meaning set out at clause ‎9.</li>
						<li>"KYC/AML Requirements" means the 'Know Your Client and Anti-Money Laundering requirements that Account Holders must fulfill and comply with at Account sign up stage and on an ongoing basis in accordance with the KYC/AML Requirements.</li>
						<li>“Updates” means bug fixes, updates, upgrades, modifications, enhancements, supplements, and new releases or versions of the Network or WORBLI Development Support, or to any part of the Network or WORBLI Development Support.</li>
						<li>"User" and "Users" have the meaning set out at clause ‎1.2.</li>
						<li>"Foundation" has the meaning set out at clause ‎1.1.</li>
						<li>"Foundation Rules" means the by-laws of the Foundation which provide voting and other rights to Account Holders as updated or amended from time to time.</li>
						<li>“Network” has the meaning set out at clause ‎1.1.</li>
						<li>“Network Terms” means these terms and conditions.</li>
						<li>"Services" has the meaning set out at clause ‎2.1.</li>
						<li>"Tokens" has the meaning set out at clause ‎1.2.</li>
						<li>"WORBLI" means World Blockchain Initiative, LLC or any other entity that directly or indirectly controls, is controlled by, or is under common control with World Blockchain Initiative, LLC.</li>
						<li>"WORBLI Platform" means the WORBLI online platform which includes other websites added to the WORBLI Platform from time to time to provide a medium where You and other Users and other interested parties  may sign up to a WORBLI account, obtain information, post comments, provide reviews, and engage in conversation threads around WORBLI and the Network.</li>
						<li>“You” and “Your” has the meaning set out at clause ‎‎1.2.</li>
						<li>"Your Company" has the meaning set out at clause ‎1.3.</li>
					</ol></li>
				</ol></li>

				<li><strong>LICENCE; ACCOUNT OPENING</strong>
				<ol>
					<li>Subject to the terms and conditions of the Network Terms, WORBLI hereby grants You during the Term, a limited, non-exclusive, personal, revocable, non-sublicensable and non-transferable license to:
					<ol>
						<li>access and use the Network including but not limited to accessing and using any dApps available on the Network from time to time, holding, transferring and spending any Tokens and otherwise dealing with other Users;</li>
					</ol></li>
					<li>Except as otherwise expressly permitted herein, You agree not to share, sell, resell, rent, lease, lend, or otherwise provide access to Your Account to any party other than where You are accessing and/or using the Network on behalf of Your Company.</li>
				</ol></li>

				<li><strong>KYC/AML REQUIREMENTS</strong>
				<ol>
					<li>The Network is subject to a compliance framework to ensure the highest standards of KYC/AML are adhered to by WORBLI and Account Holders.</li>
					<li>You acknowledge and agree that Your access and use of the Network is at all times subject to Your compliance and fulfilment of the KYC/AML Requirements applicable from time to time.</li>
					<li>You agree that you will use your personal identification details to complete the KYC/AML verification on only one WORBLI account. Attempts to verify multiple accounts with the same identity may result in termination of this agreement and other penalties.</li>
				</ol></li>

				<li><strong>OWNERSHIP</strong>
				<ol>
					<li>WORBLI retains all rights, title, and interest in and to the Network and any Updates it may make available to You under the Network Terms. You agree to cooperate with WORBLI to maintain WORBLI's ownership of the Network, and, to the extent that You become aware of any claims relating to the Network, You agree to use reasonable efforts to promptly provide notice of any such claims to WORBLI.</li>
				</ol></li>

				<li><strong>FOUNDATION RULES</strong>
				<ol>
					<li>You acknowledge and agree that You have certain rights in respect of the governance of the Foundation and that these rights are based on and subject to the Foundation Rules.</li>
				</ol></li>

				<li><strong>DEVELOPER TERMS</strong>
				<ol>
					<li>In addition to the terms and conditions of these Network Terms, if You or any User wishes to access and use the Network for the purposes of developing a dApp (a "Developer") You are subject to and must comply with the additional terms set out in the Schedule (the "Developer Terms").</li>
				</ol></li>

				<li><strong>NO OTHER PERMITTED USES</strong>
				<ol>
					<li>Except as otherwise set forth in the Network Terms, You agree not to rent, lease, lend, upload to or host on any website or server, sell, redistribute, or sublicense the Network, in whole or in part, or to enable others to do so. You may not use the Network provided hereunder for any purpose not expressly permitted by the Network Terms or otherwise as authorized by WORBLI in writing.</li>
					<li>You agree not to exploit the Network provided hereunder in any unauthorized way whatsoever, including but not limited to, by trespass or burdening Network capacity, or by harvesting or misusing data provided by such Network. Any attempt to do so is a violation of the rights of WORBLI and its licensors of the Network. If You breach any of the foregoing restrictions, You may be subject to prosecution and damages.</li>
					<li>You understand there may be storage capacity, transmission, and/or transactional limits for the Network. If You reach such limits, then You may be unable to use the Network.</li>
					<li>WORBLI reserves the right to change, suspend, deprecate, limit, or disable access to the Network, or any part thereof, at any time without notice. In no event will WORBLI be liable for the removal of or disabling of access to any of the foregoing. WORBLI may also impose limits and restrictions on the use of or access to the Network, may revoke Your access to the Network at any time without notice or liability to You and in its sole discretion.</li>
				</ol></li>

				<li><strong>WARRANTIES AND REPRESENTATIONS</strong>
				<ol>
					<li>You warrant and represent to WORBLI that:
					<ol>
						<li>You are of the legal age of majority in the jurisdiction in which You reside or above the age of 16 and have the right and authority to enter into the Network Terms on Your own behalf. If You are below the age of 16 or the legal age of majority in the jurisdiction in which You reside, You may only use the Network under the supervision of a parent or legal guardian who agrees to be bound by these Terms.If You are entering into the Network Terms on behalf of Your Company, organization, educational institution, or agency, instrumentality, or department of the federal government, that You have the right and authority to legally bind such entity or organization to the terms and obligations of the Network Terms;</li>
						<li>All information provided by You to WORBLI in connection with the Network Terms will be current, true, accurate, supportable and complete and, with regard to  information You provide to WORBLI, You will promptly notify WORBLI of any changes to such information.</li>
						<li>You will not act in any manner which conflicts or interferes with any existing commitment or obligation You may have and no agreement previously entered into by You will interfere with Your performance of Your obligations under the Network Terms.</li>
					</ol></li>
				</ol></li>

				<li><strong>USE OF THE NETWORK</strong>
				<ol>
					<li>As a condition precedent to using the Network and any WORBLI Development Support, You agree that:
					<ol>
						<li>You will use the Network only for the purposes and in the manner expressly permitted by the Network Terms and in accordance with all applicable laws and regulations;</li>
						<li>You will not use the Network for any unlawful or illegal activity which would commit or facilitate the commission of a crime, or other tortious, unlawful or illegal act;</li>
						<li>You will not, directly or indirectly, commit any act intended to interfere with the Network, the intent of the Network Terms, or WORBLI’s business practices including, but not limited to, taking actions that may hinder the performance or intended use of the Network or the WORBLI Portal;</li>
					</ol></li>
				</ol></li>

				<li><strong>YOUR INFORMATION, PRIVACY, AND DATA PROTECTION</strong>
				<ol>
					<li>You agree that WORBLI may access, preserve and disclose Your personal information and/or content if required to do so by law or to: (i) comply with a legal process; (ii) respond to claims that any content violates the rights of third parties or (iii) protect the rights, property or personal safety of WORBLI, other Users, and the public.  For more information please refer to our Privacy Policy.</li>
				</ol></li>

				<li><strong>COPYRIGHT</strong>
				<ol>
					<li>The Network is the copyrighted work of WORBLI. Unauthorized copying, distribution, modification, public display, or public performance of copyrighted works is an infringement of the copyright holders rights. You agree that You will not use Network to infringe the Intellectual Property Rights of WORBLI or others in any way. You must not remove, overprint or deface any notice of copyright, trademark, logo, legend, or other notice of ownership, third party software, or any content accessed on the WORBLI Platform.</li>
					<li>As used herein, ‘Intellectual Property Rights’ means patents of any type, design rights, utility models or other similar invention rights, copyrights, trademarks, service marks, trade secret or confidentiality rights, and any other intangible property rights including applications for any of the foregoing, in any country, arising under statutory or common law or by contract and whether or not perfected, now existing or hereafter filed, issued, or acquired.</li>
				</ol></li>

				<li><strong>CONFIDENTIALITY</strong>
				<ol>
					<li>Unless agreed by WORBLI in advance, any content that You send or upload to the Network will be deemed NOT to be confidential or proprietary, and You expressly agree that You waive any trade secret or other confidentiality rights with respect to such content.</li>
					<li>You agree not to reproduce any Confidential Information to which You are provided access through the Network, in any form except as authorized at the time of disclosure. Any reproduction of Confidential Information shall remain the property of WORBLI and shall contain any and all confidential or proprietary notices or legends which appear on the original. You agree to (a) take all reasonable steps (defined below) to keep all Confidential Information strictly confidential; (b) to use Confidential Information solely as authorized at the time of disclosure and (d) not to disclose any Confidential Information to any party without the prior written consent of WORBLI. You do not acquire any rights in Confidential Information except the limited rights as described herein. In no event shall You use Confidential Information to create, enhance, modify, rent, lease, loan, sell, distribute or create derivative works based on the Network, or compete with the Network in whole or in part. As used herein, ‘Confidential Information’ shall mean all WORBLI technical product documentation, trade secrets and other information or Services which WORBLI or third parties protect against unrestricted disclosure to others which is either labelled Confidential, accessed through a restricted or non-public area of WORBLI Platform, pursuant to software downloads, or reasonably identifiable as confidential based on the type of information and the manner of its disclosure, and ‘reasonable steps’ means those steps You and/or Your Company take to protect Your own similar confidential information, which shall not be less than a reasonable standard of care.</li>
				</ol></li>

				<li><strong>CHANGE AND NOTICES</strong>
				<ol>
					<li>WORBLI reserves the right to make changes to the Network Terms.  You agree to be bound to any amended or updated versions of the Network Terms on and from the date they are made available to You via the Network and/or WORBLI Portal.</li>
				</ol></li>

				<li><strong>INDEMNIFICATION</strong>
				<ol>
					<li>You agree to indemnify and hold WORBLI, its affiliates, subsidiaries, officers, agents, partners, employees, and licensors harmless from any claim or demand, including reasonable attorneys fees, made by any third party due to or arising out of Your usage of the Network, Your breach of the Network Terms or WORBLI's Privacy Policy, or Your alleged violation of any other rights of a third party.</li>
					<li>In no event may You enter into any settlement or like agreement with a third party that affects WORBLI's rights or binds WORBLI in any way, without the prior written consent of WORBLI.</li>
				</ol></li>

				<li><strong>TERM</strong>
				<ol>
					<li>The Term of the Network Terms shall extend until the one (1) year anniversary of the original activation date of Your Account. Thereafter, subject to Your compliance with the terms of the Network Terms, the Term will automatically renew for successive one (1) year terms, unless sooner terminated in accordance with the Network Terms.</li>
				</ol></li>

				<li><strong>TERMINATION</strong>
				<ol>
					<li>The Network Terms and all rights and licenses granted by WORBLI hereunder will terminate, effective immediately upon notice from WORBLI:
					<ol>
						<li>if You fail to comply with any term of the Network Terms and fail to cure such breach within 30 days after becoming aware of or receiving notice of such breach;</li>
						<li>if You become insolvent, fail to pay Your debts when due, dissolve or cease to do business, file for bankruptcy, or have filed against You a petition in bankruptcy; or</li>
						<li>if You engage, or encourage others to engage, in any misleading, fraudulent, improper, unlawful or dishonest act relating to the Network Terms.</li>
					</ol></li>
					<li>WORBLI may also terminate the Network Terms, or suspend Your rights to use the Network, if You fail to accept any change to the Network Terms as described in clause ‎15.</li>
					<li>Either party may terminate the Network Terms for its convenience, for any reason or no reason, effective 30 days after providing the other party with written notice of its intent to terminate.</li>
				</ol></li>

				<li><strong>EFFECT OF TERMINATION</strong>
				<ol>
					<li>Upon the termination of the Network Terms for any reason, You agree to immediately cease all use of the Network and erase and destroy all copies, full or partial, of the Network and all copies of Confidential Information in Your possession or control. At WORBLI’s request, You agree to provide written certification of such destruction to WORBLI.</li>
				</ol></li>

				<li><strong>EXCLUSION OF SOFTWARE WARRANTIES</strong>
				<ol>
					<li>The Network is being provided to You AS IS. To the fullest extent allowable by law, WORBLI does not guarantee or warrant any features or qualities of the Network or give any undertaking with regard to any other quality. Statements and explanations to the Network are made for explanatory purposes only; they are not meant to constitute any guarantee or warranty of certain features.</li>
					<li>No warranty or undertaking shall be implied by a User from any published WORBLI description of or advertisement except to the extent WORBLI has expressly confirmed such warranty or undertaking in writing. Warranties are validly given only with the express written confirmation of WORBLI's management.</li>
					<li>WORBLI does not represent or endorse the accuracy, reliability, completeness, usefulness, non-infringement of intellectual property rights, or quality of any information provided by third parties on the Network.</li>
				</ol></li>

				<li><strong>LIMITATION OF LIABILITY</strong>
				<ol>
					<li>TO THE EXTENT ALLOWABLE BY APPLICABLE LAW, WORBLI AND ITS AFFILIATES, SUBSIDIARIES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, AND LICENSORS ARE NOT LIABLE TO ANY USER OF THE NETWORK FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF WORBLI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), HOWEVER CAUSED, WHETHER IN CONTRACT, TORT, OR OTHERWISE, ARISING OUT OF OR RESULTING FROM: (i) THE USE OR THE INABILITY TO USE THE NETWORK, WORBLI PLATFORM OR WORBLI DEVELOPMENT SUPPORT, (ii) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (iii) STATEMENTS, MESSAGES, OR CONDUCT OF ANY THIRD PARTY ON THE NETWORK; OR (v) ANY OTHER MATTER RELATING TO THE NETWORK OR SERVICES. NOTWITHSTANDING ANYTHING TO THE CONTRARY HEREIN, THESE LIMITATIONS SHALL NOT APPLY IN CASE OF MALICIOUS INTENT OR GROSS NEGLIGENCE BY WORBLI AND IN CASE OF WORBLIS STATUTORY LIABILITY FOR PERSONAL INJURY AND DEFECTIVE PRODUCTS.</li>
				</ol></li>

				<li><strong>ASSIGNMENT</strong>
				<ol>
					<li>The Network Terms may not be assigned, nor may any of Your obligations under the Network Terms be delegated, in whole or in part, by You by operation of law, merger, or any other means without WORBLI’s express prior written consent and any attempted assignment without such consent will be null and void.</li>
				</ol></li>

				<li><strong>NOTICES</strong>
				<ol>
					<li>Any notices relating to the Network Terms shall be in writing. Notices will be deemed given by WORBLI when sent to You at the email address or mailing address You provided during the Account sign-up process. All notices to WORBLI relating to the Network Terms will be deemed given (a) when delivered personally, (b) three business days after having been sent by commercial overnight carrier with written proof of delivery, and (c) five business days after having been sent by first class or certified mail, postage prepaid, to WORBLI's address as published on the WORBLI Portal.</li>
					<li>You consent to receive notices by email and agree that any such notices that WORBLI sends You electronically will satisfy any legal communication requirements. A party may change its email or mailing address by giving the other written notice as described above.</li>
				</ol></li>

				<li><strong>SURVIVAL</strong>
				<ol>
					<li>Your confidentiality obligations hereunder shall survive termination of Your use of the Network. Upon any termination of Your use of the Network, or WORBLIs written request, You must cease use of Confidential Information, and/or Services and return or destroy all Confidential Information in Your possession or control.</li>
				</ol></li>

				<li><strong>SEVERABILITY</strong>
				<ol>
					<li>If a court of competent jurisdiction finds any clause of the Network Terms to be unenforceable for any reason, that clause of the Network Terms shall be enforced to the maximum extent permissible so as to effect the intent of the parties, and the remainder of the Network Terms shall continue in full force and effect.</li>
				</ol></li>

				<li><strong>WAIVER AND CONSTRUCTION</strong>
				<ol>
					<li>Failure by WORBLI to enforce any provision of the Network Terms shall not be deemed a waiver of future enforcement of that or any other provision. Any laws or regulations that provide that the language of a contract will be construed against the drafter will not apply to the Network Terms.  Section headings are for convenience only and are not to be considered in construing or interpreting the Network Terms.</li>
				</ol></li>

				<li><strong>DISPUTE RESOLUTION; GOVERNING LAW</strong>
				<ol>
					<li>Any litigation or other dispute resolution between You and WORBLI arising out of or relating to the Network Terms, the Network, or Your relationship with WORBLI will take place in the Court of Singapore, and You and WORBLI hereby consent to the personal jurisdiction of and exclusive venue in the courts within that jurisdiction with respect any such dispute resolution.</li>
					<li>The Network Terms will be governed by and construed in accordance with the laws of Singapore without giving effect to any principles of conflicts of laws.</li>
					<li>You also agree to comply with all laws from the country in which You reside that are applicable to the transmission of data on the Internet, including, but, not limited to laws governing the use of encryption and laws governing the transmission of data across international boundaries, into prohibited countries, and containing personally identifiable information.</li>
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
} window.customElements.define('network-terms-route', NetworkTermsRoute);
