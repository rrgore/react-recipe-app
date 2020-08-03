import React, { useState } from 'react';
import ErrorMsg from './ErrorMsg';
import LoginForm from './LoginForm';


const LoginPage = () => {
    /** State hooks */
    const [displayErrorMsg, setDisplayErrorMsg] = useState( false );

    /** React history object */
    // const history = useHistory();

    /** Event handling methods */
    const onError = ( value ) => setDisplayErrorMsg( value );

    // const onLoginSuccess = () => {
    //     // console.log( value );
        
    // }

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