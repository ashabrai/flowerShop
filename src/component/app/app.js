import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import AboutShop from '../aboutShop/about-shop';
import Services from '../services/services';
import ContactForm from '../contact-form/contact-form';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Portfolio from "../portfolio/portfolio";
import '../../../style/base.scss';


class App extends React.Component {
    render() {
        return (
            <div className='main-container'>
                <BrowserRouter>
                    <React.Fragment>
                        <nav className='navStyle'>
                            <header>MILLSWEET & CO
                            </header>
                            <ul>
                                <li><Link to='/portfolio'>Portfolio</Link></li>
                                <li><Link to='/services'>Services</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </nav>
                        <div>
                            {/*<Route path='*' component={AuthRedirect}/>*/}
                            <Route exact path='/dashboard' component={Dashboard}/>
                            <Route exact path='/account' component={Dashboard}/>
                            <Route exact path='/aboutShop' component={AboutShop}/>
                            <Route exact path='/portfolio' component={Portfolio}/>
                            <Route exact path='/services' component={Services}/>
                            <Route exact path ='/contact' component={ContactForm}/>
                        </div>
                        <footer>
                            <p>copyright &copy; 2018 Millsweet</p>
                        </footer>
                    </React.Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
