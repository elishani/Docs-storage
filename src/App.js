import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DocsPage from './pages/DocsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeUser: null,
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(user){
    this.setState({
      activeUser: user
    });
  }

  handleLogout(){
    this.setState({
      activeUser: null
    });
  }

  render() {
  const { activeUser } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage activeUser={activeUser} handleLogout={this.handleLogout} />
          </Route>
          <Route exact path="/login">
            <LoginPage handleLogin={this.handleLogin}/>
          </Route>
          <Route exact path="/docs">
            <DocsPage activeUser={activeUser} handleLogout={this.handleLogout} />
          </Route>
        </Switch>
      </Router>
    );
  }

}

export default App;