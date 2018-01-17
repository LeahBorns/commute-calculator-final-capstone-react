import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default class MilesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }


    render(){
        return (
            <section id="miles-input">
            <header>
            <h2>How many miles did you ride today?</h2>
            </header>
            <form id="miles-form">
            <div>
            <label htmlFor="miles">Date</label>
            <input type="date" name="date" id="date" />
            </div>
            <div>
            <label htmlFor="miles">Miles</label>
            <input type="text" placeholder="Miles" name="miles" id="miles" />
            </div>
            <button id="convert-button" type="submit">Convert</button>
            </form>
            </section>
        )
    }
}



