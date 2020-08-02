import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../utils/UserContext';


const AccountPanel = (props) => {
    const [userToken, setUserToken] = useContext( UserContext );

    const handleLogout = () => {
        setUserToken('');
    }

    return (
        <div>
            { userToken === '' ? 
                <div>
                    <Link 
                        to="/signUp" 
                        id="signUp" 
                        className="signUp" 
                        name="signUp"
                    >Sign Up</Link> 
                    <br />
                    <Link 
                        to="/login" 
                        id="login" 
                        className="login" 
                        name="login"
                    >Login</Link>
                </div>
                 :
                <div>
                    <Link 
                        to="/profile" 
                        id="profile" 
                        className="profile" 
                        name="profile"
                    >User Profile
                    </Link> 
                    <br />
                    <Link 
                        to="/" 
                        id="logout" 
                        className="logout" 
                        name="logout"
                        onClick={handleLogout}
                    >Logout</Link>
                </div>                
            }
        </div>
    );
}

export default AccountPanel;