import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }


    render(){
    return (
        <section id="sign-in-section">
        <header id="sign-in-header">
        <h3>Sign-in to Co<sub>2</sub>mmute Calculator</h3>
        <p>For demo account use: un: admin pw: admin</p>
        </header>
        <form id="signin-form" >
        <div>
        <label id="signin-label" htmlFor="username"> Username</label>
        <input type="text" placeholder="Username" name="username" id="username" />
        </div>
        <div>
        <label id="password-label" htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name="password" id="password" />
        </div>
        <button id="js-signin-button" type="submit">Sign in</button>
        </form>
        <p id="register">Not registered yet? <a href="#sign-up">Click here</a></p>
        </section>
    )
}
}



