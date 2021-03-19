import './App.scss';
import Auth from './components/auth/Auth';
import Registr from './components/registr/Registr';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/auth" exact>
            <Auth/>
          </Route>

          <Route path="/registr" exact>
            <Registr/>
          </Route>

          <Redirect to="/auth"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
