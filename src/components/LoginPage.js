import React, { useState } from 'react';
import EmptyFieldsErrorMsg from './EmptyFieldsErrorMsg';
import ServerConnectionErrorMsg from './ServerConnectionErrorMsg';
import IncorrectCredentialsErrorMsg from './IncorrectCredentialsErrorMsg';
import LoginForm from './LoginForm';


const LoginPage = () => {
    /** State hooks */
    const [displayEmptyFieldsErrorMsg, setDisplayEmptyFieldsErrorMsg] = useState( false );
    const [displayServerConnectionErrorMsg, setDisplayServerConnectionErrorMsg] = useState( false );
    const [displayIncorrectCredentialsErrorMsg, setDisplayIncorrectCredentialsErrorMsg] = useState( false );

    /** Event handling methods */
    const onEmptyFieldsError = ( value ) => setDisplayEmptyFieldsErrorMsg( value );

    const onServerConnectionError = ( value ) => setDisplayServerConnectionErrorMsg( value );

    const onIncorrectCredentialsError = ( value ) => setDisplayIncorrectCredentialsErrorMsg( value );

    return (
        <div>
            <h1 id="loginPageTitle" className="loginPageTitle" name="loginPageTitle">Login Page</h1>
            <hr />
            
            { displayEmptyFieldsErrorMsg ? <EmptyFieldsErrorMsg /> : null }
            { displayServerConnectionErrorMsg ? <ServerConnectionErrorMsg /> : null }
            { displayIncorrectCredentialsErrorMsg ? <IncorrectCredentialsErrorMsg /> : null }

            <LoginForm 
                onEmptyFieldsError={onEmptyFieldsError}
                onServerConnectionError={onServerConnectionError}
                onIncorrectCredentialsError={onIncorrectCredentialsError}
            />
        </div>
    );
}

export default LoginPage;