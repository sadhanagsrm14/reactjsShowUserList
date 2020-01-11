/* import React from react to make custome component like Sidebar  */
import React,{ Component,Fragment } from "react";

import {Link} from 'react-router-dom';
/* This is Class Component*/
class Sidebar extends Component{
    render(){
        return(
          <Fragment>
          {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
        
            {/* NaveBar Section  */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div className="container">
                <a className="navbar-brand" href="">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home
                        <span className="sr-only"></span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="product">Product</Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Crud Operation
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <Link className="dropdown-item" to="AddProduct">Add Product</Link>
                          <Link className="dropdown-item" to="EditProduct">Edit Product</Link>
                          <Link className="dropdown-item" to="ListProduct">List Product</Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
              
          </Fragment>);
    }
}
//Export Sidebar Custom Component so that other component import it.
export default Sidebar;