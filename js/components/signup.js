import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section id="sign-up">
            <header>
            <h2>Start Calculating</h2>
            </header>
            <form id="signup-form" >
            <div>
            <label id="label-username" htmlFor="username"> Username</label>
            <input type="text" placeholder="Username" name="username" id="signup-username" />
            </div>
            <div>
            <label id="label-password" htmlFor="password">Password</label>
            <input type="password" placeholder="Password" name="password" id="signup-password" />
            </div>
            <div>
            <label id="label-repassword" htmlFor="confirm-password">Re-enter Password</label>
            <input type="password" placeholder="Re-enter password" name="confirm-password" id="confirm-password" />
            </div>
            <button id="js-signup-button" type="submit">Sign up</button>
            </form>
            </section>
        );
    }
}
