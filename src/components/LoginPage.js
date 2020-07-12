import React from 'react';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <h1 id="loginPageTitle" className="loginPageTitle" name="loginPageTitle">Login Page</h1>
                <hr />
                <form>
                    <input type="text" id="email" className="email" name="email" placeholder="Email"></input> <br />
                    <input type="password" id="password" className="password" name="password" placeholder="Password"></input> <br />
                    <input type="submit" id="login" className="login" name="login" value="Login"></input>
                </form>
            </div>
        );
    }
}