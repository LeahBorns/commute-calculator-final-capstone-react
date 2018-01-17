import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function DataTable(props) {
    return (
        <section id="total-table">
        <header>
        <h2>Miles to date</h2>
        </header>
        <table id="table-data">
        </table>
        </section>
    )
}
