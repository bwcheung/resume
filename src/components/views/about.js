import React, { Component } from "react";
import { browserHistory, Link } from 'react-router';

export default class About extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
	var unlock = false;
    return (
    	<div id="page" className="container">

    	<div id="header">
    		<div id="logo">
    			<img src="https://raw.githubusercontent.com/bwcheung/resume/master/pics/logo.jpg" />
    			<h1><Link to="/">Brandon Cheung</Link></h1>
    			<span> Important Points </span>
    		</div>
    		 
    		<ul>
      			<li>Diligent</li>
      			<li>Fast Learner</li>
      			<li>Genuine Interest in Computer Science</li>
     			<li>Work Well With Others</li>
     			<li>Motivated</li>
     			
     			<li>Critical Thinking <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>Problem Solving <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
    		</ul>
    	</div>
    	<div id="main">
    		<div id="banner">
    		<img src="https://raw.githubusercontent.com/bwcheung/resume/master/logo.jpg" />
    		</div>
    		<div id="welcome">
    			<div className="title">
    				<h2>Introduction</h2>
    			</div>
    			<p>Hi! My Name is Brandon Cheung. This is a online resume I made that will hopefully help potential employers
    			to see if I will be a good fit for their company. The resume tab shows my professional history and the game
    			tab is my interactive resume.</p>
    		</div>
    		<div id="featured">
    			<div className="title">
    				<h2>About me</h2>
    			</div>
    			<p> Born and raised in Edmonton, Alberta; I am a recent computer science graduate from the University of Alberta.
    			To be honest the computer science field was not my first choice in a career path. It was not until during one 
    			of my software development class, where I had to finish coding a lunar lander game, that I realized coding 
    			can be fun and rewarding. Now I find coding like a open world game, where there are multiple paths to a solution,
    			but it is up to the player to find most efficient path. Therefore, because I am an avid gamer, I find it fun to 
    			work my hardest to find the most efficient solution and because of this interest, I have a long term goal of someday
    			working in game development.</p>
    		</div>
    		<div id="featured">
    			<div className="title">
    				<h2>For Potential Employers</h2>
    			</div>
    			<p> Although I have yet to acquire any work experience in a related computer science field, I have a genuine 
    			interest in computer science therefore I am willing to learn and/or be guided to do any work necessary. 
    			I am a fast learner, diligent, and motivated to learn new technical skills. I can work individually or 
    			with others.</p>
    		</div>
    		<div id="copyright">
    			<span>Design by <a href="http://templated.co" target="_blank" rel="noopener noreferrer">TEMPLATED</a>.</span>
    		</div>
    	</div>
    	</div>
    );
  }
}