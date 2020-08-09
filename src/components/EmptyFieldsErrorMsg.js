import React from 'react';
import {
    Message
} from 'semantic-ui-react';

const EmptyFieldsErrorMsg = () => (
    <div>
        <Message 
            negative
            id="emptyFieldsErrorMsg" 
            className="emptyFieldsErrorMsg" 
            name="emptyFieldsErrorMsg"    
        >
            <p>The username and password fields cannot be empty</p>
        </Message>            
    </div>
);

export default EmptyFieldsErrorMsg;