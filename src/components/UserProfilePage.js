import React, { 
    useState, 
    useEffect,
} from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { API_URL } from '../utils/ServerUtils';


const API_GET_USERPROFILE_URL = `${API_URL}/api/user/me`;

const UserProfilePage = ( props ) => {
    const [userProfile, setUserProfile] = useState( {} );

    useEffect(() => {
        let mounted = true;
        let token = sessionStorage.getItem('token');
        if( token && token !== '' ) {
            getUserData( token )
                .then( data => {
                    if( mounted ) {
                        // console.log( data );
                        setUserProfile( data );
                    }                    
                });
        }

        return (() => { 
            mounted = false;
        });
    }, );

    async function getUserData( userToken ) {
        const headerObject = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`
        };
        const response = await fetch(API_GET_USERPROFILE_URL, {
            method: 'GET',
            headers: headerObject
        });
        return response.json();
    };

    return (
        <div>
            <h1>User Profile</h1>
            <Link to='/'>Go to Home Page</Link>
            <Table>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Email</Table.Cell>
                        <Table.Cell>{userProfile.email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Name</Table.Cell>
                        <Table.Cell>{userProfile.name}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>            
        </div>
    );
}

export default UserProfilePage