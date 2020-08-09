import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card
} from 'semantic-ui-react';


const ContentPanel = ( props ) => {
    return (
        <div>
            <Card>
                <Card.Content
                    as={Link}
                    to="/recipes"
                    id="recipesLink" 
                    className="recipesLink" 
                    name="recipesLink"
                >
                    Recipes
                </Card.Content>
            </Card>
            <Card>
                <Card.Content
                    as={Link}
                    to="/tags"
                    id="tagLink" 
                    className="tagsLink" 
                    name="tagsLink"
                >
                    Tags
                </Card.Content>
            </Card>
            <Card>
                <Card.Content
                    as={Link}
                    to="/ingredients"
                    id="ingredientsLink" 
                    className="ingredientsLink" 
                    name="ingredientsLink"
                >
                    Ingredients
                </Card.Content>
            </Card>
        </div>
    );
}

export default ContentPanel;