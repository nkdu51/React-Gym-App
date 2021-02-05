import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RaisedButton from 'material-ui/RaisedButton';
import Addcustomer from './Addcustomer';
import AddTrainingtoCustomer from './AddTrainingtoCustomer';
class Customerlist extends Component {
    state = { customers: [] };

    componentDidMount() {
        this.loadCustomers();
      }
    // Load customers from REST API
  loadCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then((response) => response.json()) 
    .then((responseData) => { 
      this.setState({ 
        customers: responseData.content,
      }); 
    })   
  }

    // Delete customer
    onDelClick = (idLink) => {
        confirmAlert({
            title: 'Delete confirmation',
            message: 'Are you sure?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {fetch(idLink, {method: 'DELETE'})
                .then(res => this.loadCustomers())
                .catch(err => console.error(err))
                toast.success("Delete succeed!", {
                    position: toast.POSITION.BOTTOM_LEFT
                  });
              }  
            },
              {
                label: 'No',
                onClick: () => alert('Click OK to continue')
              }
            ]
          })
         
      }
    
    // Add customer
    addCustomer = (newCustomer) => {
      console.log(newCustomer);
      fetch('https://customerrest.herokuapp.com/api/customers', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newCustomer)
    })
      .then(res => this.loadCustomers())
      .catch(err => console.error(err))
    }

    // Add training
    addTraining = (newTraining) => {
      console.log(newTraining);
      fetch('https://customerrest.herokuapp.com/api/trainings', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTraining)
    })
      .then(res => console.log(newTraining))
      .catch(err => console.error(err))
    }
      
    render() {
        return (
            <div>
                <h2>Customer</h2>
                <div>
                  <Addcustomer addCustomer={this.addCustomer}/>
                </div>
               <ReactTable data={this.state.customers}
        columns={[
            {
              columns: [
                {
                    Header: "Id",
                    accessor: "links[0].href",
                    show: false
                },
                {
                  Header: "First name",
                  accessor: "firstname"
                },
                {
                  Header: "Last name",
                  accessor: "lastname",
                },
                {
                  Header: "Street address",
                  accessor: "streetaddress",
                },
                {
                  Header: "Postcode",
                  accessor: "postcode",
                },
                {
                  Header: "City",
                  accessor: "city",
                },
                {
                  Header: "Email",
                  accessor: "email",
                },
                {
                    Header: "Phone number",
                    accessor: "phone",
                },
                {
                  id: 'button',
                  accessor: "links[0].href",
                  Cell: ({value}) => (<RaisedButton onClick={()=>{this.onDelClick(value)}} secondary={true} label="Delete"/>)
                },
                {
                  id: 'button',
                  accessor: "links[0].href",
                  Cell: ({value}) => (<AddTrainingtoCustomer customer={value} addTraining={this.addTraining}/>)
                }

                              
              ]
            }
          ]}
          defaultPageSize={10}
          filterable
          className="-striped -highlight" > 
        </ReactTable> 
        <ToastContainer />
            </div>
        );
    }
}

export default Customerlist;