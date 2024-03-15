import { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../../components/carousel/Carousel';
import Rating from '../../components/rating/Rating';
import Collapse from '../../components/collapse/Collapse';
import './Housing.scss';

function Housing({ logements }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate('/not-found', { replace: true });
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div className="housing">
      <Carousel pictures={logement.pictures} />

      <div className="housing__informations">
        <div className="housing__main">
          <h1 className='housing__title'>{logement.title}</h1>
          <p className='housing__location'>{logement.location}</p>
          <ul className='housing__tags'>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        
        <div className="housing__secondary">
          <div className="housing__host">
            <img src={logement.host.picture} alt={logement.host.name} className="housing__img" />
            <p className='housing__name'>{logement.host.name}</p>
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      
      <div className="housing__collapses">
        <Collapse
            title='Description'
            content={logement.description}
        />

        <Collapse
          title='Équipements'
          content={logement.equipments}
        />
      </div>

      
    </div>
  )
}

export default Housing