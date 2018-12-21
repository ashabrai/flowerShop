import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import AboutShop from '../aboutShop/about-shop';
import Services from '../services/services';
// import Contact from '../contact/contact';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Portfolio from "../portfolio/portfolio";


class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <React.Fragment>
                        <nav className='navStyle'>
                            <header>
                                <span>Millsweet & Co</span>
                            </header>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/dashboard'>Shop</Link></li>
                                <li><Link to='/portfolio'>Portfolio</Link></li>
                                <li><Link to='/services'>Services</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                            <ul>
                                <li><Link to='/shoppingCart'>Shopping Cart</Link></li>
                            </ul>
                        </nav>
                        <div>
                            {/*<Route path='*' component={AuthRedirect}/>*/}
                            <Route exact path='/dashboard' component={Dashboard}/>
                            <Route exact path='/account' component={Dashboard}/>
                            <Route exact path='/aboutShop' component={AboutShop}/>
                            <Route exact path='/portfolio' component={Portfolio}/>
                            <Route exact path='/services' component={Services}/>
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
