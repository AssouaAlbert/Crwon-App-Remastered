import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { UserProvider } from './components/context/user/user.context';
import { ShopProvider } from './components/context/shop/shop.context';
import { CartDropDownProvider } from './components/context/cart-dropdown/cart-drop-down.context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ShopProvider>
        <CartDropDownProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartDropDownProvider>
      </ShopProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
