import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function TotalMiles(props) {

        return (
            <section id="miles-total">
            <header>
            <h2>Total Mileage</h2>
            <p id="miles-number">500 miles</p>
            </header>
            <div id="green-car">
            <div className="card-name">
            <h3>Fuel Efficient</h3>
            <p className="mpg">50mpg</p>
            </div>
            <img src="assets/images/co2mmute-green.png" alt="green car" />
            <p className="carbon">50 lbs/co2</p>
            </div>
            <div id="sedan-car">
            <div className="card-name">
            <h3>Average Sedan</h3>
            <p className="mpg">25.5mpg</p>
            </div>
            <img src="assets/images/co2mmute-average.png" alt="average car" />
            <p className="carbon">100 lbs/co2</p>
            </div>
            <div id="suv-car">
            <div className="card-name">
            <h3>Average SUV</h3>
            <p className="mpg">18mpg</p>
            </div>
            <img src="assets/images/co2mmute-suv.png" alt="average suv" />
            <p className="carbon">200 lbs/co2</p>
            </div>
            </section>
        )
    }




