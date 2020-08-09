import React from 'react';
import {
    Message
} from 'semantic-ui-react';

const ServerConnectionErrorMsg = () => (
    <div>
        <Message 
            negative
            id="serverConnectionErrorMsg" 
            className="serverConnectionErrorMsg" 
            name="serverConnectionErrorMsg"    
        >
            <p>Cannot connect to the server</p>
        </Message>
    </div>
);

export default ServerConnectionErrorMsg;