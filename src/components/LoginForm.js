import React from 'react';

const LoginForm = (props) => {

    const onSubmit = () => props.onError( true );

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    id="email" 
                    className="email" 
                    name="email" 
                    placeholder="Email"
                />
                <br />

                <input 
                    type="password" 
                    id="password" 
                    className="password" 
                    name="password" 
                    placeholder="Password"
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