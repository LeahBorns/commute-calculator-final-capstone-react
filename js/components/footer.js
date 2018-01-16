import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Footer(props) {
    return (
        <footer role="contentinfo">
        <p id="footer-note">Built by<a href="https://github.com/LeahBorns">Leah Borns</a></p>
        </footer>
    )
}



