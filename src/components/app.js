import React, { Component } from "react";
import { Link } from 'react-router';



export default class App extends Component {
	
	constructor() {
		super();
		this.width = window.innerWidth;
		this.height= window.innderHeight;
	}
	
	componentDidMount() {
		window.addEventListener('resize',  this.handleResize.bind(this, false));
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}
	
	handleResize(value, e){
		this.width = window.innerWidth;
		this.height= window.innderHeight;
		document.getElementById('page').style.height = window.innerHeight + 'px';
		console.log(window.innerHeight);
	 }
	
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