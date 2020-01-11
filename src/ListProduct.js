/* import React from react to make custome component like MainContent  */
import React,{ Component,Fragment } from "react";
/* import Footer component*/
import Footer from "./Footer";
/* This is Class Component*/
class ListProduct extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            dogs: []
        }
    
    }

    componentDidMount() {
        fetch('http://painlessways.com/api/model/userList.php')
            .then(response => response.json())
            .then((dogs) =>{ 
                this.setState({
                        dogs: dogs})
                },
                (error) => {
                this.setState({ error });
                })
            .catch(error => console.log('Error:', error));
    }
    
    render() {
        const { error, dogs} = this.state;
        if(error) {
          return (
            <div>Error: {error.message}</div>
          )
        } else {
            return(
            <div>
              <h2>User List</h2>
              <table>
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {dogs.map(dogs => (
                    <tr key={dogs.id}>
                      <td>{dogs.id}</td>
                      <td>{dogs.name}</td>
                      <td>{dogs.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            )
        }
    }
}
    
//Export Footer Custom Component so that other component import it.
export default ListProduct;

