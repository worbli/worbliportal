import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      * { 
        margin: 0; 
        padding: 0; 
        border: 0; 
      }
      *:focus {
        outline: none !important;
      }
      :host {
        display: block;
      }
      :host {
        --grey-keyline: rgba(220, 226, 239, 1);
        --grey-text: rgba(120, 131, 145, 1);
        --blue-navigation: rgba(38, 40, 88, 1);
        --blue-button: rgba(13, 28, 114, 1);
        --blue-text: rgba(13, 28, 114, 1);
        --green-text: rgba(158, 208, 174, 1);
      }
      p {
        line-hright: 3em;
      }
      .container {
        position: relative;
        background: #FFF;
        border-radius: 3px;
        box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        margin-bottom: 18px;
        cursor: pointer;
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
      .button{
        display: block;
        box-shadow: inset 0 0 0 1px #c8d6e8;
        padding: 6px;
        max-width: 210px;
        border-radius: 3px;
        text-align: center;
        padding-top:12px;
        height: 25px;
        margin-left: 25px;
        text-decoration: none;
        color: #4978b3;
        font-size: 12px;
        font-weight: 600;
        width: 100%;
      }
      .btn-critical {
        display: block;
        width: 100%;
        font-weight: bold;
        padding: 0 12px;
        line-height: 36px;
        font-size: 14px;
        border: 1px solid;
        border-radius: 3px;
        color: #5A616F;
        text-shadow: 0 1px 0 #FFF;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        border-color: #d1d3d6 #d2d3d5 #bdbec0;
        background: #F4F4F5;
        background: -webkit-linear-gradient(top,#FFF,#F6F7F8);
        background: -ms-linear-gradient(top,#FFFFFF,#f9f9f9);
        background: -moz-linear-gradient(top,#FFFFFF,#f9f9f9);
        background: -o-linear-gradient(top,#FFFFFF,#f9f9f9);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF',
        endColorstr='#f9f9f9');
        cursor: pointer;
        margin-bottom: 12px;
    }

    .btn-critical:hover {
        text-decoration: none;
        border-color: #CCCED2 #C7C8C9 #B6B7B9;
        background: rgb(255,255,255);
        background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(249,250,250,1) 100%);
        background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(249,250,250,1) 100%);
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(249,250,250,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', 
        endColorstr='#f9fafa',GradientType=0 );
	}
	
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
