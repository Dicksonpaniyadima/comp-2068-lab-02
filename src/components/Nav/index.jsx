import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Styles from './styles';
import About from '../About';
import Home from '../Home';


const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </Styles.Nav>

      <Switch>
      <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/About">
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;