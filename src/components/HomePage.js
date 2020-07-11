import React from 'react';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1 id="title" className="title" name="title">Recipe App</h1>
                <button id="signUp" className="signUp" name="signUp"> Sign Up </button>
                <button id="login" className="login" name="login"> Login </button>
                <hr />
                <p id="preLoginString" className="preLoginString" name="preLoginString"> Add and see your recipes, along with the ingredients and tags </p>
            </div>
        );
    }
}