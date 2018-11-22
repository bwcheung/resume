import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Resume from './components/views/resume';
import About from './components/views/about';
import Game from './Layout';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={About} /> 
    <Route path='game' component={Game}/>
    <Route path='resume' component={Resume}/>
    <Route path='*' component={About} />
  </Route>
);