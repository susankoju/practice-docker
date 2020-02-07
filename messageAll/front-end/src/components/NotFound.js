import React from 'react';
import {
    Link
} from "react-router-dom";

export default function NotFound(){
    return (
        <div style={{textAlign:'center', padding:'20%'}}>
            <h1>404 Not Found!</h1>
            <p>
                The page you are searching is not found!
            </p>
            <Link to="/home">Go To Home</Link>
        </div>
    )
}