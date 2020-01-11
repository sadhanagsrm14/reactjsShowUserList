/* import React from react to make custome component like MainContent  */
import React,{ Component,Fragment } from "react";

/* import Footer component*/
import Footer from "./Footer";

/* This is Class Component*/
class Home extends Component{
    render(){
        return(
            <Fragment>
            {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
            <div className="container">
                <div className="row">
                    
                    
                    {/* Content Section (Left Secton)*/}
                    <div className="col-lg-12">
                        
                        {/* Use MainContent Component */}
                        Home
                    
                    </div>
                </div>
            </div>
            
            </Fragment>);
    }
}
//Export Footer Custom Component so that other component import it.
export default Home;

