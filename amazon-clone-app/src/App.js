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

function App() {

  const [{user, dialog}, dispatch] = useStateValue();

  useEffect(() => {
    const userChange = auth.onAuthStateChanged((user) => {
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
