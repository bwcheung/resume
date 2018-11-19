import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Resume from './components/views/resume';
import Game from './Layout';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Resume} /> 
    <Route path='game' component={Game} />
    <Route path='*' component={Resume} />
  </Route>
);