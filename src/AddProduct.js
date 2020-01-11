/* import React from react to make custome component like MainContent  */
import React,{ Component,Fragment } from "react";

/* import Footer component*/
import Footer from "./Footer";

/* This is Class Component*/
class AddProduct extends Component{
    render(){
        return(
            <Fragment>
            {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
                {/*http://localhost/MyProjects/PhpProjects/ajaxLoginRegisterWithShowHidePassViewProfile/model/saveRegistration.php */}
                {/*Footer Section */}
                <div className="container">
                <div className="row">
                    {/* Content Section (Left Secton)*/}
                    <div className="col-lg-12">
                        <section className="mb-4">
                            <h2 className="h1-responsive font-weight-bold text-center my-4">Product</h2>
                            <p className="text-center w-responsive mx-auto mb-5">Add Product Here</p>
                            <div className="row">
                                <div className="col-md-9 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                        <div className="row">
                                            <div className="col-md-6">
                                            <div className="md-form mb-0">
                                                <input type="text" id="name" name="name" className="form-control"/>
                                                <label for="name" className="">Product name</label>
                                            </div>
                                        </div>
                                           
                                        </div>
                                    </form>
                                    <div className="text-center text-md-left">
                                    <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                                    </div>
                                    <div className="status"></div>
                                </div>
                            </div>
                        </section>                    
                    </div>
                </div>
            </div>
                
            </Fragment>);
    }
}
//Export Footer Custom Component so that other component import it.
export default AddProduct;

