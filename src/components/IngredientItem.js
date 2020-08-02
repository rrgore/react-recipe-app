import React from 'react';

const IngredientItem = ( props ) => {
    return (
        <div>
            <p>Ingredient name: {props.ingredientData.name}</p>
        </div>
    );
}

export default IngredientItem;