import React, { Component } from "react";
import { Link } from 'react-router';



export default class App extends Component {
	
  render() {
    return (
    		
    		<body>
    		<div class="topnav" id="navigation">
    		<ul>
    			<li><Link to="/">Home</Link></li>
    			<li><Link to="/resume">Resume</Link></li>
    			<li><Link to="/projects">Projects</Link></li>
      			<li><Link to="/game">Game</Link></li>
      			<li><Link to="/contact">Contact</Link></li>
	    		<li><a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a></li>
    		</ul>
    		</div>
    		{this.props.children}
    		</body>
    );
  }
}
