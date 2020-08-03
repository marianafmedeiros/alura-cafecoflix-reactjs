import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterVideo from './pages/register/Video';
import CreateCategory from './pages/register/Category';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={RegisterVideo} />
      <Route path="/register/category" component={CreateCategory} />
      <Route component={Home} />
      {' '}
      {/* It is going to be loaded independently of any route. Default component */}

    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
