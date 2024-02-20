import './Footer.scss';

import darkLogo from '../../assets/logos/logo-dark-desktop.png';

function Footer() {
    return(
        <footer className='footer'>
            <div className="footer__informations">
                <div className="footer__img">
                    <img src={darkLogo} alt="Logo Kasa blanc" />
                </div>
                <div className="footer__rights">
                    © 2020 Kasa. All rights reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;