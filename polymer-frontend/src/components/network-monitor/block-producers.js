import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import '../../css/shared-styles.js';

class BlockProducers extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles">
            :host {
                display: block;
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
            .block {
                color: #3a3e46;
                font-size: 28px;
                font-weight: 800;
                text-transform: uppercase;
                line-height: 16px;
                padding: 13px 12px;
                letter-spacing: 2px;
            }
            .small {
                color: #3a3e46;
                font-size: 12px;
                font-weight: 300;
                text-transform: uppercase;
                line-height: 16px;
                padding: 1px 12px 12px;
                letter-spacing: 1px;
            }
            ul {
                font-size: 12px;
                list-style: none;
                padding: 6px 0 6px 12px;
                }
            li {
                display: inline;
            }
            .number{
                display: inline-block;
                width: 30px;
                height:30px;
            }
            .logo{
                display: inline-block;
                width: 35px; 
                height:30px;
            }
            .logo img{
                width: 30px; 
                height: 30px; 
                position: relative;
                top: 10px;
            }
            .owner {
                display: inline-block;
                width: 170px;
                height:30px;
            }
            .owner a {
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 600;
                color: #3a3e46;
                text-decoration: none;
            }
            .location{
                display: inline-block;
                width: 250px;
                height:30px;
            }
            .red {
                background-color: #f5f5f5;
                border-bottom: 1px solid #f5f5f5;
            }
            .circle {
                display: inline-block;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: red;
            }
            .active {
                background-color: #16a085;
            }
            .blue {
                border-bottom: 1px solid #f5f5f5;
            }
            ul.blue:hover {
                background-color: #f5f5f5;
            }
        </style>
        <div class="container">
            <div class="title">Worbli Block Producers</div>
            <ul>
                <li class="number"></li>
                <li class="logo"></li>
                <li class="owner">Name:</li>
                <li class="location">Location:</li>
                <li class="location">Website:</li>
                <li>Active:</li>
            </ul>
            <dom-repeat items="{{producers}}">
                <template>
                    <ul class$="[[item.selected]]">
                        <li class="number">[[item.number]]. </li>
                        <li class="logo"><img src$="./images/bp-logos/[[item.owner]]_100x100.png" alt="[[item.owner]" width="30" height="30"></li>
                        <li class="owner"><a href="[[item.url]]" target=”_blank”>[[item.owner]]</a></li>
                        <li class="location">[[item.location]]</li>
                        <li class="location">[[item.url]]</li>
                        <li><div class$="[[item.is_active]] circle"></div></li>
                    </ul>
                </template>
            </dom-repeat>
        </div>
      `;
  }
  static get properties() {
    return {
        jsonrpc: {
            type: Object,
            observer: '_getBlockProducers',
        },
        interval: {
            type: Number,
        },
        producers: {
            type: Object,
        },
        producer: {
            type: Text,
            observer: '_getBlockProducers',
        },
        isoCountries: {
            type: Object,
            value: {'4':'Afghanistan','248':'Åland Islands','8':'Albania','12':'Algeria','16':'American Samoa','20':'Andorra',
            '24':'Angola','660':'Anguilla','10':'Antarctica','28':'Antigua and Barbuda','32':'Argentina','51':'Armenia',
            '533':'Aruba','36':'Australia','40':'Austria','31':'Azerbaijan','44':'Bahamas','48':'Bahrain','50':'Bangladesh',
            '52':'Barbados','112':'Belarus','56':'Belgium','84':'Belize','204':'Benin','60':'Bermuda','64':'Bhutan','68':'Bolivia',
            '535':'Bonaire, Sint Eustatius and Saba','70':'Bosnia and Herzegovina','72':'Botswana','74':'Bouvet Island','76':'Brazil',
            '86':'British Indian Ocean Territory','96':'Brunei Darussalam','100':'Bulgaria','854':'Burkina Faso','108':'Burundi',
            '132':'Cabo Verde','116':'Cambodia','120':'Cameroon','124':'Canada','136':'Cayman Islands','140':'Central African Republic',
            '148':'Chad','152':'Chile','156':'China','162':'Christmas Island','166':'Cocos (Keeling) Islands','170':'Colombia',
            '174':'Comoros','178':'Congo','180':'Congo','184':'Cook Islands','188':'Costa Rica','384':'Côte dIvoire','191':'Croatia',
            '192':'Cuba','531':'Curaçao','196':'Cyprus','203':'Czechia','208':'Denmark','262':'Djibouti','212':'Dominica',
            '214':'Dominican Republic','218':'Ecuador','818':'Egypt','222':'El Salvador','226':'Equatorial Guinea','232':'Eritrea',
            '233':'Estonia','748':'Eswatini','231':'Ethiopia','238':'Falkland Islands ','234':'Faroe Islands','242':'Fiji','246':'Finland',
            '250':'France','254':'French Guiana','258':'French Polynesia','260':'French Southern Territories','266':'Gabon','270':'Gambia',
            '268':'Georgia','276':'Germany','288':'Ghana','292':'Gibraltar','300':'Greece','304':'Greenland','308':'Grenada','312':'Guadeloupe',
            '316':'Guam','320':'Guatemala','831':'Guernsey','324':'Guinea','624':'Guinea-Bissau','328':'Guyana','332':'Haiti',
            '334':'Heard Island and McDonald Islands','336':'Holy See','340':'Honduras','344':'Hong Kong','348':'Hungary','352':'Iceland',
            '356':'India','360':'Indonesia','364':'Iran','368':'Iraq','372':'Ireland','833':'Isle of Man','376':'Israel','380':'Italy',
            '388':'Jamaica','392':'Japan','832':'Jersey','400':'Jordan','398':'Kazakhstan','404':'Kenya','296':'Kiribati',
            '408':'Korea (Democratic Peoples Republic of)','410':'Korea (Republic of)','414':'Kuwait','417':'Kyrgyzstan',
            '418':'Lao Peoples Democratic Republic','428':'Latvia','422':'Lebanon','426':'Lesotho','430':'Liberia','434':'Libya',
            '438':'Liechtenstein','440':'Lithuania','442':'Luxembourg','446':'Macao','807':'Macedonia (the former Yugoslav Republic of)',
            '450':'Madagascar','454':'Malawi','458':'Malaysia','462':'Maldives','466':'Mali','470':'Malta','584':'Marshall Islands',
            '474':'Martinique','478':'Mauritania','480':'Mauritius','175':'Mayotte','484':'Mexico','583':'Micronesia (Federated States of)',
            '498':'Moldova (Republic of)','492':'Monaco','496':'Mongolia','499':'Montenegro','500':'Montserrat','504':'Morocco','508':'Mozambique',
            '104':'Myanmar','516':'Namibia','520':'Nauru','524':'Nepal','528':'Netherlands','540':'New Caledonia','554':'New Zealand',
            '558':'Nicaragua','562':'Niger','566':'Nigeria','570':'Niue','574':'Norfolk Island','580':'Northern Mariana Islands','578':'Norway',
            '512':'Oman','586':'Pakistan','585':'Palau','275':'Palestine, State of','591':'Panama','598':'Papua New Guinea','600':'Paraguay',
            '604':'Peru','608':'Philippines','612':'Pitcairn','616':'Poland','620':'Portugal','630':'Puerto Rico','634':'Qatar','638':'Réunion',
            '642':'Romania','643':'Russian Federation','646':'Rwanda','652':'Saint Barthélemy','654':'Saint Helena, Ascension and Tristan da Cunha',
            '659':'Saint Kitts and Nevis','662':'Saint Lucia','663':'Saint Martin','666':'Saint Pierre and Miquelon','670':'Saint Vincent and the Grenadines',
            '882':'Samoa','674':'San Marino','678':'Sao Tome and Principe','682':'Saudi Arabia','686':'Senegal','688':'Serbia','690':'Seychelles',
            '694':'Sierra Leone','702':'Singapore','534':'Sint Maarten (Dutch part)','703':'Slovakia','705':'Slovenia','90':'Solomon Islands',
            '706':'Somalia','710':'South Africa','239':'South Georgia and the South Sandwich Islands','728':'South Sudan','724':'Spain',
            '144':'Sri Lanka','729':'Sudan','740':'Suriname','744':'Svalbard and Jan Mayen','752':'Sweden','756':'Switzerland','760':'Syrian Arab Republic',
            '158':'Taiwan, Province of China[a]','762':'Tajikistan','834':'Tanzania, United Republic of','764':'Thailand','626':'Timor-Leste','768':'Togo',
            '772':'Tokelau','776':'Tonga','780':'Trinidad and Tobago','788':'Tunisia','792':'Turkey','795':'Turkmenistan','796':'Turks and Caicos Islands',
            '798':'Tuvalu','800':'Uganda','804':'Ukraine','784':'United Arab Emirates','826':'United Kingdom','840':'United States of America',
            '581':'United States Minor Outlying Islands','858':'Uruguay','860':'Uzbekistan','548':'Vanuatu','862':'Venezuela','704':'Viet Nam',
            '92':'Virgin Islands (British)','850':'Virgin Islands (U.S.)','876':'Wallis and Futuna','732':'Western Sahara','887':'Yemen','894':'Zambia','716':'Zimbabwe'}
        }
    };
  }


  _getBlockProducers(){
    if(this.jsonrpc){
        this.jsonrpc.get_producers()
        .then((producers) => {
            let iterator = 1;
            this.producers = producers.rows;
            this.producers = this.producers.map((x) => {
                x.total_votes = parseInt(x.total_votes);
                x.location = this._getCountryName(x.location);
                x.total_votes = x.total_votes.toLocaleString();
                x.selected = (x.owner == this.producer) ? "red" : "blue";
                x.is_active = (x.is_active == 1) ? "active" : "deactive";
                x.number = iterator;
                iterator ++;
                return x
            });
        })
    }
  }

 _getCountryName(countryCode) {
    if (countryCode === 0 || countryCode === 7){
        return ' ';
    }
    if (this.isoCountries.hasOwnProperty(countryCode)) {
        return this.isoCountries[countryCode];
    } else {
        return countryCode;
    }
}

} window.customElements.define('block-producers', BlockProducers);