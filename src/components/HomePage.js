import React, { 
    useEffect,
    useState
} from 'react';
import {  
    Header
} from 'semantic-ui-react';

import AccountPanel from './AccountPanel';
import PreLoginMsg from './PreLoginMsg';
import ContentPanel from './ContentPanel';


const HomePage = (props) => {
    /** State hooks */
    const [userToken, setUserToken] = useState('');

    /** Component mount hook */
    useEffect(() => {        
        const token = sessionStorage.getItem('token');
        if( token && token !== '' ) {
            setUserToken( token );
        }
    }, [userToken]);

    const userLoggedIn = () => ( userToken && userToken !== '' );

    return (
        <div>
            <Header 
                as='h1' 
                content='Recipe App'
                id="recipeAppTitle" 
                className="recipeAppTitle" 
                name="recipeAppTitle"
            />
            <AccountPanel
                id="accountPanel" 
                className="accountPanel" 
                name="accountPanel"
                setToken={setUserToken}
            />
            { userLoggedIn() ? <ContentPanel /> : <PreLoginMsg /> }
        </div>
    );
}

export default HomePage;