import './Header.scss';

import { Link, useLocation } from 'react-router-dom';

import largeLogo from '../../assets/logos/logo-light-desktop.png';
import smallLogo from '../../assets/logos/logo-light-mobile.png';



function Header() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;


    return(
        <header className='header'>
            <div className="header__logo">
                <img src={largeLogo} alt="Large Logo" className="header__logo--large"/>
                <img src={smallLogo} alt="Small Logo" className="header__logo--small"/>
            </div>
            <nav className='header__nav'>
                <Link to="/" className={isActive('/') ? 'active-link' : 'link'}>
                    Accueil
                </Link>
                <Link to="/about" className={isActive('/about') ? 'active-link' : 'link'}>
                    À propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;