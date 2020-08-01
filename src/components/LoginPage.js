import React, { useState } from 'react';
import ErrorMsg from './ErrorMsg';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    /** State hooks */
    const [displayErrorMsg, setDisplayErrorMsg] = useState( false );

    /** React history object */
    const history = useHistory();

    /** Event handling methods */
    const onError = ( value ) => setDisplayErrorMsg( value );

    const onLoginSuccess = ( value ) => {
        // console.log( value );
        history.push("/", {
            userToken: value
        });
    }

    return (
        <div>
            <h1 id="loginPageTitle" className="loginPageTitle" name="loginPageTitle">Login Page</h1>
            <hr />
            
            { displayErrorMsg ? <ErrorMsg /> : null }
            <LoginForm onError={onError} onLoginSuccess={onLoginSuccess}/>
        </div>
    );
}

export default LoginPage;