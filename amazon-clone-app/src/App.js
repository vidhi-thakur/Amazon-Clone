import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Signin from "./pages/Signin"

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          </Route>
        <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/checkout/">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
