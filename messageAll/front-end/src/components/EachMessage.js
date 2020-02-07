import React from "react"
import '../styles/eachMessage.css';
import Axios from "axios";
import { SERVER } from "../utils/server";
import {
    Link
} from "react-router-dom";

export default class EachMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message
        }
    }

    render() {
        let classStr = "";
        let sender = false;
        if (this.state.message.senderId == localStorage.getItem('userId')) // one string one number
        {
            classStr = " sender";
            sender = true;
        }
        // else {
        //     console.log(typeof this.state.message.senderId + "  " + typeof localStorage.getItem('userId'));
        // }

        return (
                <React.Fragment>

                {!sender ? (
                    <div className = { classStr + " messageRow row"} >

                            <div className="profile col-md-2">
                                <Link to={"/user/" + this.state.message.senderId} >
                                    <img src="./images/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg" alt="profile" />
                                </Link>
                            </div>
                            <div className="col-md-9 messageBubble">

                                <b>{this.state.message.senderName}</b>
                                <span className="time">{this.state.message.time}</span>
                                <p>
                                    {this.state.message.text}
                                </p>
                            </div>
                    </div>
                ) : (
                        <div className={classStr + " messageRow row"} >


                            <div className="col-md-9 messageBubble">

                                <div className="col-md-1" onClick={this.deleteMessage}>
                                    <div className='cross'>X</div>
                                </div>

                                <b>{this.state.message.senderName}</b>
                                <p>
                                    {this.state.message.text}
                                </p>
                                <span className="time">{this.state.message.time}</span>
                            </div>

                            <div className="profile col-md-2">
                                <Link to={"/user/" + this.state.message.senderId} >
                                    <img src="./images/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg" alt="profile" />
                                </Link>
                            </div>
                        </div>
                )}
                </React.Fragment>
        )
    }

    deleteMessage = e => {
        Axios.delete(SERVER.URL + "/message/delete/" + this.state.message.id, {
            headers: {
                'token': localStorage.getItem('token') || ''
            }
        })
            .then(res => {
                this.props.fetchData();
            })
            .catch(err => {
                console.log(err);
            })
    }
}