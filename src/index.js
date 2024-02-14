import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain="dev-83rczzza30aq7qla.us.auth0.com"
    clientId="1oTf32fb8t0PAyRZY9VsUiCUOSqr6Yxe"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
