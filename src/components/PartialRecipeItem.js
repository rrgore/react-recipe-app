import React from 'react';
import { Link } from 'react-router-dom';


const PartialRecipeItem = ( props ) => {
    return (
        <div>
            <p>Recipe title: {props.recipeData.title}</p>
            <Link 
                to={{
                    pathname: "/"
                }}
                id="completeRecipeLink" 
                className="completeRecipeLink" 
                name="completeRecipeLink"
            >See Full Recipe</Link>
        </div>
    );
}

export default PartialRecipeItem;