import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountPanel = (props) => {

    const handleLogout = () => {
        return props.setUserToken('');
    }

    return (
        <div>
            { !props.userLoggedIn ? 
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