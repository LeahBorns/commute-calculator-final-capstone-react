import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Info(props) {
    return (
        <section id="purpose-statement">
        <h2 id="purpose-header">What is Co<sub>2</sub>mmute Calculator?</h2>
        <div id="site-description">
        <p id="about-one">Co<sub>2</sub>mmute calculator is a simple way for bike commuters to keep track of their milage and calculate the amount of CO<sub>2</sub> diverted each time they pedal vs drive.</p>

        </div>
        <div id="site-infographic">
        <img id="infographic" src="/assets/images/co2mmuteInfographic.jpg" alt="cars infographic" />
        </div>
        <div id="submit-screen">
        <img src="/assets/images/info-screenshot.jpg" alt="screenshots" />
        </div>
        <div id="how-it-works">
        <h3>Calculate your diverted CO<sub>2</sub></h3><br />
        <ol>
        <li>Input your daily bike mileage into our simple calculator</li><br />
        <li>Press CONVERT and see how much CO<sub>2</sub> you diverted by commuting</li>
        </ol>
        </div>
        </section>
    )
}
