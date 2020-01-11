/* import React from react to make custome component like MainContent  */
import React,{ Component,Fragment } from "react";

/* import ProductList Compnent to use in MainContent Component  */
import ProductList from "./ProductList";

/* This is Class Component*/
class MainContent extends Component{
    render(){
        {/*Array of the Product list*/}
        const prodListArray =[
            {
                id:1,
                prodName: "Product First",
                price:'$12.34',
                description:"First Product Description",
                prodImage:'product1.png'
            },
            {
                id:2,
                prodName: "Product Second",
                price:'$22.34',
                description:"Second Product Description",
                prodImage:'product1.png'
            }
        ]
        
        {/* User Map filter(Uses calllback function with three parameters) Like Syntax :map(callback(currentValue, index,array))*/}
        const productArrayList = prodListArray.map((cardd, i) => {
            return <ProductList id={prodListArray[i].id} prodName={prodListArray[i].prodName} description={prodListArray[i].description} price={prodListArray[i].price} prodImage={prodListArray[i].prodImage}/>
        })
        return(         
            <Fragment>
                {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}

                {/* Showing Product List Here From ProductList Component */}
                {productArrayList}
                
                {/*Product Review Section*/}
                <div className="card card-outline-secondary my-4">
                    <div className="card-header">
                        Product Reviews
                    </div>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                        <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                        <hr/>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                        <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                        <hr/>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                        <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                        <hr/>
                        
                        <a href="" className="btn btn-success">Leave a Review</a>
                
                    </div>
                </div>
            </Fragment>
        );
    }
}
//Export MainContent Custom Component so that other component import it.
export default MainContent;