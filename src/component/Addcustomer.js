import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Addcustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''}
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const newCustomer = {firstname: this.state.firstname, lastname: this.state.lastname, streetaddress: this.state.streetaddress, postcode: this.state.postcode, city: this.state.city, email: this.state.email, phone: this.state.phone}
        this.props.addCustomer(newCustomer);
        this.simpleDialog.hide();
    }

    render() {
        return (
            <div>
               <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Add customer">
                <form>
                    <div>
                        <TextField hintText="First name" name="firstname" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <TextField hintText="Last name" name="lastname" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <TextField hintText="Street address" name="streetaddress" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <TextField hintText="Postcode" name="postcode" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <TextField hintText="City" name="city" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <TextField hintText="Email" name="email" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <TextField hintText="Phone number" name="phone" onChange={this.handleChange}/>
                    </div>
                    <RaisedButton onClick={this.handleSubmit} primary={true} label="Submit"/>
                    
                </form>
                </SkyLight> 
                <RaisedButton onClick={()=>{this.simpleDialog.show()}} primary={true} label="Add customer"/>
            </div>
        );
    }
}

export default Addcustomer;