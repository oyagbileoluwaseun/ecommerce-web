import React, { useEffect } from "react";
import "./App.css";
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login";
import Payment from './Payment';
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51HZIVHEmJRu5N8tcGq8fTwQnxlU2D4avARPIAu6og8EuIZB9swSEcn7bb1ctKJSPhPUim17aaN4csidamKkWlKLx00O9rKwHit");


function App() {   
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // run once
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>>', authUser);
      if (authUser) {
        // the user is logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }
      else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  
  }, []);

  return (
    // following a BEM convention
    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
              <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/"> 
            <Header />
            <Home />
          </Route>
        </Switch> 

      </div>
    </Router>
  );
  
}

export default App;
