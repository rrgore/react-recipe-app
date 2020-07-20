import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1 id="recipeAppTitle" className="recipeAppTitle" name="recipeAppTitle">Recipe App</h1>
            <Link to="/signUp" id="signUp" className="signUp" name="signUp">Sign Up</Link> <br />
            <Link to="/login" id="login" className="login" name="login">Login</Link>
            <hr />
            <p id="preLoginString" className="preLoginString" name="preLoginString">Add and see your recipes, along with the ingredients and tags</p>
        </div>
    );
}

export default HomePage;