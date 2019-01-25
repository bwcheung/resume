import React, { Component } from "react";
import { browserHistory, Link } from 'react-router';

export default class About extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
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
     			<li>Excellent Customer Service</li>
     			
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
    		<img src="https://raw.githubusercontent.com/bwcheung/resume/master/pics/20181129_224920.jpg" />
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
    			but it is up to the player to find most efficient path. Therefore, because I am an avid gamer, it is in my nature
    			to do whatever possible to find the most efficient solution. This realization became a passion for me and now I
    			have a long term goal of someday developing my own web app, mobile app or game. In order to achieve this goal, 
    			I am motivated and excited to learn and gain new experience.</p>
    		</div>
    		<div id="featured">
    			<div className="title">
    				<h2>For Potential Employers</h2>
    			</div>
    			<p> Although I have yet to acquire any work experience in a related computer science field, I have a genuine 
    			interest in computer science. Therefore I am willing to learn and/or be guided to do any work necessary. 
    			I am a fast learner, diligent, and motivated to learn new technical skills. I have worked in group projects where
    			we would implement the scrum methodology. For example, we would have stand up meeting each week. As a result I am
    			able to communicate efectively. Thank you for taking a look at my online resume and I hope to hear from you soon.</p>
    		</div>
    	</div>
    	</div>
    );
  }
}