import './Header.css';

import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;


    return(
        <header>
            <nav>
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