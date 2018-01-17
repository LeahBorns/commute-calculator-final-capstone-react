import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Header from '../js/components/header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
                });
    });
