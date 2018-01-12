import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Header(props) {
    return (
        <section id="main-header">
        <header id="page-title" role="banner">
        <p>Co<sub>2</sub>mmute Calculator</p>
        </header>
        </section>
    )
}



