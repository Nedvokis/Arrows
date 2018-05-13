import React from 'react';
import { Provider } from 'react-redux';
import createStore from './globalRedux';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import UserProfile from './pages/UserProfile/UserProfile';
import './App.css';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={UserProfile} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
