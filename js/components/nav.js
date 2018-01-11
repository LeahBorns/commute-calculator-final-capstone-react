import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Nav(props) {
    return (
        <nav role="navigation">
        <div id="messageBox" className="demoMessage">
        <span>Loading ...</span>
        </div>
        <div id="nav-logo">
        <a href="#" id="main-logo">Co<sub>2</sub>mmute Calculator</a>
        </div>
        <div id="nav-links">
        <a id="about" href="#purpose-statement">About</a>
        <a id="signup" href="#sign-up">Sign Up</a>
        </div>
        <div id="sign-in-buttons">
        <button id="js-signin-link">Sign-in</button>
        <button id="js-signout-link">Sign-out</button>
        </div>
        </nav>
    )
}
