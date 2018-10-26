import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class EmailRoute extends PolymerElement {
  static get template() {
    return html`

      
<!-- START EMAIL CONTENT -->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>[WORBLI] Email Confirmation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body style="margin: 0; padding: 0; background-color: #F7F7F7; min-height: 100vh">
  <table style="margin: 0; padding: 60px; background-color: #F7F7F7;" cellpadding="0" cellspacing="0" width="100%">
    <tr>
    <td style="text-align:center">
      <img src="./images/email-logo.png" width="200px" style="margin-bottom: 20px;">
      <table style="margin: 0; padding: 60px; background-color: #FFFFFF; text-align:left; border-radius: 0.4em;" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td><b>Confirm Your Registration</b></td>
      </tr>  
      <tr>
        <td>
        </br></br>
          Welcome to WORBLI!</br></br></br>
          Click the button below to confirm your email.</br></br>
          <a href="/dashboard/profile/8983473475398745987/"><button type="button" style="cursor: pointer; outline: none; font-weight: 600; border-radius:3px; background-color: #37527A; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 15px; width:250px">Verify Email</button></a></br></br>
          If you can't confirm by clicking the button above, please copy the address below to the browser address bar to confirm. </br></br>
          <a href="/dashboard/profile/8983473475398745987/">https://portal-test.worbli.io/dashboard/profile/8983473475398745987/</a></br></br></br>
          If this activity is not your own operation, please contact us immediatly via support@worbli.io
        </td>
        </tr>
      </table>
    </td>
    </tr>
  </table>
  </body>
</html>

<!-- END EMAIL CONTENT -->

    `;
  }
} window.customElements.define('email-route', EmailRoute);
