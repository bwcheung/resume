import React, { Component } from "react";
import { browserHistory, Link } from 'react-router';

export default class Resume extends Component {
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
    			<p>    • Used QuickBooks Pro to document financial transactions and manage accounts.<br/>
    		    • Verifying the accuracy of invoices and other accounting documents or records.<br/>
    		    • Ensured all payables procedures are executed in accordance to company policies and procedures.<br/>
    		    • Assisted with delivery of fragile merchandise. </p>
    		</div>
    		
    		<div id="featured">
    			<div className="title">
    				<h2>Oasis Engineering</h2>
    				<span> Engineer Assistant | July - August 2015 </span>
    			</div>
    			<p>     • Assisted the Engineer in property survey for houses across Edmonton.<br/>
    		    • Safely handled with surveying equipment to make precise measurements to determine property boundaries.<br/>
    		    • Placed level at designated points to assist in determining elevations and laying out stakes.<br/>
    		    • Also interacted with customers whenever necessary.</p>
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
    		
    		<div id="featured">
				<div className="title">
					<h2>Linton Drugs</h2>
					<span> Pharmacy Assistant | July - August 2012 </span>
				</div>
				<p>    • Processed prescriptions, provided inventory management, compliance packages, and assisted in other daily duties in the pharmacy.<br/>
			    • Assisted the pharmacist in filling prescriptions by bringing stock bottles, counting, pouring, restocking, labeling, and pricing prescriptions.<br/>
			    • Placed order for medication online.<br/> 
			    • Ensured patient information was handled confidentially and appropriately.</p>
			</div>
			

    		<div id="featured">
				<div className="title">
					<h2>Cineplex Odeon</h2>
					<span> Attendant |  2009-2010 </span>
				</div>
				<p>    • Maintained high standards of customer service during high-high volume and fast-paced operations.<br/>
			    • Efficiently took customer order as a cashier for concession, opened and closed the stand which included closing out the register.<br/> 
			    • Followed all safety and sanitation policies when handling food and beverage to uphold proper health standards.<br/>
			    • Dealt with various customers and situations at hand using good communication and problem solving skills.<br/> 
			    • Directed and guided customers as a ticket usher and a floor attendant.</p>
			</div>
    	</div>
    	</div>
    );
  }
}
