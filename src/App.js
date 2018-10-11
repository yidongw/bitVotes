import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' render={props=><Home {...props}/>}/>
          <Route exact path='/create' render={props=><Create {...props}/>}/>
          <Route render={props=><Home {...props}/>}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
