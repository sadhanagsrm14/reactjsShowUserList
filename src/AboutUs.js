/* import React from react to make custome component like MainContent  */
import React,{ Component,Fragment } from "react";

/* import Footer component*/
import Footer from "./Footer";

import "./AboutUsStyle.css";

/* This is Class Component*/
class AboutUs extends Component{
    render(){
        return(
            <Fragment>
            {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
            <div className="container">
                <div className="row">
                    
                    
                    {/* Content Section (Left Secton)*/}
                    <div className="col-lg-12">
                        
                    <div className="about-section AboutUsStyle paddingTB60 gray-bg">
                <div className="container">
                    <div className="row">
						<div className="col-md-7 col-sm-6">
							<div className="about-title clearfix">
								<h1>About <span>Appmom</span></h1>
								<h3>Lorem ipsum dolor sit amet </h3>
								<p className="about-paddingB">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare </p>
								<p>sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien</p>
						<div className="about-icons"> 
                            <ul >
                                <li><a href="https://www.facebook.com/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a> </li>
                                <li><a href="https://twitter.com/"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a> </li>
                                <li> <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a> </li>
                                <li> <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a> </li>
                            </ul>       
               
               
	           
	           
	        
	        </div>
							</div>
						</div>
						<div className="col-md-5 col-sm-6">
							<div className="about-img">
								<img src="https://devitems.com/preview/appmom/img/mobile/2.png" alt=""/>
							</div>
						</div>	
                    </div>
                </div>
            </div>
                    
                        
                    </div>
                </div>
            </div>
            
            </Fragment>);
    }
}
//Export Footer Custom Component so that other component import it.
export default AboutUs;

