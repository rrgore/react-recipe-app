import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { API_URL } from '../utils/ServerUtils';
import IngredientItem from './IngredientItem';


const API_GET_INGREDIENTS_URL = `${API_URL}/api/recipe/ingredients`;

const IngredientsPage = ( props ) => {
    const [ingredientsList, setIngredientsList] = useState( [] );

    const userToken = useContext( UserContext )[0];
    // const location = useLocation();

    useEffect(() => {
        // console.log( location );
        if( userToken !== '' ) {
            getIngredientsData( userToken )
                .then( data => {
                    // console.log( data );
                    setIngredientsList( data );
                });
        }
    }, [userToken]);

    async function getIngredientsData( userToken ) {
        const headerObject = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`
        };
        const response = await fetch(API_GET_INGREDIENTS_URL, {
            method: 'GET',
            headers: headerObject
        });
        return response.json();
    };

    return (
        <div>
            <h1>Ingredients Page</h1>
            {
                ingredientsList.length > 0 ? ingredientsList.map( ingredient => (
                    <IngredientItem ingredientData={ingredient} key={ingredient.id} />
                )) : null
            }
        </div>
    );
}

export default IngredientsPage;