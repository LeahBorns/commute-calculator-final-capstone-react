import React from 'react';
import {shallow, mount, render} from 'enzyme';

import MilesForm from '../js/components/milesForm';

describe('<MilesForm />', () => {
    it('Renders without crashing', () => {
        shallow(<MilesForm />);
                });
    });
