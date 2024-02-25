import { useState, useRef, useEffect } from 'react';
import './Collapse.scss';
import collapseArrow from '../../assets/pictogram/arrow.png';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

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
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Collapse;
