/* import React from react to make custome component like MainContent  */
import React,{ Component,Fragment } from "react";

/* import Footer component*/
import Footer from "./Footer";

/* import Footer component*/
import Sidebar from "./Sidebar";

/* import Footer component*/
import MainContent from "./MainContent";

/* This is Class Component*/
class Product extends Component{
    render(){
        return(
            <Fragment>
            {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
                {/* Main Container */}
            <div className="container">
                <div className="row">
                    
                    {/* Sidebar Section(Right Section) */}
                    <div className="col-lg-3">
                       
                       {/* Use Sidebar Component */} 
                       <Sidebar /> 
                    
                    </div>
                    
                    {/* Content Section (Left Secton)*/}
                    <div className="col-lg-9">
                        
                        {/* Use MainContent Component */}
                        <MainContent />
                    
                    </div>
                </div>
            </div>
            </Fragment>);
    }
}
//Export Footer Custom Component so that other component import it.
export default Product;

