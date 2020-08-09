import React, {
    useState,
    useEffect
} from 'react';
import { useParams, Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

import { API_URL } from '../utils/ServerUtils';


const API_GET_FULL_RECIPE_URL = `${API_URL}/api/recipe/recipes`;

const FullRecipePage = ( props ) => {
    let { id } = useParams();
    const [recipeData, setRecipeData] = useState( {} );

    useEffect(() => {
        let mounted = true;
        let token = sessionStorage.getItem('token');
        if( token && token !== '' ) {
            getFullRecipeData( token )
                .then( data => {
                    if( mounted ) {
                        // console.log( data.ingredients );
                        setRecipeData( data );
                        
                    }
                });
        }

        return (() => { 
            mounted = false;
        });
    });

    async function getFullRecipeData( userToken ) {
        const headerObject = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${userToken}`
        };
        const response = await fetch(`${API_GET_FULL_RECIPE_URL}/${id}/`, {
            method: 'GET',
            headers: headerObject
        });
        return response.json();
    };

    return (
        <div>
            <h1>Full recipe for: </h1>
            { recipeData ? <h2>{recipeData.title}</h2> : null }
            <Link to='/'>Go to Home Page</Link>
            { recipeData ?
                <Table definition key={recipeData.id}>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Time (in minutes)</Table.Cell>
                            <Table.Cell>{recipeData.time_minutes}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Price ($)</Table.Cell>
                            <Table.Cell>{recipeData.price}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Link</Table.Cell>
                            <Table.Cell>{recipeData.link}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                : null
            }
        </div>
    );
}

export default FullRecipePage;