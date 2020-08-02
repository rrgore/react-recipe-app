import React, { 
    useState,
    useContext
} from 'react';

import { API_URL } from '../utils/ServerUtils';
import UserContext from '../utils/UserContext';


const API_TOKEN_URL = `${API_URL}/api/user/token/`;

const LoginForm = (props) => {
    const [email, setEmail] = useState( '' );
    const [password, setPassword] = useState( '' );

    const [userToken, setUserToken] = useContext( UserContext );

    const handleSubmit = (e) => {
        e.preventDefault();

        if( email !== '' && password !== '' ) {
            postLoginData({
                'email': email,
                'password': password
            }).then( data => {
                if( data && data.token && data.token !== '' ) {
                    setUserToken( data.token );
                    history.push("/");
                }
            });
        } else {
            return props.onError( true );
        }        
    }

    const handleClick = () => props.onError( false );

    const handleEmailChange = ( event ) => setEmail( event.target.value );

    const handlePasswordChange = ( event ) => setPassword( event.target.value );

    async function postLoginData( data = {} ) {
        const response = await fetch(API_TOKEN_URL, {
            method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        });
        return response.json();
    };

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