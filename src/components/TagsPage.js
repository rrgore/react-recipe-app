import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { API_URL } from '../utils/ServerUtils';


const API_GET_TAGS_URL = `${API_URL}/api/recipe/recipes`;

const TagsPage = ( props ) => {
    const [tagsData, setTagsData] = useState( [] );
    const location = useLocation();

    useEffect(() => {
        // console.log( location );
        if( location.tagsInfo && location.tagsInfo.userToken && location.tagsInfo.userToken!== '' ) {
            const userToken = location.tagsInfo.userToken;
            
        }
    });

    async function postLoginData( headerData = {} ) {
        const response = await fetch(API_GET_TAGS_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    };

    return (
        <div>
            <h1>Tags Page</h1>
        </div>
    );
}

export default TagsPage;