import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
        <Route exact to="/">
            <Home />
          </Route>
        <Route to="/login">
            Login
          </Route>
          <Route to="/checkflow">
            Checkflow
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
