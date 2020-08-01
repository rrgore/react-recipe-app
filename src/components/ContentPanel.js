import React from 'react';
import { Link } from 'react-router-dom';


const ContentPanel = ( props ) => {
    return (
        <div>
            <h3> This is content panel </h3>
            <Link 
                to="/recipes" 
                id="recipesLink" 
                className="recipesLink" 
                name="recipesLink"
            >Recipes</Link> 
            <br />
            <Link 
                to={{
                    pathname: "/tags",
                    tagsInfo: {
                        userToken: props.userToken
                    }
                }}
                id="tagLink" 
                className="tagsLink" 
                name="tagsLink"
            >Tags</Link> 
            <br />
            <Link 
                to="/ingredients" 
                id="ingredientsLink" 
                className="ingredientsLink" 
                name="ingredientsLink"
            >Ingredients</Link>
        </div>
    );
}

export default ContentPanel;