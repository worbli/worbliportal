
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import './components/worbli-header.js';
import './components/worbli-dashboard.js';
import './components/worbli-overlay.js';


setPassiveTouchGestures(true);
setRootPath(WorbliPortalGlobals.rootPath);

class WorbliPortal extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height: 100vh;
        }
        .center {
          max-width: 1160px;
          margin: 0 auto;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <worbli-overlay></worbli-overlay>

      <template is="dom-if" if="{{!dashboard}}">
        <worbli-header name="header" class="center"></worbli-header>
      </template>

      <template is="dom-if" if="{{dashboard}}">
        <worbli-dashboard name="dashboard" class="center"></worbli-dashboard>
      </template>

      <iron-pages selected="[[page]]" attr-for-selected="name" role="main" class="center">
        <main-route name="main"></main-route>
        <network-route name="network"></network-route>
        <about-route name="about"></about-route>
        <team-route name="team"></team-route>
        <roadmap-route name="roadmap"></roadmap-route>
        <error-route name="error"></error-route>
        <register-route name="register"></register-route>
        <sharedrop-route name="sharedrop"></sharedrop-route>
        <support-route name="support"></support-route>
        <terms-route name="terms"></terms-route>
        <privacy-route name="privacy"></privacy-route>
        <dashboard-route name="dashboard"></dashboard-route>
        <signin-route name="signin"></signin-route>
        <join-route name="join"></join-route>
        <profservices-route name="profservices"></profservices-route>
      </iron-pages>
      
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      dashboard: {
        type: Boolean,
        value: false,
      },
      routeData: Object,
      subroute: Object,
      jsonrpc: Object,
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'main';
    } else if (['main', 'network', 'about', 'team', 'roadmap', 'register', 'sharedrop', 'support', 'terms', 'privacy', 'dashboard', 'signin', 'join', 'profservices'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'error';
    }
  }

  _pageChanged(page) {
    this.dashboard = false;
    switch (page) {
      case 'main':
        import('./routes/main-route.js');
        break;
      case 'network':
        import('./routes/network-route.js');
        break;
      case 'about':
        import('./routes/about-route.js');
        break;
      case 'team':
        import('./routes/team-route.js');
        break;
      case 'roadmap':
        import('./routes/roadmap-route.js');
        break;
      case 'register':
        import('./routes/register-route.js');
        break;
      case 'sharedrop':
        import('./routes/sharedrop-route.js');
        break;
      case 'support':
        import('./routes/support-route.js');
        break;
      case 'terms':
        import('./routes/terms-route.js');
        break;
      case 'privacy':
        import('./routes/privacy-route.js');
        break;
      case 'signin':
        import('./routes/signin-route.js');
        break;
      case 'join':
        import('./routes/join-route.js');
        break;
      case 'profservices':
        import('./routes/profservices-route.js');
        break;
      case 'dashboard':
        this.dashboard = true;
        import('./routes/dashboard-route.js');
        break;
      case 'error':
        import('./routes/error-route.js');
        break;
    }
  }
} window.customElements.define('worbli-portal', WorbliPortal);
