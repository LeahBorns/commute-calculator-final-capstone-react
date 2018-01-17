import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';


import Nav from '../js/components/nav';
import Info from '../js/components/info';
import Header from '../js/components/header';
import Footer from '../js/components/footer';
import Signin from '../js/components/signin';
import Signup from '../js/components/signup';
import TotalMiles from '../js/components/totalMiles';
import DataTable from '../js/components/dataTable';
import MilesForm from '../js/components/milesForm';


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

document.addEventListener('DOMContentLoaded', () =>
    {return ReactDOM.render(<Signin />,
        document.getElementById('reactSignin'));} );

document.addEventListener('DOMContentLoaded', () =>
    {return ReactDOM.render(<Signup />,
        document.getElementById('reactSignup'));} );

document.addEventListener('DOMContentLoaded', () =>
    {return ReactDOM.render(<TotalMiles />,
        document.getElementById('reactTotalMiles'));} );

document.addEventListener('DOMContentLoaded', () =>
    {return ReactDOM.render(<DataTable />,
        document.getElementById('reactDataTable'));} );

document.addEventListener('DOMContentLoaded', () =>
    {return ReactDOM.render(<MilesForm />,
        document.getElementById('reactMilesForm'));} );


