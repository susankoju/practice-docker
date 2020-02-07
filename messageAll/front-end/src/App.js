import React from 'react';

import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Message from './components/Message';
import Home from './components/Home';
import User from './components/User';
import Logout from './components/Logout';
import NotFound from './components/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      err: ""
    }
  }


  render() {

    return (
      <Router >
        
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/message" component={Message} />
          <Route path="/user" component={User} />
          <Route path="/logout" component={Logout} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }

  setPage = (page) => {
    
    if (this.state.page !== page) {
      
      this.setState({
        page: page
      });
    }
  }
}

export default App;