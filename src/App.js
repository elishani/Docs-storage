import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DocsPage from './pages/DocsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonUsers from './data/users'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeUser: null,
      allUsers: jsonUsers
    }
  }

  render() {
  const { activeUser, allUsers } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage activeUser={activeUser} />
          </Route>
          <Route exact path="/login">
            <LoginPage allUsers={allUsers}/>
          </Route>
          <Route exact path="/docs">
            <DocsPage />
          </Route>
        </Switch>
      </Router>
    );
  }

}

export default App;