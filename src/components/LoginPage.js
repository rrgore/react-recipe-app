import React, { useState } from 'react';
import ErrorMsg from './ErrorMsg';
import LoginForm from './LoginForm';

const LoginPage = () => {
    const [displayErrorMsg, setDisplayErrorMsg] = useState( false );

    const onError = ( value ) => setDisplayErrorMsg( value );

    return (
        <div>
            <h1 id="loginPageTitle" className="loginPageTitle" name="loginPageTitle">Login Page</h1>
            <hr />
            
            { displayErrorMsg ? <ErrorMsg /> : null }
            <LoginForm onError={onError}/>                
        </div>
    );
}

export default LoginPage;