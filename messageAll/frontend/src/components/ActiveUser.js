import React from 'react'

export default class ActiveUser extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user : props.user
        }
    }
    render(){
        return (
            <div style={{marginBottom:"0.25em", position:"relative", height:"100%"}}>
                <img style={{width:"20%", borderRadius:"50%", display:"inline-block", border:"1px solid grey"}} src="./images/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg" alt="User"/>
                <div style={{ display: "inline-block", height:"100%"}}>
                    <p style={{ height: "100%", fontSize: '1.75vw' , marginTop: "0em", position: "absolute", top: '10%', marginBlockStart: "0px", marginBlockEnd: "0px", verticalAlign:"base", display:'inline', padding:'2.5%'}}>
                        {this.state.user.userName}
                    </p>
                    <div style={{ width: "1vw", height: "1vw" , background:"green", borderRadius:"50%", position:"absolute", right:"1em", bottom:"50%" }}></div>
                </div>
            </div>
        )
    }
}