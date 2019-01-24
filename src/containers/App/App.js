import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'globalRedux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import GroupPage from 'pages/GroupPage/GroupPage';
import GroupSearch from 'pages/GroupSearch/GroupSearch'
import UserPage from 'pages/UserPage/UserPage';
import SignIn from 'pages/SignIn/SignIn'
import SignUp from 'pages/SignUp/SignUp'
import './App.scss';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/group" component={GroupPage} />
          <Route exact path="/search" component={GroupSearch} />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
