import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Signin from "./pages/Signin"
import React, { useEffect } from 'react'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Dialogbox from './components/Dialogbox';
import Payment from './pages/Payment';

function App() {

  const [{user, name, dialog}, dispatch] = useStateValue();

  useEffect(() => {
    const userChange = auth.onAuthStateChanged((user, name) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    
    return () => {
      userChange();
    }
  }, [])
  
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route exact path="/">
          <Header />
          {dialog && <Dialogbox />}
          <Home />
          </Route>
        <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/checkout">
            <Header />
            {dialog && <Dialogbox />}
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            {dialog && <Dialogbox />}
          <Payment />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;