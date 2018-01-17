import React from 'react';
import {shallow, mount, render} from 'enzyme';

import TotalMiles from '../js/components/totalMiles';

describe('<TotalMiles />', () => {
    it('Renders without crashing', () => {
        shallow(<TotalMiles />);
                });
    });
