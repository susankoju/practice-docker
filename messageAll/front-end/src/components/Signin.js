import React from "react";
import "../styles/form.css";
import {SERVER} from "../utils/server"

import {
    Link
} from "react-router-dom";
import Axios from "axios";

export default class Signin extends React.Component {

    constructor(){
        super();
        this.state = {
            msg: ''
        }
    }

    render(){
        return (
            <React.Fragment>
                <div className="sidenav">
                    <div className="login-main-text">
                        <Link to="/">
                            <h2 style={{color:"white"}}> MessageAll </h2>
                        </Link>
                        <p>Please Login or Register to access.</p>
                    </div>
                </div>
                <div className="signinMain">
                    <form method="POST" onSubmit={this.submitHandler}>
                        <h2>
                            Signin to MessageAll
                        </h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" required className="form-control" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="form-control" placeholder="Enter your password" />
                        </div>
                        <input type="submit" className="btn-primary btn" value="Login" />
                        <Link to="/signup">
                            <input type="reset" className="btn-black " value="Register" />
                        </Link>
                        <div style={{color: "#a33"}}>
                            {this.state.msg ? <label>{this.state.msg}</label> : ''}
                        </div>
                    </form>
                </div>
            </React.Fragment>  
        );
    }

    submitHandler = (e) => {
        e.preventDefault();
        Axios.post(SERVER.URL + "/user/signin", { email: e.target.email.value, password: e.target.password.value} )
            .then(result => {
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('userId', result.data.id);
                localStorage.setItem('userName', result.data.firstName+" "+result.data.lastName);
                this.props.history.push('/message');
            })
            .catch(result => {
                this.setState({
                    msg: "Invalid username or password!",
                });
            })

    }
    
}