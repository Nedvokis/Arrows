import React from 'react';
import { Provider } from 'react-redux';
import createStore from './globalRedux';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from 'pages/Home/Home';
import GroupPage from 'pages/GroupPage/GroupPage';
import UserPage from 'pages/UserPage/UserPage';
import SignIn from 'pages/SignIn/SignIn'
import './App.scss';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/group" component={GroupPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
