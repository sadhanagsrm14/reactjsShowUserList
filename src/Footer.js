/* import React from react to make custome component like MainContent  */
import React,{ Component,Fragment } from "react";

/* This is Class Component*/
class Footer extends Component{
    render(){
        return(
            <Fragment>
            {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
                
                {/*Footer Section */}
                <footer className="py-5 bg-dark">
                    <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
                    </div>
                </footer>  
            
            </Fragment>);
    }
}
//Export Footer Custom Component so that other component import it.
export default Footer;

