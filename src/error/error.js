import React from 'react';
import './error.css';

const Error = () => {
// This page shows up if our user navigates to any other unintended page.
    return (
        <div>
            <h1 className="errorText"> This Page Does Not Exist. Please Go Back</h1>
        </div>
    );
}

export default Error;
