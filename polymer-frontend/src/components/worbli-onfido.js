import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '@polymer/iron-ajax/iron-ajax.js';
// import Onfido  from 'onfido-sdk-ui/src/index.js'; 

class WorbliOnfido extends PolymerElement {
	ready(){
		super.ready();
	}
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
		<iron-ajax
			auto
			url="https://token-factory.onfido.com/sdk_token"
			id="onfidoGetSDKToken"
			handle-as="json"
			on-response="_handleSDKToken"
			debounce-duration="300">
		</iron-ajax>
	  <div id="onfido-mount"></div>
	  <div class="center">
      <img src="./images/dashboard-icons/print.svg" class="print">
      <p>Verify your identity to get an on-chain Worbli account and redeem your Share Drop</p>
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

  _handleSDKToken(event,request){
	console.log(request.status)
	if (request.status >= 200 && request.status < 400) {
		console.log(request.response)
		Onfido.init({
			useModal: false,
			token: request.response.message,
			buttonId: 'onfido-button',
			containerId: 'onfido-mount',
			onComplete: function(data) {
				// callback for when everything is complete
				console.log("everything is complete")
			},
			steps: [
				'welcome',
				'document',
				'face',
				'complete'
			]
		});
	}
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
		this.SDKJWT = response.token;
		Onfido.init({
			token: this.SDKJWT,
			useModal: false,
			buttonId: 'onfido-button',
			containerId: 'onfido-mount',
			language: this.language,
			onComplete: (data) => {
				console.log(data);
				//this._sendDataToAPI(data);
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