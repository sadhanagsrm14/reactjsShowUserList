/* import React from react to make custome component like MainContent  */
import React,{ Component,Fragment } from "react";

/* import Sidebar component*/
import Sidebar from "./Sidebar";

/* import Navebar component*/
import Navebar from "./Navebar";

/* import MainContent component*/
import MainContent from "./MainContent";

/* import Home component*/
import Home from "./Home";


/* import ContactUs component*/
import ContactUs from "./ContactUs";


/* import AboutUs component*/
import AboutUs from "./AboutUs";

/* import Product component*/
import Product from "./Product";


/* import Add Product component*/
import AddProduct from "./AddProduct";


/* import Edit Product component*/
import EditProduct from "./EditProduct";


/* import List Product component*/
import ListProduct from "./ListProduct";

import Footer from "./Footer";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* This is Class Component*/
class App extends Component{
    render(){
        return(
        <Fragment>
        {/* Use fragment to render multiple tags of jsx Notes: To use Fragment we have to import Fragment at top*/}
            
            {/* NaveBar Section,Use Navebar Component */}
            <BrowserRouter>
                <div>
                    <Navebar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={AboutUs} />
                        <Route path="/contact" component={ContactUs} />
                        <Route path="/product" component={Product} />

                        <Route path="/addproduct" component={AddProduct} />
                        <Route path="/editproduct" component={EditProduct} />
                        <Route path="/listproduct" component={ListProduct} />
                    </Switch>
                
                <Footer />
                </div>
            </BrowserRouter>           
        </Fragment>);
    }
}

//Export App Custom Component so that other component import it.
export default App;