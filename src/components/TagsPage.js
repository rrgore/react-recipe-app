import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { API_URL } from '../utils/ServerUtils';
import TagItem from './TagItem';
import UserContext from '../utils/UserContext';


const API_GET_TAGS_URL = `${API_URL}/api/recipe/tags`;

const TagsPage = ( props ) => {
    const [tagsList, setTagsList] = useState( [] );

    const userToken = useContext( UserContext )[0];
    // const location = useLocation();

    useEffect(() => {
        // console.log( location );
        if( userToken !== '' ) {
            getTagsData( userToken )
                .then( data => {
                    // console.log( data );
                    setTagsList( data );
                });
        }
    }, [userToken]);

    async function getTagsData( userToken ) {
        const headerObject = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`
        };
        const response = await fetch(API_GET_TAGS_URL, {
            method: 'GET',
            headers: headerObject
        });
        return response.json();
    };

    return (
        <div>
            <h1>Tags Page</h1>
            {
                tagsList.length > 0 ? tagsList.map( tag => (
                    <TagItem tagData={tag} key={tag.id} />
                )) : null
            }
        </div>
    );
}

export default TagsPage;