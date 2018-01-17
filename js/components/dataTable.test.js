import React from 'react';
import {shallow, mount, render} from 'enzyme';

import DataTable from '../js/components/dataTable';

describe('<DataTable />', () => {
    it('Renders without crashing', () => {
        shallow(<DataTable />);
                });
    });
