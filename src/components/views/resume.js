import React, { Component } from "react";
import { browserHistory, Link } from 'react-router';

export default class Resume extends Component {
  render() {
	  console.log(this.props.title);
    return (
    	<div id="page" className="container">
    	<div id="navigation">
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/resume">Resume</Link></li>
  			<li><Link to="/game">Game</Link></li>
  			<li><Link to="/contact">Contact</Link></li>
		</ul>
		</div>
    	<div id="header">
    		<div id="logo">
    		
    			<h1><Link to="/">Brandon Cheung</Link></h1>
    			<span> Important Points </span>
    		</div>
    		 
    		<ul>
      			<li>JavaScipt <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>Java <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>Python <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
     			<li>Html <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>CSS <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>C <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>SQL <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>C# <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>C++ <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>PHP <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
    		</ul>
    	</div>
    	<div id="main">
    		<div id="banner">
    		
    		</div>
    		<div id="welcome">
    			<div className="title">
    				<h2>King Star Imports</h2>
    				<span> Accountanting Clerk | September 2016 - April 2018  </span>
    			</div>
    			<p>hello</p>
    		</div>
    		
    		<div id="featured">
    			<div className="title">
    				<h2>Oasis Engineering</h2>
    				<span> Engineer Assistant | July - August 2015 </span>
    			</div>
    			<p> North Edmonton Cineplex Odeon (2009-2010) -  worked as a cashier, a ticket user and handled with food
    			    Linton Drugs (summer 2012) - assistant to the pharmacists
    			    Taste of Edmonton (summer 2014) - Worked at a food stall for the restaurant "The Lingan"
    			    Assistant LandScape Surveyor (summer 2014) - Helped survey the landscape of houses</p>
    		</div>
    		
    		<div id="featured">
    			<div className="title">
    				<h2>Taste of Edmonton</h2>
    				<span> Food Attendant for Lignan | July 20 - 29 2014 </span>
    			</div>
    			<p> a</p>
    		</div>
    		
    		<div id="featured">
				<div className="title">
					<h2>Linton Drugs</h2>
					<span> Pharmacy Assistant | July - August 2012 </span>
				</div>
				<p> a</p>
			</div>
			

    		<div id="featured">
				<div className="title">
					<h2>Cineplex Odeon</h2>
					<span> Attendant |  2009-2010 </span>
				</div>
				<p> a</p>
			</div>

			
    		<div id="copyright">
    			<span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</span>
    		</div>
    	</div>
    	</div>
    );
  }
}
