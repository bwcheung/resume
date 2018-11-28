import React, { Component } from "react";
import { browserHistory, Link } from 'react-router';

export default class Resume extends Component {
  render() {
	  console.log(this.props.title);
    return (
    	<div id="page" className="container">

    	<div id="header">
    		<div id="logo">
    			<img src="https://raw.githubusercontent.com/bwcheung/resume/master/logo.jpg" />
    			<h1><Link to="/">Brandon Cheung</Link></h1>
    			<span> Important Points </span>
    		</div>
    		 
    		<ul>
      	
    		</ul>
    	</div>
    	<div id="main">
    		<div id="banner">
    		<img src="https://image.flaticon.com/icons/svg/281/281769.svg" />
    		</div>
    		<div id="welcome">
    			<div className="title">
    				<h2>EMAIL</h2>
    			</div>
    			<p>bwcheung8@gmail.com</p>
    		</div>
    		
    		<div id="featured">
    			<div className="title">
    				<h2>GITHUB</h2>
    			</div>
    			<p><a href="https://github.com/bwcheung"target="_blank" rel="noopener noreferrer">https://github.com/bwcheung</a></p>
    		</div>
    		
    		<div id="featured">
    			<div className="title">
    				<h2>Taste of Edmonton</h2>
    				<span> Food Attendant for Lignan | July 20 - 29 2014 </span>
    			</div>
    			<p>    • Received orders and served food to customers.<br/>
    		    • Actively interacting with customers by advertising the stall and by recommending dishes.<br/>
    		    • Assisted with daily setup and cleanup.</p>
    		</div>
    	
    		<div id="copyright">
    			<span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</span>
    		</div>
    	</div>
    	</div>
    );
  }
}