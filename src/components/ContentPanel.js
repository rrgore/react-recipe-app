import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    Icon
} from 'semantic-ui-react';


const ContentPanel = ( props ) => {
    return (
        <div>
            <Card>
                <Card.Content>
                    Recipes
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    Tags
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    Ingredients
                </Card.Content>
            </Card>
            <Link 
                to={{
                    pathname: "/recipes",
                    // recipesInfo: {
                    //     userToken: props.userToken
                    // }
                }} 
                id="recipesLink" 
                className="recipesLink" 
                name="recipesLink"
            >Recipes</Link> 
            <br />
            <Link 
                to={{
                    pathname: "/tags",
                    // tagsInfo: {
                    //     userToken: props.userToken
                    // }
                }}
                id="tagLink" 
                className="tagsLink" 
                name="tagsLink"
            >Tags</Link> 
            <br />
            <Link 
                to={{
                    pathname: "/ingredients",
                    // ingredientsInfo: {
                    //     userToken: props.userToken
                    // }
                }} 
                id="ingredientsLink" 
                className="ingredientsLink" 
                name="ingredientsLink"
            >Ingredients</Link>
        </div>
    );
}

export default ContentPanel;