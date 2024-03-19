import './Rating.scss';
import starActive from '../../assets/pictogram/active-star.png';
import starInactive from '../../assets/pictogram/inactive-star.png';

function Rating({ rating }) {
    // Prend le rating de Housing en props pour ensuite l'appliquer et itérer sur un tableau les étoiles actives et inactives
    const totalStars = 5;
    const activeStars = Number(rating);
    const inactiveStars = totalStars - activeStars;
  
    return (
      <div className="rating">
        {[...Array(activeStars)].map((_, index) => (
          <img key={index} src={starActive} alt="Active Star" className="rating__active star" />
        ))}
        {[...Array(inactiveStars)].map((_, index) => (
          <img key={index + activeStars} src={starInactive} alt="Inactive Star" className="rating__inactive star" />
        ))}
      </div>
    );
  }
  
  export default Rating;