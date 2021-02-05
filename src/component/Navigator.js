import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navigator extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg  navbar-light bg-light">
                    <Link className="navbar-brand" to ="/"></Link>
                    <button 
                        className="navbar-toggler navbar-toggler-right" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Togglenavigation"
                    >
                        <span className="navbar-toggler-icon"></ span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/traininglist">Training</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/customerlist">Customer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/calendar">Calendar</Link>
                                </li>
                            </ul >
                        </div>
                </nav>

            </div>
        );
    }
}

export default Navigator;