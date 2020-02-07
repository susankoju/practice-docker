import React from "react";
import Axios from "axios";
import { SERVER } from "../utils/server";
import {
    Link
} from "react-router-dom";

import './../styles/user.css';

export default class User extends React.Component {
    constructor() {
        super();
        // console.log(window.location.pathname.slice(23));
        this.state = {
            id: window.location.pathname.slice(23) || localStorage.getItem('userId'),
            profile: 1, //initial check of IF
            err: undefined,
            msg: undefined,
            pwErr: undefined
        }
    }

    componentDidMount() {
        this.fetchProfile();
    }

    fetchProfile = () => {
        // console.log(this.state.id);
        Axios.get(SERVER.URL + "/user/" + this.state.id)
            .then(result => {
                this.setState({
                    profile: result.data.profile
                })
            })
            .catch(result => {
                // console.log(result);
                this.setState({
                    err: result,
                    profile: null
                })
            })
    }

    render() {
        return (
            <div className="user">
                {
                    !localStorage.getItem('token') ? this.props.history.push('/signin') : this.userProfile()
                }
            </div>
        )
    }

    userProfile() {
        return (
            <React.Fragment>
                {
                    !this.state.profile ? this.props.history.push('/NotFound') : (

                        <div className="profile">
                            <div className="info">
                                <div className="home">
                                    <Link to="/"><img src="../images/flat-blue-home-icon-4.png" alt="Home" /></Link>
                                </div>
                                <div className="logout">
                                    <Link to="/logout"><img src="../images/276363.png" alt="Logout" /></Link>
                                </div>

                                <h2 style={{ textShadow: '1px 2px 5px #23a4ee' }}>{this.state.profile.firstName + " " + this.state.profile.lastName}</h2>
                                <div style={{ width: '50%', float: 'right' }}>
                                    <img src="../images/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg" alt="Profile" />
                                </div>
                                <div style={{ width: '50%', display: 'inline-block', textAlign: 'left' }}>
                                    <h3 style={{ textDecoration: 'underline' }}> Information</h3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Name: </td>
                                                <td>{this.state.profile.firstName + " " + this.state.profile.lastName}</td>
                                            </tr>
                                            <tr>
                                                <td>Address: </td>
                                                <td>{this.state.profile.address}</td>
                                            </tr>
                                            <tr>
                                                <td>Contact: </td>
                                                <td>{this.state.profile.contact}</td>
                                            </tr>
                                            <tr>
                                                <td>Email: </td>
                                                <td>{this.state.profile.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Role: </td>
                                                <td>{this.state.profile.role}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {this.state.id === localStorage.getItem('userId') ? this.updateProfile() : this.privateMessage()}
                        </div>
                    )
                }
            </React.Fragment>
        )
    }

    updateProfile() {
        return (
            <div className="base" style={{ textAlign: 'left', maxWidth: '580px', padding: '2em', border: '1px solid grey', borderRadius: '1em', margin: '0px auto' }}>
                <h3 style={{ textAlign: 'center', }}>Change Profile Information</h3>
                <form method="POST" onSubmit={this.submitHandler} onReset={this.resetHandler}>
                    <label htmlFor="firstName">First Name </label>
                    <input required type="text" name="firstName" id="firstName" placeholder="First Name" value={this.state.profile.firstName || ''} onChange={this.changeHandler} />
                    <label htmlFor="lastName">Last Name </label>
                    <input required type="text" name="lastName" id="lastName" placeholder="Last Name" value={this.state.profile.lastName || ''} onChange={this.changeHandler} />
                    <label htmlFor="address">Address </label>
                    <input required type="text" name="address" id="address" placeholder="Address" value={this.state.profile.address || ''} onChange={this.changeHandler} />
                    <label htmlFor="email">Email </label>
                    <input required type="email" name="email" id="email" placeholder="First Name" value={this.state.profile.email || ''} onChange={this.changeHandler} />
                    {this.state.err ? <h4 style={{ color: '#e33', marginTop: '0px' }}>{this.state.err}</h4> : ''}

                    <button type="submit" className='btn'>Save Change</button>
                    <button type="reset" className='btn secondary'>Cancel</button>
                </form>

                <div style={{ height: '2em', borderBottom: '1px solid grey' }}>
                </div>

                <h3 style={{ textAlign: 'center', }}>Change Password</h3>
                <form method="POST" onSubmit={this.passwordChangeHandler} >
                    <label htmlFor="password">New Password </label>
                    <input required type="password" minLength="8" name="password" id="password" placeholder="New Password" />
                    <label htmlFor="password2">Confirm New Password </label>
                    <input required type="password" minLength="8" name="password2" id="password2" placeholder="Confirm New Password" />
                    {this.state.pwErr ? <h4 style={{color:'#e33', marginTop:'0px'}}>{this.state.pwErr}</h4> : ''}
                    <button type="submit" className='btn' style={{ width: '100%' }}>Change Password</button>
                </form>
            </div>
        )
    }

    passwordChangeHandler = e => {
        e.preventDefault();
        // if(e.target.password.value.toString().length < 8)
        if (e.target.password.value === e.target.password2.value) {
            this.setState({
                pwErr: undefined
            });
            Axios.patch(SERVER.URL + '/user/' + this.state.id, {
                headers: { 'token': localStorage.getItem('token') || '' },
                data: e.target.password.value
            })
                .then(result => {
                    document.getElementById('password').value = '';
                    document.getElementById('password2').value = '';
                    this.setState({
                        pwErr: "Password Changed successfully!"
                    });
                })
                .catch((err) => {
                    this.setState({
                        pwErr: "Failed to change password! Try again later... (" + err + ")"
                    });
                })

        } else {
            this.setState({
                pwErr: "Password don't match! Try again..."
            });
        }
    }

    submitHandler = e => {
        e.preventDefault();
        let valid = 1; //TODO

        if (valid) {
            this.setState({
                err: undefined
            });
            Axios.put(SERVER.URL + '/user/' + this.state.id, {
                headers: { 'token': localStorage.getItem('token') || '' },
                data: {
                    firstName: e.target.firstName.value,
                    lastName: e.target.lastName.value,
                    address: e.target.address.value,
                    email: e.target.email.value,
                }
                })
                .then(result => {
                    this.setState({
                        err: "Profile updated successfully! (Re-Login if you changed your email)"
                    });
                })
                .catch((err) => {
                    this.setState({
                        err: "Failed to update profile! Try again later... ("+ err +")"
                    });
                })

        } else {
            this.setState({
                err : "Invalid data provided!"
            });
        }
    }

    resetHandler = e => {
        this.fetchProfile();
    }

    changeHandler = e => {
        let target = e.target.name;
        this.setState({
            profile: {
                ...this.state.profile,
                [target]: e.target.value
            }
        });
    }

    privateMessage() {
        return (
            <div className="base" style={{ textAlign: 'left', maxWidth: '580px', padding: '2em', border: '1px solid grey', borderRadius: '1em', margin: '0px auto' }}>
                Private Message Not Avaliable, find in public message: <Link to='/message'>Click Here!</Link>
            </div>
        )
    }
}