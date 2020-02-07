import React from "react";
import Axios from "axios";
import { SERVER } from "../utils/server";
import EachMessage from "./EachMessage";
import Sidebar from "./Sidebar";
import {
    Link
} from "react-router-dom";

import io from 'socket.io-client';

import '../styles/message.css';

export default class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            note: undefined,
            active: 0,
            activeUsers: []
        }

        this.socket = io.connect(require('./../utils/server').SERVER.URL, {
            query: {
                userName : localStorage.getItem('userName'),
                userId: localStorage.getItem('userId')
            }
        });
        this.socket.on('broadcast', (data) => {
            this.fetchData();
            this.setState({
                active: data.clients.active,
                activeUsers: data.clients.users
            })
        })

        // socket.emit('newMessage');
    }

    renderList() {

        return (
            <div >
                <div className="messageWrapper">
                    <div className="boxWrapper">
                        <div className="messageHeader">
                            <h2>General</h2>
                            <button onClick={this.fetchData}>
                                <img src="./images/Paomedia-Small-N-Flat-Sign-sync.ico" alt="Refresh"></img>
                            </button>
                            <p>
                                {this.state.active + " Online User"}
                            </p>
                        </div>
                        <div className="messageScroller" id="messageScroller">

                            <div style={{ textAlign: "center", padding: "10em 0em 5em 0em", borderBottom: "1px solid grey", background: "url('./images/1.webp') no-repeat" }}>
                                This is start of the conversation
                            </div>
{

                                // console.log(this.state.data)
}
                            {
                                Array.isArray(this.state.data) ? (
                                    this.state.data.map((msg) => {
                                        return (<EachMessage key={msg.id} message={msg} fetchData={this.fetchData} />);
                                    })
                                )
                                : (
                                    <div style={{width:'100%', margin:'2em auto', textAlign:'center'}}>
                                        No Messages
                                    </div>
                                )
                            }
                            {
                                this.state.note ? this.state.note : ""
                            }
                        </div>
                        <div className="messageBase">
                            <form method="POST" onSubmit={this.submitHandler} encType="multipart/form-data">
                                <input type="text" name="message" placeholder="Type message..." />
                                {/* <input type="file" name="image" /> */}
                                <button type="submit">
                                    <img src="./images/paper-planes-3128885_960_720.png" alt="Send" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <Sidebar activeUsers={this.state.activeUsers}/>
            </div>
        );
    }

    submitHandler = e => {
        e.preventDefault();

        Axios.post(SERVER.URL + "/message/send", { senderId: 6, text: e.target.message.value }, {
            headers: {
                'token': localStorage.getItem('token') || ''
            }
        })
            .then(res => {
                this.fetchData();
                // socket.emit
            })
            .catch(res => {
                this.setState({
                    data: [...this.state.data, { id: 0, time: "", text: JSON.stringify(res.message), senderName: "Message Failed to Send" }],
                    note: localStorage.getItem('token') ? undefined : (
                        <div style={{ margin: "1em auto", maxWidth: "7.5em" }}>
                            <Link to="/signin">
                                <div className="btn">
                                    Signin
                                </div>
                            </Link>
                        </div>
                    )
                })
            })

        e.target.message.value = "";
    }


    render() {
        return (
            <React.Fragment>
                {this.renderList()}
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        Axios.get(SERVER.URL + "/message", {
            headers: { 'token': localStorage.getItem('token') || '' }
        })
            .then(res => {
                this.setState({
                    data: res.data.data
                })
            })
            .catch(res => {
                this.setState({
                    data: []
                })
            })
    }



    componentDidUpdate() {
        const messageScroller = document.getElementById('messageScroller');
        messageScroller.scrollTop = messageScroller.scrollHeight;
    }

    componentWillUnmount(){
        this.socket.disconnect();
    }

}