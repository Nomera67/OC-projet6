import { useState } from 'react';
import './Carousel.scss';
import leftCarousel from '../../assets/pictogram/left-button.png';
import rightCarousel from '../../assets/pictogram/right-button.png';

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);


  // Permet de passer d'une image à l'autre. Si l'on est au bout de l'index, il revient au début et inversement
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <button className='carousel__buttons' onClick={goToPrevious}><img src={leftCarousel} alt="Bouton pour image précédente" /></button>
          <button className='carousel__buttons' onClick={goToNext}><img src={rightCarousel} alt="Bouton pour image suivante" /></button>
        </>
      )}
      
      {/* Pas de description dans le JSON donc utilisation du numéro de slide en JSON */}
      <img src={pictures[currentIndex]} className='carousel__img' alt={`Slide ${currentIndex + 1}`} />

      {pictures.length > 1 && (
        <p className="carousel__number">
          {currentIndex + 1}/{pictures.length}
        </p>
      )}
    </div>
  );
}

export default Carousel;
