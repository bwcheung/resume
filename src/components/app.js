import React, { Component } from "react";
import { Link } from 'react-router';



export default class App extends Component {
  render() {
    return (
    		
    		<body>
    		<div id="navigation">
    		<ul>
    			<li><Link to="/">Home</Link></li>
    			<li><Link to="/resume">Resume</Link></li>
      			<li><Link to="/game">Game</Link></li>
      			<li><Link to="/contact">Contact</Link></li>
    		</ul>
    		</div>
    		{this.props.children}
    		</body>
    );
  }
}