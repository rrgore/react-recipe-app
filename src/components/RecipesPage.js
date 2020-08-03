import React, { 
    useState, 
    useEffect,
 } from 'react';

import { API_URL } from '../utils/ServerUtils';
import PartialRecipeItem from './PartialRecipeItem';


const API_GET_RECIPES_URL = `${API_URL}/api/recipe/recipes`;

const RecipesPage = ( props ) => {
    const [recipesList, setRecipesList] = useState( [] );

    useEffect(() => {
        let mounted = true;
        let token = sessionStorage.getItem('token');
        if( token && token !== '' ) {
            getRecipesData( token )
                .then( data => {
                    if( mounted ) {
                        setRecipesList( data );
                    }
                });
        }

        return (() => { 
            mounted = false;
        });
    });

    async function getRecipesData( userToken ) {
        const headerObject = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`
        };
        const response = await fetch(API_GET_RECIPES_URL, {
            method: 'GET',
            headers: headerObject
        });
        return response.json();
    };

    return (
        <div>
            <h1>Recipes Page</h1>
            {
                recipesList.length > 0 ? recipesList.map( recipe => (
                    <PartialRecipeItem recipeData={recipe} key={recipe.id} />
                )) : null
            }
        </div>
    );
}

export default RecipesPage;