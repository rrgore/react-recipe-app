import React from 'react';
import {
    Message
} from 'semantic-ui-react';

const IncorrectCredentialsErrorMsg = () => (
    <div>
        <Message 
            negative
            id="incorrectCredentialsErrorMsg" 
            className="incorrectCredentialsErrorMsg" 
            name="incorrectCredentialsErrorMsg"    
        >
            <p>Incorrect email or password</p>
        </Message>
    </div>
);

export default IncorrectCredentialsErrorMsg;