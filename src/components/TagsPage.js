import React, { 
    useState, 
    useEffect,
 } from 'react';

import { API_URL } from '../utils/ServerUtils';
import TagItem from './TagItem';


const API_GET_TAGS_URL = `${API_URL}/api/recipe/tags`;

const TagsPage = ( props ) => {
    const [tagsList, setTagsList] = useState( [] );

    useEffect(() => {
        let mounted = true;
        let token = sessionStorage.getItem('token');
        if( token && token !== '' ) {
            getTagsData( token )
                .then( data => {
                    if( mounted ) {
                        setTagsList( data );
                    }                    
                });
        }

        return (() => { 
            mounted = false;
        });
    });

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