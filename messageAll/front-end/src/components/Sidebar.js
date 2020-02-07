import React from "react";
import {
    Link
} from "react-router-dom";
import ActiveUser from './ActiveUser';

export default class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            activeUsers: props.activeUsers
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.activeUsers !== prevState.activeUsers){
            return ({activeUsers: nextProps.activeUsers});
        }
        return null;
    }

    render(){
        return (
            <div className="sidebar">
                <div className="profile" id="sideProfile">
                    
                    <div className="home">
                        <Link to="/"><img src="./images/flat-blue-home-icon-4.png" alt="Home" /></Link>
                    </div>
                    <div className="logout">
                        <Link to="/logout"><img src="./images/276363.png" alt="Logout" /></Link>
                    </div>
                    <Link to={"/user/" + localStorage.getItem('userId')} >
                        <img src="./images/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg" alt="profile" />
                        <h2>{localStorage.getItem('userName')}</h2>
                    </Link>
                    {
                        localStorage.getItem('token')? "" : (

                            <Link to="/signin">
                                <div className="btn">
                                    Signin
                                </div>
                            </Link>
                        )
                    }
                </div>
                
                <div className="users" style={{ maxHeight: document.body.clientHeight - (document.getElementById('sideProfile') ? document.getElementById('sideProfile').offsetHeight : 0) }}>
                    <h4 style={{borderBottom: '1px solid grey', padding:'1em', textAlign:'center'}}>{"Online Users("+this.state.activeUsers.length+")"}</h4>
                    <ul style={{ listStyleType: 'none', paddingLeft: '1.25em'}}>
                        {
                            // console.log(typeof this.state.activeUsers, this.state.activeUsers)
                            this.state.activeUsers.map( user => {
                                return <li key={user.socketId}> 
                                    <Link to={"/user/"+user.userId}>
                                        <ActiveUser user={user} />
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount(){

    }
}