import React, { 
    useState, 
    useEffect, 
    useContext 
} from 'react';
import { useHistory } from 'react-router-dom';

import AccountPanel from './AccountPanel';
import PreLoginMsg from './PreLoginMsg';
import ContentPanel from './ContentPanel';
import UserContext from '../utils/UserContext';


const HomePage = (props) => {
    const userToken = useContext( UserContext )[0];

    /** State hooks */
    // const [userToken, setUserToken] = useState('');

    /** React router history object */
    // const history = useHistory();

    // useEffect(() => {
    //     // console.log( history );
    //     if( history.location.state && history.location.state.userToken ) {
    //         // console.log( history.location.state.userToken );
    //         setUserToken( history.location.state.userToken );
    //     }
    // }, [history.location.state]);

    const userLoggedIn = () => ( userToken && userToken !== '' );

    return (
        <div>
            <h1 id="recipeAppTitle" className="recipeAppTitle" name="recipeAppTitle">Recipe App</h1>
            <AccountPanel />
            <hr />
            { userLoggedIn() ? <ContentPanel /> : <PreLoginMsg /> }
        </div>
    );
}

export default HomePage;