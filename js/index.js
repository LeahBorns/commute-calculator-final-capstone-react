import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';


import Nav from '../js/components/nav';
import Info from '../js/components/info';
import Header from '../js/components/header';
import Footer from '../js/components/footer';


document.addEventListener('DOMContentLoaded', () =>
    {return ReactDOM.render(<Nav />,
        document.getElementById('reactNav'));} );

document.addEventListener('DOMContentLoaded', () =>
    {return ReactDOM.render(<Info />,
        document.getElementById('reactInfo'));} );

document.addEventListener('DOMContentLoaded', () =>
    {return ReactDOM.render(<Header />,
        document.getElementById('reactHeader'));} );

document.addEventListener('DOMContentLoaded', () =>
    {return ReactDOM.render(<Footer />,
        document.getElementById('reactFooter'));} );
