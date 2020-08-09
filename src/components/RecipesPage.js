import React, { 
    useState, 
    useEffect,
 } from 'react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { API_URL } from '../utils/ServerUtils';


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
            <Link to='/'>Go to Home Page</Link>
            <List animated>
                {
                    recipesList.length > 0 ? recipesList.map( recipe => (
                        <List.Item key={recipe.id}>
                            <List.Icon name='food' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header>{recipe.title}</List.Header>
                                <List.Description as={Link} to={{ pathname: `/recipe/${recipe.id}` }}>See Full Recipe</List.Description>
                            </List.Content>
                        </List.Item>
                    )): null
                }
            </List>
        </div>
    );
}

export default RecipesPage;