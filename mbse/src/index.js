import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Auth0Provider
     domain="dev-i8juvjoju54l5wto.us.auth0.com"
     clientId="so2b8tVQqF5p9MoCYOYdeyJMHyGFh84y"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}
     >
       <Suspense fallback={<h1>Loading..............</h1>}>
    <Login />
</Suspense>
    </Auth0Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
