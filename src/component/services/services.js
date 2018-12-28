import React from 'react';
import FlowerCrown from '../../images/flowerCrown.jpg';
import './services.scss';

class Services extends React.Component{
    render(){
        return (
                <div className='section-Container'>
                    <img src={FlowerCrown}/>

                    <div className='info-section'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
                    </div>
                </div>
        )
    }
}

export default Services;
