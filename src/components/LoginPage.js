import React from 'react';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    
        this.handleClick = this.handleClick.bind(this);
      }
    handleLoginSubmit(e) {
        e.preventDefault();

        const myElement = document.getElementById("errorMsg");
        console.log(myElement);
    }
    render() {
        return (
            <div>
                <h1 id="loginPageTitle" className="loginPageTitle" name="loginPageTitle">Login Page</h1>
                <hr />
                <form action={this.handleLoginSubmit}>
                    <p id="errorMsg" className="errorMsg" name="errorMsg" hidden>The username and password fields cannot be empty</p>
                    <input type="text" id="email" className="email" name="email" placeholder="Email"></input> <br />
                    <input type="password" id="password" className="password" name="password" placeholder="Password"></input> <br />
                    <input type="submit" id="login" className="login" name="login" value="Login"></input>
                </form>
            </div>
        );
    }
}