/* import React from react to make custome component like ProductList  */
import React,{ Component,Fragment } from "react";

/* This is Class Component*/
class ProductList extends Component{
    render(props){
        return(
        <Fragment>
        {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
            
            {/* Single Product Card Section*/}
            <div className="card mt-4">
                <img className="card-img-top img-fluid" src={process.env.PUBLIC_URL +"/images/"+this.props.prodImage} alt=""/>
                <div className="card-body">
                    <h3 className="card-title">{this.props.prodName}</h3>
                    <h4>{this.props.price}</h4>
                    <p className="card-text">{this.props.description}</p>
                    <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                    4.0 stars
                </div>
            </div>

        </Fragment>);
    }
}

//Export ProductList Custom Component so that other component import it.
export default ProductList;