/* import React from react to make custome component like MainContent  */
import React,{ Component,Fragment } from "react";

/* This is Class Component*/
class Sidebar extends Component{
    render(){
        return(
          <Fragment>
          {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
            
            {/*Sidebar Section */}
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
            <a href="" className="list-group-item active">Category 1</a>
            <a href="" className="list-group-item">Category 2</a>
            <a href="" className="list-group-item">Category 3</a>
            </div>  
          
          </Fragment>);
    }
}
//Export Sidebar Custom Component so that other component import it.
export default Sidebar;