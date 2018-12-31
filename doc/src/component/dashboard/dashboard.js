import React from 'react';
import Portfolio from "../portfolio/portfolio";

import './dashboard.scss';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <p className='dashboard-Greeting'> Welcome to Millsweet Flower Co.</p>
            </section>
        );
    }
}

export default Dashboard;
