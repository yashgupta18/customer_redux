import React, { Component } from "react";  
import PropTypes from 'prop-types';  
import "./Home.css";  
import { getCustomer, addCustomer, editCustomer, deleteCustomer } from './Redux/action';
import { connect } from 'react-redux';   
import {useSelector, useDispatch} from 'react-redux';
import {auth} from './firebase'

class Home extends Component {  
  constructor(props) {  
    super(props);  
    this.state = { 
      id: "",  
      customer_name: "",  
      customer_email: "",
      product: "",
      quantity: "",  
    }; 
  }

  static propTypes = { 
    customers: PropTypes.array.isRequired,  
    getCustomer: PropTypes.func.isRequired,
    addCustomer: PropTypes.func.isRequired,
    editCustomer: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired   
  };  
  
  componentDidMount() {  
    this.props.getCustomer();  
  }
  
  submitData = () => {  
    if (this.state.customer_name && this.state.customer_email && this.state.product && this.state.quantity && !this.state.id) {  
      const newCustomer = {  
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100), 
        customer_name: this.state.customer_name,  
        customer_email: this.state.customer_email,
        product: this.state.product,
        quantity: this.state.quantity,  
      };  
      this.props.addCustomer(newCustomer);  
    } else if (this.state.customer_name && this.state.customer_email && this.state.product && this.state.quantity && this.state.id) {  
      const updatedDetails = {  
        id: this.state.id,  
        customer_name: this.state.customer_name,  
        customer_email: this.state.customer_email,
        product: this.state.product,
        quantity: this.state.quantity,  
      };  
  
      this.props.editCustomer(updatedDetails); 
      alert('Details Updated'); 
    } else {  
      alert('Enter customer Details.');  
    }  
  
    this.clearData();  
  }  

  editCustomer = (data) => {  
    this.setState({  
      id: data.id,  
      customer_name: data.customer_name,  
      customer_email: data.customer_email, 
      product: data.product,
      quantity: data.quantity
    })  
  }
  
  deleteCustomer = (id) => {  
    this.clearData();  
    if (window.confirm("Are you sure?")) {  
      this.props.deleteCustomer(id);  
    }  
  }  

  handleNameChange = (e) => {  
    this.setState({  
      customer_name: e.target.value  
    });  
  }

  handleEmailChange = (e) => {  
    this.setState({  
      customer_email: e.target.value  
    });  
  }

  handleProductChange = (e) => {  
    this.setState({  
      product: e.target.value  
    });  
  }



  handleQuantityChange = (e) => {  
    this.setState({  
      quantity: e.target.value  
    });  
  }

  handleCheck(e) {
   console.log(e.currentTarget.dataset.id)
}

  clearData = () => {  
    this.setState({  
      id: "",  
      customer_name: "",  
      customer_email: "",
      product: "",
      quantity: "",  
    });  
  } 

  render() {  
    return (  
      <div className="">  
        <header className="App-header">  
          <h1 className="App-title">ORDER PAGE</h1> 
        </header>
        <h4>Welcome {auth.currentUser.displayName}!</h4>
        <h4>Your Email:  {auth.currentUser.email}</h4>
        <div className="rightsection">
          <div className="right">
            {console.log(auth.currentUser)}
            <div className="input-group mb-3 right">
              <span className="input-group-text" id="inputGroup-sizing-default">Customer Name :</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={this.handleNameChange} value={this.state.customer_name}  />
            </div>
            <div className="input-group mb-3 right">
              <span className="input-group-text" id="inputGroup-sizing-default">Customer Email :</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={this.handleEmailChange}  value={this.state.customer_email}  />
            </div>
            <div className="input-group mb-3 right">
              <span className="input-group-text" id="inputGroup-sizing-default">Customer Product :</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={this.handleProductChange}  value={this.state.product}  />
            </div>
            <div className="input-group mb-3 right">
              <span className="input-group-text" id="inputGroup-sizing-default">Customer Quantity :</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={this.handleQuantityChange}  value={this.state.quantity}  />
            </div>
          </div>  
          {this.state.id ? <button className="btn btn-success" onClick={this.submitData}>UPDATE</button> : <button className="btn btn-success" onClick={this.submitData}>CREATE NEW ORDER</button>}   <button className="btn btn-dark" onClick={this.clearData}>CLEAR</button>  
        </div> 
        
        <div className="">
          <h3>Your Orders</h3>
          <div className="bodyList">
          {this.props.customers && this.props.customers.map((data, index) => {  
                  return <tr key={(index + 1)} id="custList">  
                     <td><li className="mytext" data-id={data.id}>{data.customer_name}</li></td>
                     <td><button className="btn btn-warning btn-sm" onClick={() => this.editCustomer(data)}>EDIT</button></td>
                     <td><button className="btn btn-danger btn-sm" onClick={() => this.deleteCustomer(data.id)}>DELETE</button></td>
                  </tr>  
                })} 
            </div> 
        </div>
      </div>  
    );  
  }  
}
const mapStateToProps = (store) => ({  
  customers: store.customers,
});  

export default connect(mapStateToProps, { getCustomer, addCustomer, editCustomer, deleteCustomer })(Home);  
