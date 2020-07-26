import React, { useState } from 'react';

const API_TOKEN_URL = 'http://192.168.0.101:8000/api/user/token/';

const LoginForm = (props) => {
    const [email, setEmail] = useState( '' );
    const [password, setPassword] = useState( '' );

    const handleSubmit = (e) => {
        e.preventDefault();

        if( email !== '' && password !== '' ) {
            // Fetch token
            const init = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    'email': email,
                    'password': password
                }
            }
            fetch( API_TOKEN_URL, init )
                .then( data => {
                    console.log( data.json() );
                }, errors => {
                    console.log( errors );
                });
        } else {
            return props.onError( true );
        }        
    }

    const handleClick = () => props.onError( false );

    const handleEmailChange = ( event ) => setEmail( event.target.value );

    const handlePasswordChange = ( event ) => setPassword( event.target.value );

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="email" 
                    className="email" 
                    name="email" 
                    placeholder="Email"
                    onClick={handleClick}
                    onChange={handleEmailChange}
                />
                <br />

                <input 
                    type="password" 
                    id="password" 
                    className="password" 
                    name="password" 
                    placeholder="Password"
                    onClick={handleClick}
                    onChange={handlePasswordChange}
                />
                <br />

                <input 
                    type="submit" 
                    id="login" 
                    className="login" 
                    name="login" 
                    value="Login"
                />
            </form>
        </div>        
    );
}

export default LoginForm;