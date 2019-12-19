import React from 'react';
import { GlobalStyle } from './style.js'
import Header from './common/header';

import Home from './page/home/index.js';
import Detail from 'page/detail/index.js';
import List from 'page/list/index.js';
import { Provider } from 'react-redux';
import store from './store';

import 'antd/dist/antd.css';

import { HashRouter as Router, Route, Redirect,Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <Router>
        <Header />
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/list' exact component={List}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
