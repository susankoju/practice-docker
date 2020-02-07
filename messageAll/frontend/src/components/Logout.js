import React from "react";

export default (props) =>{
    localStorage.clear('token');
    return (
        <React.Fragment>
        {    
            props.history.push('/signin')
        }
        </React.Fragment>
    )
}