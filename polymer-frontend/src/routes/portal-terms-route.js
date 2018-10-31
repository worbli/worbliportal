import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/side-bar/worbli-whitepaper.js';
import '../components/side-bar/worbli-support.js';


class PortalTermsRoute extends PolymerElement {
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

      
      <div class="split">
        <div class="main">
          <h1>Platform Terms</h1>
            <ol>
              <li><strong>THE PLATFORM</strong>
              <ol>
                <li>World Blockchain Initiative, LLC or any other entity that directly or indirectly controls, is controlled by, or is under common control with World Blockchain Initiative, LLC (collectively "WORBLI") created the WORBLI online platform at the URL https://portal.worbli.io (the "Platform"), which includes other websites added to the Platform from time to time to provide a medium where you ("You" or "Your") and other users and other interested parties (each, a "User" and collectively, "Users") may sign up to a WORBLI account, obtain information, post comments, provide reviews, and engage in conversation threads around WORBLI and the WORBLI blockchain network (the "Network").</li>
                <li>If You are accessing and/or using the Platform on behalf of Your employer or as a consultant or agent of a third party (collectively "Your Company"), You represent and warrant that You have the authority to act on behalf of and bind Your Company to these Platform terms and conditions (the "Platform Terms") and everywhere in these Platform Terms that refers to You or Your, shall also include Your Company.</li>
              </ol></li>
      
              <li><strong>ACCEPTANCE OF TERMS</strong>
              <ol>
                <li>Your access and use of the Platform, WORBLI Content (defined in Section 3 below), Public Content (defined in Section 3 below), or any forums, wikis, blogs, or services provided on the Platform (any "Services"), are subject to these Platform Terms.</li>
                <li>Your use of the Platform, WORBLI Content, Public Content and the Services may also be subject to disclaimers, legal notices, click-through agreements, or other legal agreements (any, "Additional Legal Terms"), which may be posted on the Platform where applicable. These Platform Terms and the applicable Additional Legal Terms (together "Controlling Terms") form a legally binding agreement between You and WORBLI regarding Your access and use of the Platform.</li>
                <li>Whenever there is a conflict between the terms in this Platform Terms and the Additional Legal Terms, the terms in the Additional Legal Terms shall prevail. By accessing or using the Platform, You accept and agree to abide by the terms of these Platform Terms. If You do not agree to the terms of these Platform Terms, You must not attempt to access or use the Platform.</li>
                <li>Your access and use of the Network shall be subject to a separate user agreement – the Network Terms.</li>
              </ol></li>
      
              <li><strong>LICENSES</strong>
              <ol>
                <li>By transmitting or uploading any article, information, data, code, text, software, documentation, graphics, image, marketing material, video, photograph, message, suggestions, feedback, ideas, expression of ideas, other materials, or any posting to any forum, wiki, or blog to any web page on the Platform (collectively, "Public Content"), You grant to WORBLI a perpetual, irrevocable, non-exclusive, world-wide, fully-paid up and royalty free license to use such Public Content without restrictions of any kind and without any payment or other consideration of any kind, or permission or notification, to You or any third party. The license shall include, without limitation, the irrevocable right to reproduce, prepare derivative works, combine with other works, alter, translate, distribute copies, display, perform, license the Public Content, and all rights therein; to make, have made, offer to sell, sell, lease, or otherwise distribute any Public Content or product; and to practice any method, embodying such Public Content (including the right to sublicense any of the foregoing).</li>
                <li>You further represent and warrant to WORBLI that You have the right, title, and/or authority to grant such license to WORBLI. WORBLI may elect not to post or publish the Public Content that You send or upload. If WORBLI elects to post or publish the Public Content, WORBLI may in its sole discretion elect to withdraw the posted or published information for any reason and without notice.</li>
                <li>WORBLI may make certain WORBLI-created or licensed articles, information, data, code, text, software, documentation, graphics, images, marketing materials, videos, photographs or other materials available to You on the Platform (“WORBLI Content”). WORBLI grants You a limited, revocable, non-exclusive license to access, copy and use the WORBLI Content for Your own use in connection with your access and use of the Platform or in support of Your authorized use of the Network. You may not sublicense these rights to any third party. You may not use the WORBLI Content to create, enhance or market products or services that compete with any products or services of WORBLI. WORBLI may revoke this license at any time in the event You violate these Platform Terms.</li>
                <li>You acknowledge and agree that the relationship between You and WORBLI under these Platform Terms is not a confidential, fiduciary, or other special relationship. WORBLI shall have the right, but not the obligation, to use Your name, likeness, biography and other information about You in connection with any use of the Public Content You submit. Nothing in these Platform Terms shall prohibit or restrict WORBLI’s right to create or obtain other submissions similar to or competitive with those submitted by You.</li>
              </ol></li>
      
              <li><strong>CHANGE AND NOTICES</strong>
              <ol>
                <li>WORBLI reserves the right to make changes to the Platform Terms.  You agree to be bound to any amended or updated versions of the Platform Terms on and from the date they are made available to You via the Network and/or WORBLI Portal.</li>
              </ol></li>
      
              <li><strong>CONFIDENTIAL INFORMATION</strong>
              <ol>
                <li>Except for websites within the Platform which are clearly identified as non-public forums (each a "Non-Public Forum"), the Platform is intended to be a public medium and You agree not to provide WORBLI or other Users of the Platform with any confidential or proprietary information that You or the owner of the information do not intend to become public information. Any Public Content that You send or upload to Platform will be deemed NOT to be confidential or proprietary, and You expressly agree that You waive any trade secret or other confidentiality rights with respect to such Public Content.</li>
                <li>You agree not to reproduce any Confidential Information to which You are provided access through the Platform in any form except as authorized at the time of disclosure. Any reproduction of WORBLI Confidential Information shall remain the property of WORBLI and shall contain any and all confidential or proprietary notices or legends which appear on the original. You agree to (a) take all reasonable steps (defined below) to keep all Confidential Information strictly confidential; (b) to use Confidential Information solely as authorized at the time of disclosure and (d) not to disclose any Confidential Information to any party without the prior written consent of WORBLI. You do not acquire any rights in Confidential Information except the limited rights as described herein. In no event shall You use Confidential Information to create, enhance, modify, rent, lease, loan, sell, distribute or create derivative works based on the Network or Services, or compete with the Network or Services in whole or in part. As used herein, ‘Confidential Information’ shall mean all WORBLI technical product documentation, trade secrets and other information or Services which WORBLI or third parties protect against unrestricted disclosure to others which is either labelled Confidential, accessed through a restricted or non-public area of the Platform, pursuant to software downloads, or reasonably identifiable as confidential based on the type of information and the manner of its disclosure, and ‘reasonable steps’ means those steps You and/or Your Company take to protect Your own similar confidential information, which shall not be less than a reasonable standard of care.</li>
                <li>ALL UPLOADS BY YOU INTO THE WORBLI PLATFORM, WHETHER INTO A PUBLIC FORUM OR NON-PUBLIC FORUM, SHALL BE AT YOUR OWN RISK AND WORBLI TAKES NO RESPONSIBILITY FOR THE USE OR MISUSE OF ANY SUCH UPLOADED INFORMATION BY ANY OTHER USER OF THE WORBLI PLATFORM.</li>
              </ol></li>
      
              <li><strong>YOUR INFORMATION, PRIVACY, AND DATA PROTECTION</strong>
              <ol>
                <li>You understand and agree that WORBLI collects, uses, stores and otherwise processes Your personal information and utilization data and may share such data with third party service providers for the purposes of improving or providing the Services, subject to WORBLI's Privacy Policy.  Data to be processed includes Your name and email address.</li>
                <li>You agree that WORBLI may access, preserve and disclose Your personal information and/or Public Content if required to do so by law or to: (i) comply with a legal process; (ii) respond to claims that any Public Content violates the rights of third parties or (iii) protect the rights, property or personal safety of WORBLI, other Platform Users, and the public.</li>      
              </ol></li>
      
              <li><strong>COPYRIGHT</strong>
              <ol>
                <li>All the Platform and product documentation is the copyrighted work of WORBLI. Unauthorized copying, distribution, modification, public display, or public performance of copyrighted works is an infringement of the copyright holders rights. You agree that You will not use Platform to infringe the Intellectual Property Rights of WORBLI or others in any way. You must not remove, overprint or deface any notice of copyright, trademark, logo, legend, or other notice of ownership from any originals or copies of the Platform or related product documentation, third party software, or any Public Content accessed on the Platform.</li>
                <li>As used herein, ‘Intellectual Property Rights’ means patents of any type, design rights, utility models or other similar invention rights, copyrights, trademarks, service marks, trade secret or confidentiality rights, and any other intangible property rights including applications for any of the foregoing, in any country, arising under statutory or common law or by contract and whether or not perfected, now existing or hereafter filed, issued, or acquired.</li>
              </ol></li>
      
              <li><strong>RESPONSIBILITY FOR LINKS AND CONTENT</strong>
              <ol>
                <li>WORBLI IS ONLY RESPONSIBLE OR LIABLE FOR THE CONTENT POSTED ON THE WORBLI PLATFORM TO THE EXTENT REQUIRED BY APPLICABLE LAW AND TO THE FULLEST EXTENT OF APPLICABLE LAW, YOUR USE OF PUBLIC CONTENT SHALL BE AT YOUR OWN RISK.</li>
                <li>The Platform may contain links to external websites and information provided on such external websites by WORBLI partners and third-party service providers. WORBLI shall not be responsible for the contents of any linked website, or any changes or updates to such websites.</li>
                <li>You further agree that WORBLI shall not be directly or indirectly responsible or liable for any damage or loss caused or alleged to be caused by or in connection with Your use of or reliance on any content, goods or services available on or through any such linked website. Any Public Content, whether publicly posted or privately transmitted, is the sole responsibility of the person or entity providing the Public Content.</li>
              </ol></li>
      
              <li><strong>INTELLECTUAL PROPERTY RIGHTS</strong>
              <ol>
                <li>Subject to any licenses You grant to WORBLI pursuant to this Agreement, You shall retain ownership of all Intellectual Property Rights in and to the Public Content provided by You on the Platform to the extent You are the owner or holder of the Intellectual Property Rights. Nothing in this Agreement shall prohibit You from selling or licensing Your Public Content to any other party under a separate agreement.</li>
                <li>All Intellectual Proprietary Rights to any WORBLI Content, the Platform, the Network and the WORBLI Services[a][b] shall belong to WORBLI. Nothing in these Platform Terms shall be deemed to give You the right to modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative words from, transfer, or sell any the Network for any reason unless otherwise permitted by law or Additional Legal Terms. You hereby agree to assign and do assign to WORBLI any modifications or derivative works of any the Network made by You in contravention of this limitation.</li>
              </ol></li>
      
              <li><strong>PERMISSIBLE USE OF PLATFORM</strong>
              <ol>
                <li>You agree not to access or utilize the Platform for purposes that are inconsistent with WORBLI’s legitimate business interests. You are permitted to use the WORBLI Content only in strict compliance with the terms of these Platform Terms to obtain information, so long as that information is not being gathered for a use in any manner which is or could be detrimental to WORBLI (unless such use is otherwise protected by law), and/or to provide feedback or other constructive comments to WORBLI (both positive and negative).</li>
              </ol></li>
      
              <li><strong>TERMINATION AND ACCOUNTABILITY</strong>
              <ol>
                <li>In the event You are in material breach of the Controlling Terms, WORBLI may, at its sole discretion, suspend or terminate Your rights under these Platform Terms and refuse You any current or future use of Platform, including WORBLI Content.</li>
                <li>WORBLI shall not be liable to You or any third party for any termination or change to Platform and/or the Services. If You send or upload Public Content that is confidential or proprietary of a third party without that third party’s permission, or, if You transmit or upload Public Content that is intended to infect, corrupt or otherwise disrupt the operation of Platform or any other User’s computer system, WORBLI may report You to the relevant authorities to ensure You are held accountable to the fullest extent of applicable laws.</li>
                <li>You agree not to use Platform to:
                <ol>
                  <li>publish, upload, post, email, transmit or otherwise make available any Public Content that (a) You do not have the right to make available (b) is unlawful, harmful, vulgar, obscene, hateful, or racially, ethnically or otherwise objectionable; (c) infringes any Intellectual Property Rights of any party, (d) includes any unsolicited or unauthorized advertising, promotional materials, surveys, junk mail, spamming, chain letters, or any other form of solicitation, commercial or otherwise, or (e) contains a software virus, Trojan horse, worm, time bomb, cancelbot, corrupted file, or any other computer file or software designed to interrupt, destroy, damage or limit the functionality of any computer hardware, software or other property;</li>
                  <li>defame, harass, abuse, stalk, threaten or violate the legal rights of others such as rights of privacy and publicity;</li>
                  <li>impersonate any person or entity, including, but not limited to, an WORBLI official, WORBLI employee, or any other third party, or falsely state or otherwise misrepresent Your affiliation with a person or entity;</li>
                  <li>forge email headers or otherwise manipulate identifiers in order to disguise the origin of any Public Content transmitted through the Services;</li>
                  <li>download any file or Public Content posted by another User that You know, or reasonably should know, should not be legally reproduced, displayed, performed and/or distributed in such manner;</li>
                  <li>interfere with or disrupt the Services, servers, or systems which support the Services, or disobey any requirements, procedures, policies or regulations of networks connected to the Services;</li>
                  <li>violate any applicable local, state, national or international law and any regulations;</li>
                  <li>harvest, collect, or store personal information or data of other Users of the Platform.</li>
                </ol></li>
                <li>WORBLI may terminate Your right to access the Platform under these Platform Terms for convenience in whole or in part at any time.</li>
              </ol></li>
      
              <li><strong>SPECIFIC TERMS TO WORBLI NETWORK</strong>
              <ol>
                <li>Use of the Network is governed by a separate user agreement ("Network Agreement") which accompanies the Network. You may not use or install the Network which is accompanied until You first agree to the terms of the Network Agreement. You must not modify, decompile, or reverse engineer the Network, except to the extent expressly permitted by applicable law.</li>
              </ol></li>
      
              <li><strong>INDEMNITY</strong>
              <ol>
                <li>You agree to indemnify and hold WORBLI, its affiliates, subsidiaries, officers, agents, partners, employees, and licensors harmless from any claim or demand, including reasonable attorneys fees, made by any third party due to or arising out of Your Public Content or Your usage of the Platform or Services, Your breach of these Platform Terms or WORBLI's Privacy Policy, or Your alleged violation of any other rights of a third party.</li>
                <li>In no event may You enter into any settlement or like agreement with a third party that affects WORBLI's rights or binds WORBLI in any way, without the prior written consent of WORBLI.</li>
              </ol></li>
      
              <li><strong>EXCLUSION OF SOFTWARE WARRANTIES</strong>
              <ol>
                <li>The Platform, other Users’ Public Content, WORBLI Content and Services are being provided to You AS IS. To the fullest extent allowable by law, WORBLI does not guarantee or warrant any features or qualities of the Platform, other Users’ Public Content, WORBLI Content or Services or give any undertaking with regard to any other quality. Statements and explanations to the Platform, other Users’ Public Content, WORBLI Content or Services in promotional material or on the Platform are made for explanatory purposes only; they are not meant to constitute any guarantee or warranty of certain features.</li>
                <li>No warranty or undertaking shall be implied by a User from any published WORBLI description of or advertisement except to the extent WORBLI has expressly confirmed such warranty or undertaking in writing. Warranties are validly given only with the express written confirmation of WORBLI's management.</li>
                <li>WORBLI does not represent or endorse the accuracy, reliability, completeness, usefulness, non-infringement of intellectual property rights, or quality of any (i) links to web-pages of third parties contained on the Platform, or the content obtainable on such web-pages or (ii) information provided by third parties on the Platform. WORBLI only reviews whether the content of such web-page at the time it was linked, and information provided by third parties on the Platform evidently contains illegal contents or infringements against intellectual property rights.</li>
                <li>WORBLI will not permanently control and/or review the linked web-pages and the information provided by third parties but upon sufficiently proven indication will remove the respective link and/or information. WORBLI shall not be liable for damages caused by the use of the content and/or information, unless such damages have been caused by WORBLI's wilful misconduct, gross negligence or WORBLI's failure to fulfil its duty to review as stipulated herein.</li>
              </ol></li>
      
              <li><strong>LIMITATION OF LIABILITY</strong>
              <ol>
                <li>WORBLI will not be liable or responsible in any way for any Public Content posted on or linked from the Platform including, but not limited to, any errors or omissions in Public Content, or for any losses or damage of any kind incurred as a result of the use of or reliance on any Public Content.</li>
                <li>TO THE EXTENT ALLOWABLE BY APPLICABLE LAW, WORBLI AND ITS AFFILIATES, SUBSIDIARIES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, AND LICENSORS ARE NOT LIABLE TO ANY USER OF THE WORBLI CLOUD PLATFORM SITE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF WORBLI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), HOWEVER CAUSED, WHETHER IN CONTRACT, TORT, OR OTHERWISE, ARISING OUT OF OR RESULTING FROM: (i) THE USE OR THE INABILITY TO USE THE WORBLI PLATFORM, WORBLI NETWORK, WORBLI CONTENT OR SERVICES; (ii) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES ARISING OUT OF YOUR USE OR INABILITY TO USE ANY WORBLI SOFTWARE, PUBLIC CONTENT, WORBLI CONTENT OR SERVICES PURCHASED OR OBTAINED DURING TRANSACTIONS CONDUCTED ON THE WORBLI PLATFORM; (iii) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (iv) STATEMENTS, MESSAGES, OR CONDUCT OF ANY THIRD PARTY ON THE WORBLI PLATFORM; OR (v) ANY OTHER MATTER RELATING TO THE WORBLI PLATFORM OR SERVICES. NOTWITHSTANDING ANYTHING TO THE CONTRARY HEREIN, THESE LIMITATIONS SHALL NOT APPLY IN CASE OF MALICIOUS INTENT OR GROSS NEGLIGENCE BY WORBLI AND IN CASE OF WORBLI'S STATUTORY LIABILITY FOR PERSONAL INJURY AND DEFECTIVE PRODUCTS.</li>
              </ol></li>
      
              <li><strong>NOTICES</strong>
              <ol>
                <li>You consent to receive notices by email and agree that any such notices that WORBLI sends You electronically will satisfy any legal communication requirements. A party may change its email address by giving the other written notice of the same.</li>
              </ol></li>
      
              <li><strong>SURVIVAL</strong>
              <ol>
                <li>Your confidentiality obligations hereunder shall survive termination of Your use of the Platform. Upon any termination of Your use of the Platform, or WORBLI's written request, You must cease use of Confidential Information, and/or Services and return or destroy all Confidential Information in Your possession or control.</li>
              </ol></li>
      
              <li><strong>SEVERABILITY</strong>
              <ol>
                <li>If a court of competent jurisdiction finds any clause of the Platform Terms to be unenforceable for any reason, that clause of the Platform Terms shall be enforced to the maximum extent permissible so as to effect the intent of the parties, and the remainder of the Platform Terms shall continue in full force and effect.</li>
              </ol></li>
      
              <li><strong>WAIVER AND CONSTRUCTION</strong>
              <ol>
                <li>Failure by WORBLI to enforce any provision of the Platform Terms shall not be deemed a waiver of future enforcement of that or any other provision. Any laws or regulations that provide that the language of a contract will be construed against the drafter will not apply to the Platform Terms.  Section headings are for convenience only and are not to be considered in construing or interpreting the Platform Terms.</li>
              </ol></li>
      
              <li><strong>DISPUTE RESOLUTION; GOVERNING LAW</strong>
              <ol>
                <li>Any litigation or other dispute resolution between You and WORBLI arising out of or relating to the Platform Terms, the Platform, or Your relationship with WORBLI will take place in the Court of Singapore, and You and WORBLI hereby consent to the personal jurisdiction of and exclusive venue in the courts within that jurisdiction with respect any such dispute resolution.</li>
                <li>This Agreement will be governed by and construed in accordance with the laws of Singapore without giving effect to any principles of conflicts of laws.</li>
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
} window.customElements.define('portal-terms-route', PortalTermsRoute);
