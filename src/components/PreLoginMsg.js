import React from 'react';
import {
    Message
} from 'semantic-ui-react';

const PreLoginMsg = () => (
    <div>
        <Message 
            id="preLoginString" 
            className="preLoginString" 
            name="preLoginString"    
        >
            <Message.Header>Welcome to Recipe App</Message.Header>
            <p 
                
            >Login to add and see your recipes, along with the ingredients and tags</p>
        </Message>        
    </div>
);

export default PreLoginMsg;