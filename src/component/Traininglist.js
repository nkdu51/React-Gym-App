import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import moment from "moment";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RaisedButton from 'material-ui/RaisedButton';

class Traininglist extends Component {
    state = { trainings: [] };

    componentDidMount() {
        this.loadTrainings();
      }
    // Load customers from REST API
    loadTrainings = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
    .then((response) => response.json()) 
    .then((responseData) => { 
      this.setState({ 
        trainings: responseData.content,
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
            .then(res => this.loadTrainings())
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
    render() {
        return (
            <div>
               <h2>Trainings</h2>
               <ReactTable data={this.state.trainings}
        columns={[
            {
              columns: [
                {
                  Header: "Date",
                  accessor: "date",
                  Cell: ({value}) => (moment(value).format("DD/MM/YYYY"))
                },
                {
                  Header: "Duration",
                  accessor: "duration",
                },
                {
                  Header: "Activity",
                  accessor: "activity",
                },
                {
                  id: 'button',
                  accessor: "links[0].href",
                  Cell: ({value}) => (<RaisedButton onClick={()=>{this.onDelClick(value)}} secondary={true} label="Delete"/>)
                },                              
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

export default Traininglist;