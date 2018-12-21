import React from 'react';
import Portfolio from "../portfolio/portfolio";
import AboutShop from "../aboutShop/about-shop";


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <p> Welcome to Millsweet Flower Co.</p>
                <AboutShop/>
                <Portfolio/>
            </section>
        );
    }
}

export default Dashboard;
