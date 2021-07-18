
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home'
import CreateNewP from './CreateNewP'
import EditP from './EditP'

function App() {
  return (

    <div>
      <nav className="navbar bg-info navbar-light navbar-expand">
        <ul className="navbar-nav">
          <li className="navbar-item mx-4">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li className="navbar-item mx-4">
            <Link to="/createProp" className="nav-link">Create New</Link>
          </li>
        </ul>

      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/createProp">
          <CreateNewP />
        </Route>
        <Route path="/editProp/:id">
          <EditP />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
