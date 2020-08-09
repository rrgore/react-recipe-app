import React from 'react';
import {
    Message
} from 'semantic-ui-react';

const PreLoginMsg = () => (
    <div>
        <Message 
            id="preLoginMsg" 
            className="preLoginMsg" 
            name="preLoginMsg"
        >
            <Message.Header>Welcome to Recipe App</Message.Header>
            <p>Login to add and see your recipes, along with the ingredients and tags</p>
        </Message>        
    </div>
);

export default PreLoginMsg;