import React, { Component } from "react";
import { browserHistory, Link } from 'react-router';

export default class Resume extends Component {
  render() {
	  console.log(this.props.title);
    return (
    	<div id="page" className="container">

    	<div id="header">
    		<div id="logo">
    			<img src="https://raw.githubusercontent.com/bwcheung/resume/master/pics/logo.jpg" />
    			<h1><Link to="/">Brandon Cheung</Link></h1>
    			<span> Important Points </span>
    		</div>
    		 
    		<ul>
      	
    		</ul>
    	</div>
    	<div id="main">
    		<div id="banner">
    		<img src="https://raw.githubusercontent.com/bwcheung/resume/master/pics/281769.jpg" />
    		</div>
    		<div id="welcome">
    			<p>bwcheung@gmail.com</p>
    		</div>
    		
    		<div id="featured">
    			<div id="banner">
    			<img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" />
    			</div>
    			<p><a href="https://github.com/bwcheung"target="_blank" rel="noopener noreferrer">https://github.com/bwcheung</a></p>
    		</div>
    		
    		<div id="featured">
    			<div id="banner">
    			<img src="https://raw.githubusercontent.com/bwcheung/resume/master/pics/Logo-Black-101px-R.png" />
    			</div>
    			<p><a href="https://linkedin.com/in/bwcheung/"target="_blank" rel="noopener noreferrer">https://linkedin.com/in/bwcheung</a> </p>
    		</div>
    	
    		<div id="copyright">
    			<span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</span>
    		</div>
    	</div>
    	</div>
    );
  }
}