import { useState, useRef, useEffect } from 'react';
import './Collapse.scss';
import collapseArrow from '../../assets/pictogram/arrow.png';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    // Permet d'avoir une référence malgré les cycles de rendu de composant pour l'attacher au content collapse
    // Puis avec current de lire puis ajuster son scrollHeight
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    //Vérification du contenu des informations envoyées en content. Si c'est un tableau alors on fait une liste, sinon un p
    const renderContent = () => {
        if (Array.isArray(content)) {
          return (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          );
        } else {
          return <p>{content}</p>;
        }
    };

    // Permet de réagir à l'ouverture ou la fermeture du conteneur en changeant la hauteur maximale et de faire l'animation nécessaire
    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
            contentRef.current.style.opacity = '1';
        } else {
            contentRef.current.style.maxHeight = '0';
            contentRef.current.style.opacity = '0';
        }
    }, [isOpen]);

    return (
        <div className="collapse">
            <div className="collapse__header">
                <h2 className='collapse__title'>{title}</h2>
                <button className='collapse__toggle' onClick={toggleCollapse}>
                    <img src={collapseArrow} alt="Toggle" className={`collapse__arrow ${isOpen ? 'open' : 'close'}`} />
                </button>
            </div>
            <div className={`collapse__content ${isOpen ? 'show' : ''}`} ref={contentRef}>
                {renderContent()}
            </div>
        </div>
    );
}

export default Collapse;
