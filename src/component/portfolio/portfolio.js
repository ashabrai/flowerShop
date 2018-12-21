import React from 'react';

import flowerTwo from '../../images/flowerTwo.jpg';
import flowerThree from '../../images/flowerThree.jpg';
import flowerFour from '../../images/flowerFour.jpg';
import flowerFive from '../../images/flowerFive.jpg';
import flowerSix from '../../images/flowerSix.jpg';
import './portfolio.scss';


class Portfolio extends React.Component{
    render() {
        return (
            <section className='container'>

            <div className='item'>
                <img src={flowerTwo}/>
                <img src={flowerThree}/>
                <img src={flowerFour}/>
                <img src={flowerFive}/>
                <img src={flowerSix}/>
            </div>
            </section>
        )
    }
}

export default Portfolio;
