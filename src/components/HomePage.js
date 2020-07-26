import React from 'react';
import AccountPanel from './AccountPanel';

const HomePage = () => {
    return (
        <div>
            <h1 id="recipeAppTitle" className="recipeAppTitle" name="recipeAppTitle">Recipe App</h1>
            <AccountPanel />
            <hr />
            <p id="preLoginString" className="preLoginString" name="preLoginString">Add and see your recipes, along with the ingredients and tags</p>
        </div>
    );
}

export default HomePage;