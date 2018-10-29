import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
//import Onfido from 'onfido-sdk-ui';
import '../css/shared-styles.js';

class WorbliOnfido extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        div {
            flex-grow: 1;
            color: var(--grey-text);
            font-size: 12px;
        }
        .center{
          text-align: center;
          padding: 12px;
        }
        .print {
          width: 300px;
          height: 300px;
        }
      </style>
      <div class="center">
      <img src="./images/dashboard-icons/print.svg" class="print">
      <p>Verify your identity to get an on-chain Worbli account and redeem your Share Drop</p>
        <button id='onfido-button' disabled>[[buttonText]]</button>
        <div id='onfido-mount'></div>
      </div>
    `;
  }
  static get properties() {
    return {
      init: {
        type: String,
        observer: '_doOnfido',
      },
      modal: {
        type: Boolean,
        value: false,
      },
      language: {
          type: Text,
          value: 'en'
      },
      buttonText: {
        type: Text,
        value: 'Verify identity'
      },
      apiToken: {
            type: Text,
        },
      firstName: {
        type: Text,
      },
      lastName: {
        type: Text,
      },
      jwt: {
        type: Text,
      },
      complete: {
        type: Boolean,
        value: false,
	  },
	  applicantId : {
		  type : String
	  },
	  SDKJWT : {
		type : String
	  }
    };
  }

  _createApplicant(){
	const params = {
        headers: {
			"Authorization" : "Token token=test_PWluw5ldKP3nucC59suthsqdHE0vWs2M",
			"Content-Type":"application/json"
		},
        body: {
			"first_name": this.firstName,
			"last_name" : this.lastName
		},
		processData:false,
        method: "POST"
	}
	
	fetch('https://api.onfido.com/v2/applicants', params)
	.then((response) => {
		this.applicantId = response.id
	})
	.catch((error) => {
        console.log(error);
    })
  }

  _doOnfido(){
    const params = {
        headers: {
			"Authorization" : "Token token=test_PWluw5ldKP3nucC59suthsqdHE0vWs2M",
			"Content-Type":"application/x-www-form-urlencoded"
		},
        body: {
			"applicant_id": this.applicantId,
			"referrer" : "http://127.0.0.1:8081/dashboard/verify"
		},
		processData:false,
        method: "POST"
    }
    fetch('https://api.onfido.com/v2/sdk_token', params)
    .then((response) => {
		console.log(response);
		this.SDKJWT = response.token
		Onfido.init({
			token: this.SDKJWT,
			useModal: this.modal,
			buttonId: 'onfido-button',
			containerId: 'onfido-mount',
			language: this.language,
			onComplete: (data) => {
			this._sendDataToAPI(data);
			}
			// Handle if it rejects the user here
		})
    })
    .catch((error) => {
        console.log(error);
    })
  }

  _sendDataToAPI(data){
    const params = {
      headers: {"content-type":"application/json; charset=UTF-8"},
      body: {data},
      method: "POST"
  }
  fetch('http://yourAPI.com', params)
  .then((done) => {
    this.complete = true;
  })
  .catch((error) => {
      console.log(error);
  })
  }


} window.customElements.define('worbli-onfido', WorbliOnfido);