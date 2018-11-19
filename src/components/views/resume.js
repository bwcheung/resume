import React, { Component } from "react";
import { browserHistory } from 'react-router';

export default class Resume extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
    		<div id="page" class="container">
    		<div id="navigation">
    			<ul>
    	  			<li><a href="#home">Home</a></li>
    	  			<li><a href="#news">News</a></li>
    	  			<li><a href="#contact">Contact</a></li>
    	 			<li><a href="#about">About</a></li>
    			</ul>
    		</div>
    		<div id="header">
    			<div id="logo">
    				
    				<h1><a href="#">Brandon Cheung</a></h1>
    				<span> Important Points </span>
    			</div>
    			 
    			<ul>
    	  			<li>Diligent</li>
    	  			<li>Fast Learner</li>
    	  			<li>Genuine Interest in Computer Science</li>
    	 			<li>Work Well With Others</li>
    			</ul>
    		</div>
    		<div id="main">
    			<div id="banner">
    				<img src="./pics/profile2.JPG" alt="" class="" />
    			</div>
    			<div id="welcome">
    				<div class="title">
    					<h2>About Me</h2>
    				</div>
    				<p>Hi! My Name is Brandon Cheung. Born and raised in Edmonton, Alberta; I am a 22-year old student currently enrolled in my 5th year of computer science at the University of Alberta. </p>
    			</div>
    			<div id="featured">
    				<div class="title">
    					<h2>My Professional History</h2>
    				</div>
    				<p> North Edmonton Cineplex Odeon (2009-2010) -  worked as a cashier, a ticket user and handled with food
    				    Linton Drugs (summer 2012) - assistant to the pharmacists
    				    Taste of Edmonton (summer 2014) - Worked at a food stall for the restaurant "The Lingan"
    				    Assistant LandScape Surveyor (summer 2014) - Helped survey the landscape of houses</p>
    			</div>
    			<div id="featured">
    				<div class="title">
    					<h2>For Potential Employers</h2>
    				</div>
    				<p> Although I have yet to get any work experience in a computer related field, I have a genuine interest in computer science therefore I am willing to learn and be guided to do any work necessary. I am a fast learner, diligent, and I can work well with others.</p>
    			</div>
    			<div id="copyright">
    				<span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</span>
    			</div>
    		</div>
    	</div>    
    );
  }
}
