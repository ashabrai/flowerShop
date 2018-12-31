import React from 'react';
import FlowerCrown from '../../images/flowerCrown.jpg';
import './services.scss';

class Services extends React.Component{
    render(){
        return (
                <div className='section-Container'>
                    <img src={FlowerCrown}/>

                    <div className='info-section'>
                        <p>A local independent floral designer based out of Seattle.
                            I’m open to working on any project, weddings big or small. Local art/small business events.
                            I’m currently doing a monthly subscription that allows me to create floral arrangments that take pieces that are currently in the season while adding my twist to it. If you want to work together or have any questions let me know in my contact tab.
                        </p>
                    </div>
                </div>
        )
    }
}

export default Services;
