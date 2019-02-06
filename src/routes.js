import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Resume from './components/views/resume';
import About from './components/views/about';
import Contact from './components/views/contact';
import Projects from './components/views/projects';
import Game from './Layout';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={About} /> 
    <Route path='game' component={Game}/>
    <Route path='resume' component={Resume}/>
    <Route path='projects' component={Projects}/>
    <Route path='contact' component={Contact}/>
    <Route path='*' component={About} />
  </Route>
    
);