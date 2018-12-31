import React from 'react';

import flowerTwo from '../../images/flowerTwo.jpg';
import flowerThree from '../../images/flowerThree.jpg';
import flowerFour from '../../images/flowerFour.jpg';
import flowerFive from '../../images/flowerFive.jpg';
import flowerSix from '../../images/flowerSix.jpg';
import flowerEight from '../../images/flowerEight.jpg';
import './portfolio.scss';
import '../../../style/base.scss';


class Portfolio extends React.Component{
    render() {
        return (
            <div className='container'>

            <div className='item'>
                <img src={flowerTwo}/>
                <img src={flowerThree}/>
                <img src={flowerFour}/>
                <img src={flowerFive}/>
                <img src={flowerSix}/>
                <img src={flowerEight}/>
            </div>
            </div>
        )
    }
}

export default Portfolio;
