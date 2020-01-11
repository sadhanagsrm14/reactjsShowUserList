/* import React from react to make custome component like MainContent  */
import React,{ Component,Fragment } from "react";

/* import Footer component*/
import Footer from "./Footer";

/* This is Class Component*/
class EditProduct extends Component{
    render(){
        return(
            <Fragment>
            {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
                
                {/*Footer Section */}
                <span>Edit Product</span>
               
            </Fragment>);
    }
}
//Export Footer Custom Component so that other component import it.
export default EditProduct;

