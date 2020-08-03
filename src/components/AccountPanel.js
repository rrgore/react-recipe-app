import React, { 
    useEffect,
    useState
 } from 'react';
import { Link } from 'react-router-dom';
import {  
    Menu,
    Button
} from 'semantic-ui-react';


const AccountPanel = (props) => {
    const [userToken, setUserToken] = useState('');

    useEffect(() => {        
        let token = sessionStorage.getItem('token');
        if( token && token !== '' ) {
            setUserToken( token );
        }
    }, [userToken]);

    const handleLogout = () => {
        setUserToken('');
        sessionStorage.clear();
        props.setToken('');
    }

    return (
        <div>
            { userToken === '' ?
                <Menu secondary>
                    <Menu.Item position='right'>
                        <Button 
                            as={Link} 
                            to="/signUp" 
                            id="signUp" 
                            className="signUp" 
                            name="signUp"
                            secondary
                        >Sign Up</Button>
                        <Button 
                            as={Link} 
                            to="/login" 
                            id="login" 
                            className="login" 
                            name="login"
                            primary
                        >Login</Button>
                    </Menu.Item>
                </Menu> 
                
                 :
                <Menu secondary>
                    <Menu.Item position='right'>
                        <Button 
                            as={Link} 
                            to="/profile" 
                            id="profile" 
                            className="profile" 
                            name="profile"
                            secondary
                        >User Profile</Button>
                        <Button 
                            as={Link} 
                            to="/" 
                            id="logout" 
                            className="logout" 
                            name="logout"
                            onClick={handleLogout}
                            primary
                        >Logout</Button>
                    </Menu.Item>
                </Menu> 
                               
            }
        </div>
    );
}

export default AccountPanel;