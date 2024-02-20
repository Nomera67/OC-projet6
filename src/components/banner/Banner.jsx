import './Banner.scss'
import { useLocation } from 'react-router-dom'

import homeBanner from '../../assets/pictures/main-picture-home.webp';
import aboutBanner from '../../assets/pictures/main-picture-about.webp';

function Banner() {

    const location = useLocation();
    const path = location.pathname;

    let bannerContent, bannerAlt, content;
    if(path === '/'){
        bannerContent = homeBanner;
        bannerAlt = 'Crique avec des vagues allant loin sur le sable et plusieurs arbres autour'
        content = 'Chez vous, partout et ailleurs';
    } else if(path === '/about') {
        bannerContent = aboutBanner;
        bannerAlt = 'Forêt dense avec des montagnes enneigées au loin';
        content = '';
    }

    const bannerClass = `banner ${path === '/' ? 'darken' : ''}`


    return (
        <div className={bannerClass}>
            {content && <p className='banner__content'>{content}</p>}
            <img src={bannerContent} alt={bannerAlt} className='banner__img' />
        </div>
    )
}

export default Banner