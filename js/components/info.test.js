import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Info from '../js/components/info';

describe('<Info />', () => {
    it('Renders without crashing', () => {
        shallow(<Info />);
                });
    });
