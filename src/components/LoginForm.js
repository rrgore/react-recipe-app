import React, { 
    useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import {
    Form
} from 'semantic-ui-react';

import { API_URL } from '../utils/ServerUtils';


const API_TOKEN_URL = `${API_URL}/api/user/token/`;

const LoginForm = (props) => {
    const [email, setEmail] = useState( '' );
    const [password, setPassword] = useState( '' );
    // const [userToken, setUserToken] = useContext( UserContext );
    const history = useHistory();

    // let userToken = '';

    const handleSubmit = (e) => {
        e.preventDefault();

        if( email !== '' && password !== '' ) {
            postLoginData({
                'email': email,
                'password': password
            }).then( data => {
                // console.log( data );
                if( data ) {
                    if( data.token && data.token !== '' ) {
                        sessionStorage.setItem( 'token', data.token );
                        history.push("/");
                    } else if ( data.non_field_errors ) {
                        props.onIncorrectCredentialsError( true );
                    }
                } else {
                    props.onServerConnectionError( true );
                }
            }, error => {
                if( error ) {
                    console.log( error );
                    props.onServerConnectionError( true );
                }
            });
        } else {
            props.onEmptyFieldsError( true );
        }        
    }

    const handleClick = () => {
        props.onEmptyFieldsError( false );
        props.onServerConnectionError( false );
        props.onIncorrectCredentialsError( false );
    }

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
            <Form onSubmit={handleSubmit}>
                <Form.Input 
                    type="text" 
                    id="email" 
                    className="email" 
                    name="email" 
                    label="Email"
                    placeholder="Email"
                    onClick={handleClick}
                    onChange={handleEmailChange}
                />
                <Form.Input 
                    type="password" 
                    id="password" 
                    className="password" 
                    name="password" 
                    label="Password"
                    placeholder="Password"
                    onClick={handleClick}
                    onChange={handlePasswordChange}
                />
                <Form.Button 
                    primary
                    type="submit" 
                    id="login" 
                    className="login" 
                    name="login" 
                    value="Login"
                >Login</Form.Button>
            </Form>
        </div>        
    );
}

export default LoginForm;