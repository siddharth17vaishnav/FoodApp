import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import Home from './Home';
import ViewCart from './ViewCart';
import { CartProvider } from "react-use-cart";
import './App.css';
import {Route,Switch} from "react-router-dom";

function App() {
  return (
    <>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/viewcart" component={ViewCart}/>
      <CartProvider>
        <div>
          <Home/>
          <Cart/>
          </div>
    </CartProvider>
    </Switch>
    </>
  );
}

export default App;
