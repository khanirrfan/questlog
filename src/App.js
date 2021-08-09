import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';

import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import Routes from './components/routing/Routes';




function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
        <Switch>
      
            <Route exact path ="/" component = {Login} />
            <Route component = {Routes} />
         
      </Switch>
      </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
