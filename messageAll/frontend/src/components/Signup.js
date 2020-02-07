import React from 'react';
import {SERVER} from '../utils/server';
import Axios from 'axios';
import {
    Link
} from "react-router-dom";
export default class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ''
        }
    }
    render(){
        return (
            <div className="container">
                <div className="sidenav">
                    <div className="login-main-text">
                        <Link to="/">
                            <h2 style={{ color: "white" }}> MessageAll </h2>
                        </Link>
                        <p>Please Login or Register to access.</p>
                    </div>
                </div>
                <div className="signupMain">
                    <form method="POST" onSubmit={this.submitHandler}>
                        <h2>
                            Signup for MessageAll
                        </h2>
                        <div className="form-row">
                            <div className="form-group half">
                                <label htmlFor="firstName">First Name</label>
                                <input required type="text" placeholder="Enter First Name" className="form-control" id="firstName" name="firstName"></input>
                            </div>
                            <div className="form-group half">
                                <label htmlFor="lastName">Last Name</label>
                                <input required type="text" placeholder="Enter Last Name" className="form-control" id="lastName" name="lastName"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input required type="email" placeholder="Enter Email" className="form-control" id="email" name="email"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input required type="password" minLength="8" placeholder="Enter password" className="form-control" id="password" name="password"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input required type="text" placeholder="Enter Address" className="form-control" id="address" name="address"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="contact">Contact</label>
                                <input required type="text" placeholder="Enter contact" className="form-control" id="contact" name="contact"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="submit" value="Sign Up" className="btn btn-primary btn-block"></input>
                            </div>
                            <p>
                                Already have an account?
                                <Link to="/signin">
                                    <span style={{ padding: "1em", color:"rgb(28,138,219)"}}>Signin</span>
                                </Link>
                            </p>
                            <div style={{ color: "#a33" }}>
                                {this.state.msg ? <div>{this.state.msg}</div> : ''}
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        )
    }

    submitHandler = (e) => {
        e.preventDefault();
        const data = {
            'firstName': e.target.firstName.value,
            'lastName': e.target.lastName.value,
            'email': e.target.email.value,
            'address': e.target.address.value,
            'contact': e.target.contact.value,
            'password': e.target.password.value
        }  
        Axios.post(SERVER.URL+'/user/signup', data)
            .then(
                res => {
                    this.setState({
                        msg: 
                        <div>
                            <p>Account created successfully! Please login..</p>
                            <div style={{ margin: "1em auto", maxWidth: "7.5em" }}>
                                <Link to="/signin">
                                    <div className="btn">
                                        Signin
                                    </div>
                                </Link>
                            </div>
                        </div>
                    });
                }
            )
            .catch(result => {
                this.setState({
                    msg: "Error occured!",
                });
            })
    }
}